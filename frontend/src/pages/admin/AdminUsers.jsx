import { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminUsers = () => {
  const { users, deleteUser, updateUserRole } = useContext(AdminContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Users Management</h1>
      </div>

      <div className="admin-card">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="admin-search" style={{width: '300px'}}>
            <i className='bx bx-search'></i>
            <input 
              type="text" 
              placeholder="Search users..." 
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
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td><strong>{user.name}</strong></td>
                  <td>{user.email}</td>
                  <td>
                    <select 
                      className="admin-form-control" 
                      value={user.role || 'User'} 
                      onChange={(e) => updateUserRole(user.id, e.target.value)}
                      disabled={user.role === 'Admin'} // Prevent accidentally downgrading yourself
                    >
                      <option value="User">User</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </td>
                  <td>
                    <button 
                      className="admin-action-btn delete" 
                      title="Delete" 
                      onClick={() => deleteUser(user.id)}
                      disabled={user.role === 'Admin'}
                    >
                      <i className='bx bx-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-5 text-muted">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
