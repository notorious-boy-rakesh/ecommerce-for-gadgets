import { Link } from 'react-router-dom';

const Maintenance = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
      <div className="text-center" style={{ maxWidth: '600px', padding: '40px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>
          🛠️
        </div>
        <h1 style={{ fontWeight: '800', color: '#2c3e50', marginBottom: '15px' }}>We'll be back soon!</h1>
        <p style={{ fontSize: '18px', color: '#6c757d', marginBottom: '30px', lineHeight: '1.6' }}>
          Teckkie Gadgets is currently undergoing scheduled maintenance to bring you an even better shopping experience. We apologize for the inconvenience and appreciate your patience.
        </p>
        <div style={{ padding: '20px', backgroundColor: '#f1f5f9', borderRadius: '8px' }}>
          <p style={{ margin: 0, fontWeight: '600', color: '#334155' }}>
            Need urgent help? <br />
            <span style={{ fontWeight: '400', fontSize: '14px' }}>Contact our support team at support@teckkie.com</span>
          </p>
        </div>
        <div className="mt-4">
          {/* Hidden link for admins to quickly access login if they land here */}
          <Link to="/admin-login" style={{ fontSize: '12px', color: '#cbd5e1', textDecoration: 'none' }}>Admin Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
