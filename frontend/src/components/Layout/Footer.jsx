import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="tg-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <span className="footer-brand">TECKKIE <span>GADGETS</span></span>
            <p className="footer-tagline">Your premium destination for the latest and greatest in consumer electronics and smart technology. Trusted by 25,000+ customers across India.</p>
          </div>
          <div className="col-6 col-lg-2">
            <div className="footer-heading">Navigation</div>
            <ul className="footer-links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/enquiry">Enquiry</Link></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <div className="footer-heading">Support</div>
            <ul className="footer-links">
              <li><Link to="/cart">My Cart</Link></li>
              <li><Link to="/complaint">Complaints</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/copyright">Copyright</Link></li>
              <li><Link to="/">Logout</Link></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="footer-heading">Get in Touch</div>
            <div className="footer-contact-item"><span className="icon">📞</span><span>8248403178</span></div>
            <div className="footer-contact-item"><span className="icon">📧</span><span>support@teckkiegadgets.com</span></div>
            <div className="footer-contact-item"><span className="icon">📍</span><span>214/A Cross Street, Theni Main Road, Madurai 625001, Tamil Nadu</span></div>
            <div className="footer-contact-item"><span className="icon">🕐</span><span>Mon–Fri: 9AM–6PM &nbsp;|&nbsp; Sat: 10AM–4PM</span></div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Teckkie Gadgets. All Rights Reserved.</p>
          <p><Link to="/privacy-policy">Privacy Policy</Link> &nbsp;|&nbsp; <Link to="/copyright">Copyright</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
