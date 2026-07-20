import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminOrders = () => {
  const { orders, updateOrderStatus, deleteOrder } = useContext(AdminContext);

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Orders Management</h1>
      </div>
      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td><strong>{order.id}</strong></td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>₹{order.amount.toLocaleString()}</td>
                  <td>
                    <select 
                      className="admin-form-control py-1" 
                      style={{width: 'auto', minWidth: '120px'}}
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <button className="admin-action-btn delete" title="Delete" onClick={() => deleteOrder(order.id)}>
                      <i className='bx bx-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
