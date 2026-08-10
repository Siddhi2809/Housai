'use client';

import React from 'react';
import Link from 'next/link';
import { GALLERY_ITEMS } from '@/data/foundationData';
import { Sparkles, Play, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>{t('gall.bannerBadge')}</div>
          <h1 className="page-banner-title">{t('gall.bannerTitle')}</h1>
          <p className="page-banner-subtitle">
            {t('gall.bannerSub')}
          </p>
          <div className="breadcrumb">
            <Link href="/">{t('nav.home')}</Link>
            <span>/</span>
            <span>{t('nav.gallery')}</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="card" style={{ padding: '24px', borderRadius: '16px' }}>
                <div style={{ height: '180px', backgroundColor: '#eef7f2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', color: '#1b7a4b', border: '1px solid #d1fae5' }}>
                  <ImageIcon size={38} />
                </div>
                <span className="badge-gold" style={{ fontSize: '0.72rem', marginBottom: '8px', display: 'inline-block' }}>{item.category}</span>
                <h4 style={{ fontSize: '1.02rem', color: '#16366f', marginBottom: '6px', fontWeight: 700, lineHeight: '1.4' }}>{item.caption}</h4>
                <p style={{ fontSize: '0.84rem', color: '#64748b' }}>{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
