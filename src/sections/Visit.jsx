import './Visit.css';

export default function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="visit-inner">
        <div className="visit-left">
          <span className="eyebrow">—— Visit Us</span>
          <h2 className="section-title">Come and see for yourself.</h2>
          <p className="visit-text">
            Photographs are wonderful, but gold has a feel and a weight to it
            that you really only know in hand. We'd love to show you in person.
          </p>

          <div className="visit-info">
            <div className="visit-row">
              <div className="visit-label">Address</div>
              <div className="visit-value">
                15 Warstone Lane<br />
                Birmingham, B18 6JB
              </div>
            </div>
            <div className="visit-row">
              <div className="visit-label">Hours</div>
              <div className="visit-value">
                Mon — Sat · 10:00 — 17:30<br />
                Sunday · Closed
              </div>
            </div>
            <div className="visit-row">
              <div className="visit-label">Find us</div>
              <div className="visit-value">
                <a
                  href="https://www.instagram.com/kmtaylorjewellers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-link"
                >
                  @kmtaylorjewellers ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="visit-right">
          <iframe
            title="K M Taylor Jewellers location"
            src="https://maps.google.com/maps?q=15+Warstone+Lane+Birmingham+B18+6JB&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="map"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}