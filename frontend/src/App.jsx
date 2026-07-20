import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AdminProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AdminProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App;
