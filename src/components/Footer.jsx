import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <div className="logo-main footer-logo-main">K. M. TAYLOR</div>
          <div className="logo-sub">JEWELLERS</div>
        </div>

        <p className="footer-text">
          Family-run jewellers in Birmingham's Jewellery Quarter.<br />
          Specialists in 9ct chains & bracelets.
        </p>

        <div className="footer-links">
          <a href="#collection" className="footer-link">Collection</a>
          <a href="#heritage" className="footer-link">Heritage</a>
          <a href="#bespoke" className="footer-link">Bespoke</a>
          <a
            href="https://www.instagram.com/kmtaylorjewellers/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} K. M. Taylor Jewellers</span>
          <span className="footer-credit">Site demo · Built with care</span>
        </div>
      </div>
    </footer>
  );
}