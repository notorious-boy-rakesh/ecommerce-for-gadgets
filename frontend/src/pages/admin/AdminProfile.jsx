import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axios';

const AdminProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [status, setStatus] = useState({ loading: false, message: '', isError: false });

  useEffect(() => {
    if (currentUser) {
      setFormData(prev => ({
        ...prev,
        name: currentUser.name || '',
        email: currentUser.email || ''
      }));
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      setStatus({ loading: false, message: 'Passwords do not match', isError: true });
      return;
    }

    setStatus({ loading: true, message: '', isError: false });
    try {
      const payload = {
        name: formData.name,
        email: formData.email
      };
      if (formData.password) {
        payload.password = formData.password;
      }

      await api.put('/users/profile', payload);
      
      // Update local storage to reflect new name/email
      const updatedUser = { ...currentUser, name: formData.name, email: formData.email };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      
      setStatus({ loading: false, message: 'Profile updated successfully', isError: false });
      setFormData(prev => ({ ...prev, password: '', confirmPassword: '' }));
    } catch (err) {
      setStatus({ 
        loading: false, 
        message: err.response?.data?.message || 'Error updating profile', 
        isError: true 
      });
    }
  };

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Admin Profile</h1>
      </div>

      <div className="admin-card" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit} className="p-2">
          {status.message && (
            <div className={`alert ${status.isError ? 'alert-danger' : 'alert-success'} mb-4 py-2`}>
              {status.message}
            </div>
          )}
          
          <div className="mb-4">
            <label className="form-label fw-bold">Full Name</label>
            <input 
              type="text" 
              name="name"
              className="form-control" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="form-label fw-bold">Email Address</label>
            <input 
              type="email" 
              name="email"
              className="form-control" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <hr className="my-4" />
          <h5 className="mb-3 fw-bold">Change Password (Optional)</h5>
          
          <div className="mb-4">
            <label className="form-label fw-bold">New Password</label>
            <input 
              type="password" 
              name="password"
              className="form-control" 
              placeholder="Leave blank to keep current password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
            />
          </div>
          
          <div className="mb-4">
            <label className="form-label fw-bold">Confirm New Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              className="form-control" 
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          
          <button type="submit" className="btn-primary-tg w-100" disabled={status.loading}>
            {status.loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminProfile;
