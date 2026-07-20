import { Link } from 'react-router-dom';

const CategoryCard = ({ icon, name, count, link = "/products" }) => {
  return (
    <Link to={link} className="category-card" style={{ textDecoration: 'none' }}>
      <span className="category-icon">{icon}</span>
      <div className="category-card-name">{name}</div>
      <div className="category-card-count">{count}</div>
    </Link>
  );
};

export default CategoryCard;
