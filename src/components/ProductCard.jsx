import './ProductCard.css';

export default function ProductCard({ product, animationDelay = 0 }) {
  const { id, name, category, weight, length, image } = product;

  return (
    <article
      className="card"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="card-image-wrap">
        <img src={image} alt={name} loading="lazy" />
        <div className="card-overlay">
          <button className="card-btn">View Details</button>
        </div>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span>{category}</span>
          <span className="card-sku">NO. {String(id).padStart(3, '0')}</span>
        </div>
        <h3 className="card-title">{name}</h3>
        <div className="card-specs">
          <span>{weight}</span>
          <span className="card-dot">·</span>
          <span>{length}</span>
          <span className="card-dot">·</span>
          <span>9ct</span>
        </div>
        <div className="card-enq">Enquire for price →</div>
      </div>
    </article>
  );
}