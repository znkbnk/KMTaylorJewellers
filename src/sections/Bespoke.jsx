import './Bespoke.css';

export default function Bespoke({ onEnquireClick }) {
  return (
    <section id="bespoke" className="bespoke">
      <div className="bespoke-inner">
        <span className="eyebrow">—— Bespoke</span>
        <h2 className="section-title">
          Have something <em>specific</em> in mind?
        </h2>
        <p className="bespoke-text">
          If you've got a length, weight, or style in mind we don't have in the
          case — we can help source or commission it. Pop in, send a message, or
          drop us a line.
        </p>
        <button className="bespoke-btn" onClick={onEnquireClick}>
          Start a Conversation <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}