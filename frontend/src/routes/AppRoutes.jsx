import { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import BlankLayout from '../layouts/BlankLayout';
import ProtectedRoute from './ProtectedRoute';
import AdminLayout from '../layouts/AdminLayout';
import AdminProtectedRoute from './AdminProtectedRoute';
import { AdminContext } from '../context/AdminContext';

// Pages
import Index from '../pages/Index';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Enquiry from '../pages/Enquiry';
import Complaint from '../pages/Complaint';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Copyright from '../pages/Copyright';
import Maintenance from '../pages/Maintenance';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import NotFound from '../pages/NotFound';

// Admin Pages
import AdminLogin from '../pages/admin/AdminLogin';
import Dashboard from '../pages/admin/Dashboard';
import AdminProducts from '../pages/admin/AdminProducts';
import AdminOrders from '../pages/admin/AdminOrders';
import AdminSettings from '../pages/admin/AdminSettings';
import AdminPlaceholder from '../pages/admin/AdminPlaceholder';

import AdminCategories from '../pages/admin/AdminCategories';
import AdminUsers from '../pages/admin/AdminUsers';
import AdminReviews from '../pages/admin/AdminReviews';
import AdminBlogs from '../pages/admin/AdminBlogs';

const AppRoutes = () => {
  const { settings } = useContext(AdminContext);
  const location = useLocation();

  const isMaintenanceMode = settings?.maintenanceMode;
  const isAdminRoute = location.pathname.startsWith('/admin');

  // If maintenance mode is active, completely block the app UI (except for /admin*)
  if (isMaintenanceMode && !isAdminRoute) {
    return <Maintenance />;
  }

  return (
    <Routes>
      <Route element={<BlankLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Route>
      
      {/* User App Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/copyright" element={<Copyright />} />
        </Route>
      </Route>

      {/* Admin App Routes */}
      <Route element={<AdminProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="reviews" element={<AdminReviews />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="profile" element={<AdminPlaceholder title="Admin Profile" icon="bx-user" />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
