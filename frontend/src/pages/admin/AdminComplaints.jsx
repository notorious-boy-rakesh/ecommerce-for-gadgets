import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminComplaints = () => {
  const { complaints, deleteComplaint } = useContext(AdminContext);

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Complaints Management</h1>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Order ID</th>
                <th>Type</th>
                <th>Subject</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map(comp => (
                <tr key={comp.id}>
                  <td>{new Date(comp.createdAt).toLocaleDateString()}</td>
                  <td><strong>{comp.fullname}</strong></td>
                  <td>{comp.orderid || 'N/A'}</td>
                  <td>{comp.complaintType}</td>
                  <td>{comp.subject}</td>
                  <td>
                    <button className="admin-action-btn delete" title="Delete" onClick={() => deleteComplaint(comp.id)}>
                      <i className='bx bx-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
              {complaints.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-5 text-muted">No complaints found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminComplaints;
