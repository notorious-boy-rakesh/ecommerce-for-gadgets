import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';

const Dashboard = () => {
  const { products, orders, users } = useContext(AdminContext);

  const revenue = orders.reduce((acc, order) => acc + (order.status !== 'Cancelled' ? order.amount : 0), 0);

  const handleGenerateReport = () => {
    // Generate a detailed HTML report for PDF printing
    const printWindow = window.open('', '_blank');
    
    const htmlContent = `
      <html>
        <head>
          <title>Teckkie Gadgets - Admin Report</title>
          <style>
            body { font-family: 'Inter', sans-serif; padding: 40px; color: #333; }
            h1 { color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px; }
            .summary-box { display: flex; gap: 20px; margin-bottom: 40px; }
            .stat-card { border: 1px solid #ddd; padding: 20px; border-radius: 8px; flex: 1; text-align: center; }
            .stat-card h3 { margin: 0 0 10px 0; font-size: 14px; color: #666; text-transform: uppercase; }
            .stat-card p { margin: 0; font-size: 24px; font-weight: bold; color: #2c3e50; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background-color: #f8f9fa; color: #333; }
            .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <h1>Teckkie Gadgets Business Report</h1>
          <p>Generated on: ${new Date().toLocaleString()}</p>
          
          <div class="summary-box">
            <div class="stat-card">
              <h3>Total Revenue</h3>
              <p>Rs ${revenue.toLocaleString()}</p>
            </div>
            <div class="stat-card">
              <h3>Total Orders</h3>
              <p>${orders.length}</p>
            </div>
            <div class="stat-card">
              <h3>Products</h3>
              <p>${products.length}</p>
            </div>
            <div class="stat-card">
              <h3>Total Users</h3>
              <p>${users.length}</p>
            </div>
          </div>

          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${orders.map(order => `
                <tr>
                  <td>${order.id}</td>
                  <td>${order.customer}</td>
                  <td>${order.date}</td>
                  <td>Rs ${order.amount.toLocaleString()}</td>
                  <td>${order.status}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          <div class="footer">
            Confidential - Teckkie Gadgets Internal Use Only
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load before printing
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard Overview</h1>
        <button className="admin-btn-primary" onClick={handleGenerateReport}>
          <i className='bx bx-download'></i> Generate Report
        </button>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-6 col-lg-3">
          <div className="admin-card admin-stat-card">
            <div className="admin-stat-icon primary">
              <i className='bx bx-rupee'></i>
            </div>
            <div className="admin-stat-details">
              <h4>Total Revenue</h4>
              <p>₹{revenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="admin-card admin-stat-card">
            <div className="admin-stat-icon success">
              <i className='bx bx-cart-alt'></i>
            </div>
            <div className="admin-stat-details">
              <h4>Total Orders</h4>
              <p>{orders.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="admin-card admin-stat-card">
            <div className="admin-stat-icon warning">
              <i className='bx bx-box'></i>
            </div>
            <div className="admin-stat-details">
              <h4>Products</h4>
              <p>{products.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="admin-card admin-stat-card">
            <div className="admin-stat-icon danger">
              <i className='bx bx-group'></i>
            </div>
            <div className="admin-stat-details">
              <h4>Total Users</h4>
              <p>{users.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="admin-card">
            <h4 className="mb-4" style={{fontSize: '1.1rem', fontWeight: 600}}>Recent Orders</h4>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.slice(0, 5).map(order => (
                    <tr key={order.id}>
                      <td><strong>{order.id}</strong></td>
                      <td>{order.customer}</td>
                      <td>{order.date}</td>
                      <td>₹{order.amount.toLocaleString()}</td>
                      <td>
                        <span className={`admin-badge ${order.status === 'Delivered' ? 'success' : order.status === 'Cancelled' ? 'danger' : 'warning'}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="admin-card">
            <h4 className="mb-4" style={{fontSize: '1.1rem', fontWeight: 600}}>Low Stock Alert</h4>
            <div className="d-flex flex-column gap-3">
              {products.filter(p => p.stock < 20).map(product => (
                <div key={product.id} className="d-flex align-items-center gap-3 pb-3 border-bottom border-light">
                  <img src={product.img} alt={product.name} className="admin-product-img" />
                  <div>
                    <h6 className="mb-1" style={{fontSize: '0.9rem', fontWeight: 600}}>{product.name}</h6>
                    <span className="text-danger" style={{fontSize: '0.8rem', fontWeight: 600}}>{product.stock} left in stock</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
