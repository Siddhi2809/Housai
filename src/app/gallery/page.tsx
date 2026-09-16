'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GALLERY_ITEMS } from '@/data/foundationData';
import { Sparkles, Heart, Image as ImageIcon, Calendar, Filter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Vruddhashram', 'Healthcare', 'Yashanmukti', 'Sports', 'Housing'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Vruddhashram': return { bg: '#fcf0f2', border: '#800020', text: '#800020' };
      case 'Healthcare': return { bg: '#f0f7f3', border: '#0F4C2A', text: '#0F4C2A' };
      case 'Yashanmukti': return { bg: '#f0f7f3', border: '#0F4C2A', text: '#0F4C2A' };
      case 'Sports': return { bg: '#fff8eb', border: '#f3a812', text: '#b45309' };
      case 'Housing': return { bg: '#f0f7f3', border: '#0F4C2A', text: '#0F4C2A' };
      default: return { bg: '#f0f7f3', border: '#0F4C2A', text: '#0F4C2A' };
    }
  };

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

      <section className="section-padding" style={{ backgroundColor: '#fcfdfc' }}>
        <div className="container">

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive ? '2px solid #0F4C2A' : '1px solid #cbd5e1',
                    backgroundColor: isActive ? '#0F4C2A' : '#ffffff',
                    color: isActive ? '#ffffff' : '#334155',
                    boxShadow: isActive ? '0 4px 14px rgba(15, 76, 42, 0.25)' : 'none'
                  }}
                >
                  {cat === 'All' ? 'All Activities' : cat}
                </button>
              );
            })}
          </div>

          {/* Grid of gallery cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {filteredItems.map((item) => {
              const styleTheme = getCategoryColor(item.category);
              return (
                <div 
                  key={item.id} 
                  className="card" 
                  style={{ 
                    padding: '24px', 
                    borderRadius: '18px',
                    borderTop: `4px solid ${styleTheme.border}`,
                    borderLeft: '1px solid #e2e8f0',
                    borderRight: '1px solid #e2e8f0',
                    borderBottom: '1px solid #e2e8f0',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Visual media preview frame */}
                    <div style={{ 
                      height: '210px', 
                      backgroundColor: styleTheme.bg, 
                      borderRadius: '14px', 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginBottom: '18px', 
                      color: styleTheme.text,
                      border: `1px solid ${styleTheme.border}25`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <ImageIcon size={44} style={{ opacity: 0.85, marginBottom: '8px' }} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.8 }}>Photo Documentation</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span 
                        style={{ 
                          fontSize: '0.74rem', 
                          fontWeight: 700, 
                          padding: '4px 12px', 
                          borderRadius: '9999px', 
                          backgroundColor: styleTheme.bg, 
                          color: styleTheme.text,
                          border: `1px solid ${styleTheme.border}40`,
                          textTransform: 'uppercase',
                          letterSpacing: '0.4px'
                        }}
                      >
                        {item.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#64748b' }}>
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', color: '#0F4C2A', marginBottom: '10px', fontWeight: 800, lineHeight: '1.4' }}>
                      {item.caption}
                    </h4>
                  </div>

                  <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Housai Archive</span>
                    <Link href="/vruddhashram" style={{ fontSize: '0.84rem', fontWeight: 700, color: '#800020' }}>
                      Learn Details &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
