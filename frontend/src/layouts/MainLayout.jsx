import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import AnnouncementStrip from '../components/Common/AnnouncementStrip';

const MainLayout = () => {
  const location = useLocation();
  const showAnnouncement = location.pathname === '/home' || location.pathname === '/products';

  return (
    <>
      {showAnnouncement && <AnnouncementStrip />}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
