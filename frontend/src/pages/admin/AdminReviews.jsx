import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminReviews = () => {
  const { reviews, deleteReview, updateReview } = useContext(AdminContext);

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Reviews Moderation</h1>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>User</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map(review => (
                <tr key={review.id}>
                  <td><strong>{review.product?.name || 'Unknown Product'}</strong></td>
                  <td>{review.user?.name || 'Unknown User'}</td>
                  <td>
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </td>
                  <td><small>{review.comment}</small></td>
                  <td>
                    <span className={`admin-badge ${review.isApproved ? 'success' : 'warning'}`}>
                      {review.isApproved ? 'Approved' : 'Pending'}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="admin-action-btn" 
                      title={review.isApproved ? "Reject" : "Approve"}
                      onClick={() => updateReview(review.id, !review.isApproved)}
                    >
                      <i className={`bx ${review.isApproved ? 'bx-x' : 'bx-check'}`}></i>
                    </button>
                    <button className="admin-action-btn delete" title="Delete" onClick={() => deleteReview(review.id)}>
                      <i className='bx bx-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
              {reviews.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-5 text-muted">No reviews found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminReviews;
