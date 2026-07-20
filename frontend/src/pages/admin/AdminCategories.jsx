import { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminCategories = () => {
  const { products, updateProduct } = useContext(AdminContext);
  const [searchTerm, setSearchTerm] = useState('');

  // Dynamically analyze categories from existing products
  const uniqueCategoryNames = [...new Set(products.map(p => p.category).filter(Boolean))];
  
  const dynamicCategories = uniqueCategoryNames.map(catName => ({
    name: catName,
    slug: catName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
    count: products.filter(p => p.category === catName).length
  }));

  const filteredCategories = dynamicCategories.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditName = async (oldName) => {
    const newName = prompt(`Enter new name for category "${oldName}":`, oldName);
    if (!newName || newName.trim() === '' || newName === oldName) return;
    
    // Bulk update all products that have the old category name
    const productsToUpdate = products.filter(p => p.category === oldName);
    
    const confirmUpdate = window.confirm(`This will update ${productsToUpdate.length} product(s). Are you sure?`);
    if (confirmUpdate) {
      for (const product of productsToUpdate) {
        await updateProduct(product.id, { ...product, category: newName.trim() });
      }
      alert('Category successfully updated across all products!');
    }
  };

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Categories Management</h1>
        <div className="text-muted">
          <i className='bx bx-info-circle me-1'></i>
          Categories are automatically analyzed and dynamically generated from your products.
        </div>
      </div>

      <div className="admin-card">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="admin-search" style={{width: '300px'}}>
            <i className='bx bx-search'></i>
            <input 
              type="text" 
              placeholder="Search categories..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{width: '100%'}}
            />
          </div>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Category Name</th>
                <th>URL Slug</th>
                <th>Products Count</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map(cat => (
                <tr key={cat.name}>
                  <td><strong>{cat.name}</strong></td>
                  <td><code>{cat.slug}</code></td>
                  <td>
                    <span className="admin-badge primary">{cat.count} Products</span>
                  </td>
                  <td>
                    <button 
                      className="admin-action-btn" 
                      title="Rename Category" 
                      onClick={() => handleEditName(cat.name)}
                    >
                      <i className='bx bx-edit-alt'></i>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredCategories.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-5 text-muted">No categories found in products.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminCategories;
