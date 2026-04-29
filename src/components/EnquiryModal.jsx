import { useEffect } from 'react';
import './EnquiryModal.css';

export default function EnquiryModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      'Demo: enquiry sent.\n\nIn the live site, this would email the shop directly.'
    );
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <span className="eyebrow">—— Get in touch</span>
        <h3 className="modal-title">Make an enquiry</h3>
        <p className="modal-text">
          Tell us what you're after and we'll come back to you with options,
          pricing, and availability.
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className="form-input"
            required
          />
          <input
            type="tel"
            placeholder="Phone (optional)"
            className="form-input"
          />
          <textarea
            placeholder='What are you looking for? (e.g. 9ct cuban chain, around 50g, 22 inch)'
            rows={4}
            className="form-input form-textarea"
            required
          />
          <button type="submit" className="form-btn">
            Send Enquiry <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}