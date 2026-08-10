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
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="card" style={{ padding: '40px', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--brand-blue)', marginBottom: '24px' }}>
              {t('legal.h2')}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '22px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #1b7a4b' }}>
                <strong style={{ color: 'var(--brand-blue)', fontSize: '1.1rem', display: 'block', marginBottom: '6px' }}>
                  {t('legal.c1Title')}
                </strong>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  {t('legal.c1Desc')}
                </p>
              </div>

              <div style={{ padding: '22px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #f3a812' }}>
                <strong style={{ color: 'var(--brand-blue)', fontSize: '1.1rem', display: 'block', marginBottom: '6px' }}>
                  {t('legal.c2Title')}
                </strong>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  {t('legal.c2Desc')}
                </p>
              </div>

              <div style={{ padding: '22px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #16366f' }}>
                <strong style={{ color: 'var(--brand-blue)', fontSize: '1.1rem', display: 'block', marginBottom: '6px' }}>
                  {t('legal.c3Title')}
                </strong>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  {t('legal.c3Desc')}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#eef7f2', borderRadius: '16px', border: '1px solid #1b7a4b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <strong style={{ color: '#16366f', fontSize: '1rem', display: 'block' }}>{t('legal.c4Title')}</strong>
                <span style={{ fontSize: '0.86rem', color: '#475569' }}>{t('legal.c4Desc')}</span>
              </div>
              <Link href="/contact" className="btn btn-green btn-sm" style={{ borderRadius: '10px' }}>
                {t('legal.c4Btn')}
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
