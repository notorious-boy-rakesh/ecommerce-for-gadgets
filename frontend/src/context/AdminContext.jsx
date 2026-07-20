import { createContext, useState, useEffect } from 'react';
import api from '../api/axios';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [settings, setSettings] = useState({
    siteName: 'Teckkie Gadgets',
    maintenanceMode: false,
    theme: 'light'
  });
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Helper to extract data regardless of {success: true, data: []} or directly []
  const extractData = (resData) => (resData.data ? resData.data : resData);

  // Fetch initial public data
  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        const { data: prodData } = await api.get('/products');
        setProducts(extractData(prodData).map(item => ({ ...item, id: item._id })));

        const { data: catData } = await api.get('/categories');
        setCategories(extractData(catData).map(item => ({ ...item, id: item._id })));

        const { data: blogData } = await api.get('/blogs');
        setBlogs(extractData(blogData).map(item => ({ ...item, id: item._id })));
      } catch (error) {
        console.error('Error fetching public admin context data', error);
      }
    };
    fetchPublicData();
  }, []);

  // Fetch admin data once authenticated
  useEffect(() => {
    const fetchAdminData = async () => {
      if (isAdminAuthenticated) {
        try {
          const { data: orderData } = await api.get('/orders');
          setOrders(extractData(orderData).map(item => ({ ...item, id: item._id })));
          
          const { data: userData } = await api.get('/users');
          setUsers(extractData(userData).map(item => ({ ...item, id: item._id })));
          
          const { data: reviewData } = await api.get('/reviews');
          setReviews(extractData(reviewData).map(item => ({ ...item, id: item._id })));
          
          const { data: settingsData } = await api.get('/settings');
          setSettings(extractData(settingsData));
        } catch (error) {
          console.error('Error fetching admin private data', error);
        }
      }
    };
    fetchAdminData();
  }, [isAdminAuthenticated]);

  const adminLogin = async (adminId, password) => {
    try {
      const { data } = await api.post('/auth/admin-login', { adminId, password });
      
      if (data.success || data.token) {
        setIsAdminAuthenticated(true);
        localStorage.setItem('currentUser', JSON.stringify(extractData(data)));
        return { success: true };
      }
      return { success: false, message: 'Invalid Admin Credentials' };
    } catch (error) {
      console.error('Admin Login error', error);
      return { success: false, message: error.response?.data?.message || 'Invalid Admin Credentials' };
    }
  };

  const adminLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error', error);
    } finally {
      setIsAdminAuthenticated(false);
      localStorage.removeItem('currentUser');
    }
  };

  // Generic helpers for CRUD
  const addEntity = async (endpoint, payload, state, setState) => {
    try {
      const { data } = await api.post(endpoint, payload);
      const mapped = { ...extractData(data), id: extractData(data)._id };
      setState([...state, mapped]);
      return { success: true };
    } catch (error) {
      console.error(`Error adding to ${endpoint}`, error);
      return { success: false, message: error.response?.data?.message || 'Error occurred' };
    }
  };

  const updateEntity = async (endpoint, id, payload, state, setState) => {
    try {
      const { data } = await api.put(`${endpoint}/${id}`, payload);
      const mapped = { ...extractData(data), id: extractData(data)._id };
      setState(state.map(item => item.id === id ? mapped : item));
      return { success: true };
    } catch (error) {
      console.error(`Error updating ${endpoint}/${id}`, error);
      return { success: false, message: 'Error occurred' };
    }
  };

  const deleteEntity = async (endpoint, id, state, setState) => {
    try {
      await api.delete(`${endpoint}/${id}`);
      setState(state.filter(item => item.id !== id));
      return { success: true };
    } catch (error) {
      console.error(`Error deleting from ${endpoint}/${id}`, error);
      return { success: false, message: 'Error occurred' };
    }
  };

  // Specific Actions
  const addProduct = (p) => addEntity('/products', p, products, setProducts);
  const updateProduct = (id, p) => updateEntity('/products', id, p, products, setProducts);
  const deleteProduct = (id) => deleteEntity('/products', id, products, setProducts);

  const addCategory = (c) => addEntity('/categories', c, categories, setCategories);
  const updateCategory = (id, c) => updateEntity('/categories', id, c, categories, setCategories);
  const deleteCategory = (id) => deleteEntity('/categories', id, categories, setCategories);

  const addBlog = (b) => addEntity('/blogs', b, blogs, setBlogs);
  const updateBlog = (id, b) => updateEntity('/blogs', id, b, blogs, setBlogs);
  const deleteBlog = (id) => deleteEntity('/blogs', id, blogs, setBlogs);

  const updateOrderStatus = (id, status) => updateEntity('/orders', id, { status }, orders, setOrders);
  const deleteOrder = (id) => deleteEntity('/orders', id, orders, setOrders);

  const updateUserRole = (id, role) => updateEntity('/users', id, { role }, users, setUsers);
  const deleteUser = (id) => deleteEntity('/users', id, users, setUsers);

  const updateReview = (id, isApproved) => updateEntity('/reviews', id, { isApproved }, reviews, setReviews);
  const deleteReview = (id) => deleteEntity('/reviews', id, reviews, setReviews);

  const updateSetting = async (keyOrObj, value) => {
    try {
      const newSettings = typeof keyOrObj === 'object' 
        ? { ...settings, ...keyOrObj } 
        : { ...settings, [keyOrObj]: value };
        
      const { data } = await api.put('/settings', newSettings);
      setSettings(extractData(data));
      return { success: true };
    } catch (error) {
      console.error('Error updating settings', error);
      return { success: false };
    }
  };

  return (
    <AdminContext.Provider value={{
      products, setProducts, addProduct, updateProduct, deleteProduct,
      categories, setCategories, addCategory, updateCategory, deleteCategory,
      orders, setOrders, updateOrderStatus, deleteOrder,
      users, setUsers, updateUserRole, deleteUser,
      reviews, setReviews, updateReview, deleteReview,
      blogs, setBlogs, addBlog, updateBlog, deleteBlog,
      settings, updateSetting,
      isAdminAuthenticated, adminLogin, adminLogout
    }}>
      {children}
    </AdminContext.Provider>
  );
};
