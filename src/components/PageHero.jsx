import { Link } from 'react-router';
import { business } from '../data/business';
import './PageHero.scss';

export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  number,
}) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="page-hero__arch" aria-hidden="true" />

      <div className="page-hero__inner">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{eyebrow}</span>
        </nav>

        <div className="page-hero__content">
          <p className="page-hero__eyebrow">{eyebrow}</p>

          <h1 id="page-hero-title">
            <span>{title}</span>
            {accent && <em>{accent}</em>}
          </h1>

          {description && (
            <p className="page-hero__description">{description}</p>
          )}
        </div>

        {number && (
          <span className="page-hero__number" aria-hidden="true">
            {number}
          </span>
        )}
      </div>

      <div className="page-hero__bottom" aria-hidden="true">
        <span>{business.name.toUpperCase()}</span>
        <span>JAIPUR · INDIA</span>
      </div>
    </section>
  );
}