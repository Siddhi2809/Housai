'use client';

import React from 'react';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS, IMPACT_STATS } from '@/data/foundationData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Home, Heart, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PortfolioPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>{t('port.bannerBadge')}</div>
          <h1 className="page-banner-title">{t('port.bannerTitle')}</h1>
          <p className="page-banner-subtitle">
            {t('port.bannerSub')}
          </p>
          <div className="breadcrumb">
            <Link href="/">{t('nav.home')}</Link>
            <span>/</span>
            <span>{t('nav.portfolio')}</span>
          </div>
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-green" style={{ marginBottom: '12px' }}>REAL IMPACT (कामगिरी व उपक्रम)</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0F4C2A', letterSpacing: '-0.02em' }}>{t('port.h2')}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {PORTFOLIO_PROJECTS.map((proj) => (
              <div key={proj.id} className="card" style={{ padding: '34px', borderRadius: '22px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid #0F4C2A' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <span className="badge-green" style={{ fontSize: '0.74rem' }}>
                      {lang === 'hi' ? proj.hiCategory : proj.category}
                    </span>
                    <span className="badge-gold" style={{ fontSize: '0.74rem' }}>
                      {lang === 'hi' ? proj.hiStatus : proj.status}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '12px', lineHeight: '1.35', fontWeight: 800 }}>
                    {lang === 'hi' ? proj.hiTitle : proj.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '22px' }}>
                    {lang === 'hi' ? proj.hiSummary : proj.summary}
                  </p>
                </div>

                <div style={{ paddingTop: '18px', borderTop: '1px solid #e8eef0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={16} style={{ color: '#800020' }} /> {lang === 'hi' ? proj.hiLocation : proj.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0F4C2A', fontWeight: 700 }}>
                    <CheckCircle2 size={16} /> {lang === 'hi' ? proj.hiBeneficiaries : proj.beneficiaries}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* HOUSING INITIATIVE HIGHLIGHT */}
          <div className="card" style={{ marginTop: '54px', padding: '40px', borderRadius: '24px', backgroundColor: '#ffffff', borderLeft: '6px solid #0F4C2A', borderTop: '1px solid #e8eef0', boxShadow: '0 16px 36px rgba(15, 76, 42, 0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '14px' }}>{t('port.hCardBadge')}</span>
                <h3 style={{ fontSize: '1.65rem', color: '#0F4C2A', marginBottom: '12px', fontWeight: 800, letterSpacing: '-0.02em' }}>
                  {t('port.hCardTitle')}
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.75' }}>
                  {t('port.hCardDesc')}
                </p>
              </div>
              <div style={{ padding: '28px', backgroundColor: '#f0f7f3', borderRadius: '20px', textAlign: 'center', border: '1.5px solid rgba(15, 76, 42, 0.2)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0F4C2A', fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>458</div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#800020', marginTop: '6px', letterSpacing: '0.5px' }}>{t('port.hCardNote')}</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
