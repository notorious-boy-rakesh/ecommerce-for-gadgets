import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { AdminProvider } from './context/AdminContext';
import ScrollToTop from './components/Common/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AdminProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </AdminProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App;
