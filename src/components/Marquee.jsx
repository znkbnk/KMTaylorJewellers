import './Marquee.css';

const ITEMS = [
  'Belcher Chains',
  'Cuban Links',
  'Rope Chains',
  'Tennis Bracelets',
  'Figaro',
  'Signet Rings',
  'Bespoke Commissions',
];

function MarqueeRow() {
  return (
    <div className="marquee-row">
      {ITEMS.map((item, i) => (
        <span key={i} className="marquee-item">
          <span>· {item}</span>
          <span className="diamond">◆</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}