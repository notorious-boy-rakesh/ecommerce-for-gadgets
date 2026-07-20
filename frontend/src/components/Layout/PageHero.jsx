import { Link } from 'react-router-dom';

const PageHero = ({ title, eyebrow, breadcrumbs, description, style }) => {
  return (
    <section className="page-hero" style={style}>
      <div className="container">
        <nav aria-label="breadcrumb" className="tg-breadcrumb">
          <ol className="breadcrumb justify-content-center">
            {breadcrumbs.map((bc, idx) => (
              <li key={idx} className={`breadcrumb-item ${bc.active ? 'active' : ''}`} aria-current={bc.active ? 'page' : undefined}>
                {bc.active ? bc.label : <Link to={bc.link}>{bc.label}</Link>}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <div className="hero-eyebrow" style={style?.eyebrowStyle}>{eyebrow}</div>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
};

export default PageHero;
