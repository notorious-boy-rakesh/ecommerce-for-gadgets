import { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminProducts = () => {
  const { products, deleteProduct, addProduct, updateProduct } = useContext(AdminContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  // Extract unique categories from products
  const uniqueCategoryNames = [...new Set(products.map(p => p.category).filter(Boolean))];

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    price: '',
    img: '',
    category: '',
    stock: ''
  });

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === '' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setFormData({ name: '', desc: '', price: '', img: '', category: '', stock: '' });
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name || '',
      desc: product.desc || '',
      price: product.price || '',
      img: product.img || '',
      category: product.category || '',
      stock: product.stock !== undefined ? product.stock : ''
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productPayload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    };
    
    let result;
    if (editingProduct) {
      result = await updateProduct(editingProduct.id, productPayload);
    } else {
      result = await addProduct(productPayload);
    }

    if (result.success) {
      setShowModal(false);
      setEditingProduct(null);
      setFormData({ name: '', desc: '', price: '', img: '', category: '', stock: '' });
    } else {
      alert(result.message || 'Error saving product');
    }
  };

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Products Management</h1>
        <button className="admin-btn-primary" onClick={handleAddNew}>
          <i className='bx bx-plus'></i> Add Product
        </button>
      </div>

      {showModal && (
        <div className="admin-modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000,
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div className="admin-card" style={{ width: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="m-0">{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>
              <button className="btn btn-sm btn-light" onClick={() => setShowModal(false)}>
                <i className='bx bx-x' style={{fontSize: '1.5rem'}}></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input type="text" name="name" className="admin-form-control w-100" value={formData.name} onChange={handleInputChange} required />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input type="url" name="img" className="admin-form-control w-100" value={formData.img} onChange={handleInputChange} required />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Price (₹)</label>
                  <input type="number" name="price" className="admin-form-control w-100" min="0" step="0.01" value={formData.price} onChange={handleInputChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Stock</label>
                  <input type="number" name="stock" className="admin-form-control w-100" min="0" value={formData.stock} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <input type="text" name="category" className="admin-form-control w-100" value={formData.category} onChange={handleInputChange} required list="categoryList" />
                <datalist id="categoryList">
                  {uniqueCategoryNames.map(cat => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>

              <div className="mb-4">
                <label className="form-label">Description</label>
                <textarea name="desc" className="admin-form-control w-100" rows="3" value={formData.desc} onChange={handleInputChange} required></textarea>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="admin-btn-primary">{editingProduct ? 'Update Product' : 'Save Product'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="admin-card">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="admin-search" style={{width: '300px'}}>
            <i className='bx bx-search'></i>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{width: '100%'}}
            />
          </div>
          <div>
            <select 
              className="admin-form-control" 
              style={{width: 'auto'}}
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {uniqueCategoryNames.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>
                    <div className="admin-product-cell">
                      <img src={product.img} alt={product.name} className="admin-product-img" />
                      <div>
                        <strong>{product.name}</strong>
                        <div style={{fontSize: '0.8rem', color: 'var(--admin-text-muted)'}}>{product.badge}</div>
                      </div>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td>₹{product.price.toLocaleString()}</td>
                  <td>
                    <span className={`admin-badge ${product.stock > 20 ? 'success' : product.stock > 0 ? 'warning' : 'danger'}`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td>
                    <button className="admin-action-btn" title="Edit" onClick={() => handleEdit(product)}>
                      <i className='bx bx-edit-alt'></i>
                    </button>
                    <button className="admin-action-btn delete" title="Delete" onClick={() => deleteProduct(product.id)}>
                      <i className='bx bx-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-5 text-muted">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
