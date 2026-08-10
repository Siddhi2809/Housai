'use client';

import React from 'react';
import Link from 'next/link';
import { GALLERY_ITEMS } from '@/data/foundationData';
import { Sparkles, Play } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>MEDIA & MEMORIES</div>
          <h1 className="page-banner-title">Photo & Video Gallery</h1>
          <p className="page-banner-subtitle">
            Visual highlights of our ground activities at Housai Vruddhashram, medical camps, and sports events.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / 
            <span>Gallery</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="card" style={{ padding: '20px' }}>
                <div style={{ height: '180px', backgroundColor: 'var(--brand-light-blue)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', color: 'var(--brand-blue)' }}>
                  <Sparkles size={36} />
                </div>
                <div className="badge-gold" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>{item.category}</div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--brand-blue)', marginBottom: '6px' }}>{item.caption}</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
