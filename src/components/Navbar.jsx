import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onEnquireClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="logo">
          <span className="logo-main">K. M. TAYLOR</span>
          <span className="logo-sub">JEWELLERS · EST. BIRMINGHAM</span>
        </div>

        <ul className="nav-links">
          <li><a href="#collection" className="nav-link">Collection</a></li>
          <li><a href="#heritage" className="nav-link">Heritage</a></li>
          <li><a href="#bespoke" className="nav-link">Bespoke</a></li>
          <li><a href="#visit" className="nav-link">Visit Us</a></li>
        </ul>

        <button className="nav-cta" onClick={onEnquireClick}>
          Make an Enquiry
        </button>

        <button
          className={`burger ${mobileMenuOpen ? 'burger-open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#collection" onClick={closeMenu} className="mobile-link">Collection</a>
          <a href="#heritage" onClick={closeMenu} className="mobile-link">Heritage</a>
          <a href="#bespoke" onClick={closeMenu} className="mobile-link">Bespoke</a>
          <a href="#visit" onClick={closeMenu} className="mobile-link">Visit Us</a>
          <button
            onClick={() => { closeMenu(); onEnquireClick(); }}
            className="mobile-link mobile-cta"
          >
            Make an Enquiry
          </button>
        </div>
      )}
    </nav>
  );
}