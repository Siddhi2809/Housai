'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, FileText, CheckCircle2, Download, Building } from 'lucide-react';
import { FOUNDATION_INFO } from '@/data/foundationData';
import { useLanguage } from '@/context/LanguageContext';

export default function LegalPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>{t('legal.bannerBadge')}</div>
          <h1 className="page-banner-title">{t('legal.bannerTitle')}</h1>
          <p className="page-banner-subtitle">
            {t('legal.bannerSub')}
          </p>
          <div className="breadcrumb">
            <Link href="/">{t('nav.home')}</Link>
            <span>/</span>
            <span>{t('nav.legal')}</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="card" style={{ padding: '44px', borderRadius: '24px', borderTop: '4px solid #0F4C2A' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#0F4C2A', marginBottom: '28px', fontWeight: 800, letterSpacing: '-0.02em' }}>
              {t('legal.h2')}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '18px', borderLeft: '5px solid #0F4C2A' }}>
                <strong style={{ color: '#0F4C2A', fontSize: '1.15rem', display: 'block', marginBottom: '8px', fontWeight: 800 }}>
                  {t('legal.c1Title')}
                </strong>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: '1.65' }}>
                  {t('legal.c1Desc')}
                </p>
              </div>

              <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '18px', borderLeft: '5px solid #f3a812' }}>
                <strong style={{ color: '#0F4C2A', fontSize: '1.15rem', display: 'block', marginBottom: '8px', fontWeight: 800 }}>
                  {t('legal.c2Title')}
                </strong>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: '1.65' }}>
                  {t('legal.c2Desc')}
                </p>
              </div>

              <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '18px', borderLeft: '5px solid #800020' }}>
                <strong style={{ color: '#800020', fontSize: '1.15rem', display: 'block', marginBottom: '8px', fontWeight: 800 }}>
                  {t('legal.c3Title')}
                </strong>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: '1.65' }}>
                  {t('legal.c3Desc')}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '36px', padding: '26px', backgroundColor: '#f0f7f3', borderRadius: '18px', border: '1.5px solid rgba(15, 76, 42, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '18px' }}>
              <div>
                <strong style={{ color: '#0F4C2A', fontSize: '1.05rem', display: 'block', fontWeight: 800 }}>{t('legal.c4Title')}</strong>
                <span style={{ fontSize: '0.88rem', color: '#475569' }}>{t('legal.c4Desc')}</span>
              </div>
              <Link href="/contact" className="btn btn-dark-green btn-sm" style={{ borderRadius: '10px' }}>
                {t('legal.c4Btn')}
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
