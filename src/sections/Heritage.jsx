import './Heritage.css';

const VALUES = [
  {
    num: '01',
    title: 'Hallmarked',
    text: 'Every piece carries the assurance of certified 9ct gold.',
  },
  {
    num: '02',
    title: 'Family Run',
    text: 'You speak with the people who actually know the stock.',
  },
  {
    num: '03',
    title: 'Local',
    text: 'Rooted in the Quarter, serving Birmingham families.',
  },
];

export default function Heritage() {
  return (
    <section id="heritage" className="heritage">
      <div className="heritage-grain" />
      <div className="heritage-inner">
        <div className="heritage-left">
          <span className="eyebrow">—— Our Heritage</span>
          <h2 className="heritage-title">
            A small shop. A long <em>tradition</em>.
          </h2>
          <p className="heritage-text">
            Birmingham's Jewellery Quarter has been a centre of fine
            craftsmanship for over two centuries. We're proud to be a small,
            family-run part of that story — focused on doing one thing
            exceptionally well: beautiful 9ct gold chains and bracelets.
          </p>
          <p className="heritage-text">
            When you walk through our door on Warstone Lane, you're not just
            buying jewellery. You're meeting the people who'll be there when
            you want to clean it, resize it, or pass it down.
          </p>

          <div className="values">
            {VALUES.map((v) => (
              <div key={v.num}>
                <div className="value-num">{v.num}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-text">{v.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="heritage-right">
          <img
            src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=700&q=80"
            alt="Gold chains in the workshop"
            className="heritage-img"
          />
        </div>
      </div>
    </section>
  );
}