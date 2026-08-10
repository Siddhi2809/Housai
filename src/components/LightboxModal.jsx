import React from 'react';
import { X, MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ height: '360px', overflow: 'hidden' }}>
          <img 
            src={item.image} 
            alt={item.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ padding: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="badge-gold">{item.category}</span>
            {item.date && (
              <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '600' }}>
                {item.date}
              </span>
            )}
          </div>

          <h3 style={{ fontSize: '1.6rem', color: 'var(--bg-deep-green)', marginBottom: '12px' }}>
            {item.title}
          </h3>

          <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
            {item.desc || "Verified field photograph showcasing the active community impact of Ramdas Athawale Youth Foundation."}
          </p>

          {item.location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--bg-dark-teal)', fontWeight: '700' }}>
              <MapPin size={16} />
              <span>{item.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
