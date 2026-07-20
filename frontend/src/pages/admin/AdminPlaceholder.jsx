const AdminPlaceholder = ({ title, icon }) => {
  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">{title}</h1>
        <button className="admin-btn-primary">
          <i className={`bx bx-plus`}></i> Add New
        </button>
      </div>
      <div className="admin-card d-flex flex-column align-items-center justify-content-center" style={{minHeight: '400px'}}>
        <i className={`bx ${icon} mb-3`} style={{fontSize: '4rem', color: 'var(--admin-border)'}}></i>
        <h3 className="text-muted">This module is under development</h3>
        <p className="text-muted text-center" style={{maxWidth: '400px'}}>
          The frontend architecture for the {title} module is ready. Premium UI components will be implemented here soon.
        </p>
      </div>
    </>
  );
};

export default AdminPlaceholder;
