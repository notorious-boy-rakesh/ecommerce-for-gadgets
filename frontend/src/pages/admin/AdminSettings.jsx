import { useContext, useState, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminSettings = () => {
  const { settings, updateSetting } = useContext(AdminContext);
  
  // Local state for the form so we don't spam the API on every keystroke
  const [localSettings, setLocalSettings] = useState({
    siteName: '',
    contactEmail: '',
    supportPhone: '',
    maintenanceMode: false,
    theme: 'light'
  });

  // Sync local state with context once context loads
  useEffect(() => {
    if (settings) {
      setLocalSettings({
        siteName: settings.siteName || '',
        contactEmail: settings.contactEmail || 'support@teckkie.com',
        supportPhone: settings.supportPhone || '+1 234 567 8900',
        maintenanceMode: settings.maintenanceMode || false,
        theme: settings.theme || 'light'
      });
    }
  }, [settings]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async () => {
    // Send the whole localSettings object directly
    const res = await updateSetting(localSettings);
    if (res.success) {
      alert('Settings saved successfully!');
    } else {
      alert('Failed to save settings.');
    }
  };

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Website Settings</h1>
        <button className="admin-btn-primary" onClick={handleSave}>
          <i className='bx bx-save'></i> Save Changes
        </button>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="admin-card mb-4">
            <h4 className="mb-4" style={{fontSize: '1.1rem', fontWeight: 600}}>General Settings</h4>
            
            <div className="admin-form-group">
              <label className="admin-form-label">Website Name</label>
              <input 
                type="text" 
                name="siteName"
                className="admin-form-control" 
                value={localSettings.siteName}
                onChange={handleChange}
              />
            </div>
            
            <div className="admin-form-group">
              <label className="admin-form-label">Contact Email</label>
              <input 
                type="email" 
                name="contactEmail"
                className="admin-form-control" 
                value={localSettings.contactEmail}
                onChange={handleChange}
              />
            </div>
            
            <div className="admin-form-group">
              <label className="admin-form-label">Support Phone</label>
              <input 
                type="text" 
                name="supportPhone"
                className="admin-form-control" 
                value={localSettings.supportPhone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="admin-card">
            <h4 className="mb-4" style={{fontSize: '1.1rem', fontWeight: 600}}>Advanced Settings</h4>
            
            <div className="admin-form-group d-flex align-items-center justify-content-between">
              <div>
                <label className="admin-form-label mb-0">Maintenance Mode</label>
                <small className="text-muted d-block mt-1">Temporarily disable the public website</small>
              </div>
              <div className="form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  role="switch" 
                  name="maintenanceMode"
                  checked={localSettings.maintenanceMode}
                  onChange={handleChange}
                  style={{transform: 'scale(1.5)', cursor: 'pointer'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSettings;
