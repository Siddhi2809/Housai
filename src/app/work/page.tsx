'use client';

import React from 'react';
import Link from 'next/link';
import { WORK_AREAS } from '@/data/foundationData';
import { Heart, ShieldCheck, Award, Activity, Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function WorkPage() {
  const { t } = useLanguage();

  const getLucideIcon = (id: string) => {
    switch (id) {
      case 'vruddhashram':
        return <Heart size={26} style={{ color: '#1b7a4b' }} />;
      case 'yashanmukti':
        return <ShieldCheck size={26} style={{ color: '#16366f' }} />;
      case 'sports':
        return <Award size={26} style={{ color: '#4f46e5' }} />;
      case 'health':
        return <Activity size={26} style={{ color: '#b45309' }} />;
      case 'employment':
        return <Briefcase size={26} style={{ color: '#e11d48' }} />;
      default:
        return <Heart size={26} style={{ color: '#1b7a4b' }} />;
    }
  };

  const getIconBg = (id: string) => {
    switch (id) {
      case 'vruddhashram': return '#eef7f2';
      case 'yashanmukti': return '#dbeafe';
      case 'sports': return '#e0e7ff';
      case 'health': return '#fff3d6';
      case 'employment': return '#ffe4e6';
      default: return '#eef7f2';
    }
  };

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>{t('work.bannerBadge')}</div>
          <h1 className="page-banner-title">{t('work.bannerTitle')}</h1>
          <p className="page-banner-subtitle">
            {t('work.bannerSub')}
          </p>
          <div className="breadcrumb">
            <Link href="/">{t('nav.home')}</Link>
            <span>/</span>
            <span>{t('nav.work')}</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge-green" style={{ marginBottom: '10px' }}>5 MAIN SOCIAL SECTORS</div>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--brand-blue)' }}>Key Development Areas</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {WORK_AREAS.map((work) => (
              <div key={work.id} className="card" style={{ padding: '32px', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#ffffff' }}>
                <div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: getIconBg(work.id), display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    {getLucideIcon(work.id)}
                  </div>
                  <div className="badge-gold" style={{ fontSize: '0.75rem', marginBottom: '12px' }}>{work.share}</div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-blue)', marginBottom: '12px' }}>{work.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '24px' }}>{work.description}</p>
                </div>
                <Link href="/donate" className="btn btn-gold btn-sm" style={{ width: '100%', borderRadius: '10px', padding: '12px' }}>
                  <Heart size={15} fill="#000000" />
                  <span>{t('work.supportBtn')}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
