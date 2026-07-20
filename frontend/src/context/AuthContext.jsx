import { createContext, useState, useEffect } from 'react';
import api from '../api/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load session on mount
    const loadSession = async () => {
      try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setCurrentUser(parsedUser);
          
          // Optionally verify with backend
          const { data } = await api.get('/auth/me');
          if (data.success) {
            const updatedUser = { ...parsedUser, ...data.data };
            setCurrentUser(updatedUser);
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));
          }
        }
      } catch (error) {
        console.error('Failed to parse or fetch current user', error);
        // If 401, clear local storage
        if (error.response && error.response.status === 401) {
          setCurrentUser(null);
          localStorage.removeItem('currentUser');
        }
      } finally {
        setLoading(false);
      }
    };

    loadSession();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      
      if (data.success) {
        setCurrentUser(data.data);
        localStorage.setItem('currentUser', JSON.stringify(data.data));
        return { success: true };
      }
      return { success: false, message: 'Invalid email or password.' };
    } catch (error) {
      console.error('Login error', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'An unexpected error occurred during login.' 
      };
    }
  };

  const signup = async (userData) => {
    try {
      const { data } = await api.post('/auth/register', userData);
      
      if (data.success) {
        // Automatically log them in after signup? The backend returns the token and user data.
        setCurrentUser(data.data);
        localStorage.setItem('currentUser', JSON.stringify(data.data));
        return { success: true };
      }
      return { success: false, message: 'Registration failed.' };
    } catch (error) {
      console.error('Signup error', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'An unexpected error occurred during signup.' 
      };
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error', error);
    } finally {
      setCurrentUser(null);
      localStorage.removeItem('currentUser');
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
