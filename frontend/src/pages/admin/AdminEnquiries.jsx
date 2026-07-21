import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminEnquiries = () => {
  const { enquiries, deleteEnquiry } = useContext(AdminContext);

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Enquiries Management</h1>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Subject</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map(enq => (
                <tr key={enq.id}>
                  <td>{new Date(enq.createdAt).toLocaleDateString()}</td>
                  <td><strong>{enq.fullname}</strong></td>
                  <td>{enq.email}</td>
                  <td>{enq.enquiryType}</td>
                  <td>{enq.subject}</td>
                  <td>
                    <button className="admin-action-btn delete" title="Delete" onClick={() => deleteEnquiry(enq.id)}>
                      <i className='bx bx-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
              {enquiries.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-5 text-muted">No enquiries found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminEnquiries;
