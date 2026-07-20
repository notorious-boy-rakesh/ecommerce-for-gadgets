import { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AdminBlogs = () => {
  const { blogs, addBlog, deleteBlog, updateBlog } = useContext(AdminContext);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newBlogTitle || !newBlogContent) return;
    await addBlog({ title: newBlogTitle, content: newBlogContent });
    setNewBlogTitle('');
    setNewBlogContent('');
  };

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Blog Management</h1>
      </div>

      <div className="admin-card mb-4">
        <h5 className="mb-3">Add New Post</h5>
        <form onSubmit={handleAdd}>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Blog Title" 
              className="admin-form-control w-100 mb-2"
              value={newBlogTitle}
              onChange={(e) => setNewBlogTitle(e.target.value)}
              required
            />
            <textarea 
              placeholder="Blog Content..." 
              className="admin-form-control w-100"
              rows="4"
              value={newBlogContent}
              onChange={(e) => setNewBlogContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="admin-btn-primary">
            <i className='bx bx-plus'></i> Publish Post
          </button>
        </form>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog.id}>
                  <td><strong>{blog.title}</strong></td>
                  <td>{blog.author}</td>
                  <td>
                    <span className={`admin-badge ${blog.isPublished ? 'success' : 'warning'}`}>
                      {blog.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="admin-action-btn" 
                      title={blog.isPublished ? "Unpublish" : "Publish"}
                      onClick={() => updateBlog(blog.id, { isPublished: !blog.isPublished })}
                    >
                      <i className={`bx ${blog.isPublished ? 'bx-hide' : 'bx-show'}`}></i>
                    </button>
                    <button className="admin-action-btn delete" title="Delete" onClick={() => deleteBlog(blog.id)}>
                      <i className='bx bx-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-5 text-muted">No blog posts found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminBlogs;
