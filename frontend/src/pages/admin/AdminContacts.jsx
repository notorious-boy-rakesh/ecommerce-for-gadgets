import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminContacts = () => {
  const { contactMessages, deleteContactMessage } = useContext(AdminContext);

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Contact Messages</h1>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contactMessages.map(msg => (
                <tr key={msg.id}>
                  <td>{new Date(msg.createdAt).toLocaleDateString()}</td>
                  <td><strong>{msg.name}</strong></td>
                  <td>{msg.email}</td>
                  <td>{msg.subject}</td>
                  <td><small>{msg.message}</small></td>
                  <td>
                    <button className="admin-action-btn delete" title="Delete" onClick={() => deleteContactMessage(msg.id)}>
                      <i className='bx bx-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
              {contactMessages.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-5 text-muted">No messages found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminContacts;
