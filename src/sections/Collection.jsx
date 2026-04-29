import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Collection.css';

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="collection" className="section collection">
      <div className="section-header">
        <span className="eyebrow">—— Our Collection</span>
        <h2 className="section-title">
          Pieces with <em>character</em> & weight.
        </h2>
        <p className="section-sub">
          From everyday classics to standout statement chains, every item is
          carefully chosen and finished to a standard we'd be proud to wear
          ourselves.
        </p>
      </div>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            animationDelay={idx * 80}
          />
        ))}
      </div>
    </section>
  );
}