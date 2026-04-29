import './Hero.css';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-grain" />
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tagline">
            <span className="tagline-line" />
            Specialists in 9ct gold
          </div>
          <h1 className="hero-title">
            Crafted in the<br />
            <em>Jewellery Quarter,</em><br />
            worn for generations.
          </h1>
          <p className="hero-lead">
            A family-run jewellers in Birmingham, dedicated to fine 9ct chains
            and bracelets. Every piece is hand-selected, thoughtfully made, and
            built to be passed down.
          </p>
          <div className="hero-actions">
            <a href="#collection" className="btn-primary">
              Explore the Collection <span className="arrow">→</span>
            </a>
            <a href="#visit" className="btn-secondary">Visit the Shop</a>
          </div>
          <div className="hero-meta">
            <div>
              <div className="meta-num">620+</div>
              <div className="meta-label">Followers on Instagram</div>
            </div>
            <div className="meta-divider" />
            <div>
              <div className="meta-num">9ct</div>
              <div className="meta-label">Hallmarked Gold</div>
            </div>
            <div className="meta-divider" />
            <div>
              <div className="meta-num">B18</div>
              <div className="meta-label">Jewellery Quarter</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&q=80"
              alt="9ct gold cuban chain"
            />
            <div className="hero-badge">
              <div className="badge-label">Featured</div>
              <div className="badge-name">Cuban Link, 9ct</div>
              <div className="badge-weight">48g · 20"</div>
            </div>
          </div>
          <div className="hero-deco">Birmingham · B18 · Est. Family</div>
        </div>
      </div>
    </header>
  );
}