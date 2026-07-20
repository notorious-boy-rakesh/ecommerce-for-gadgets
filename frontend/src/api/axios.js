import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Important for cookies (JWT) if using them
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Optionally we can also attach token from localStorage if fallback needed
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (currentUser && currentUser.token) {
      config.headers.Authorization = `Bearer ${currentUser.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
