'use client';

import React from 'react';
import Link from 'next/link';
import { WORK_AREAS } from '@/data/foundationData';
import { Heart, ShieldCheck, Award, Activity, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function WorkPage() {
  const { lang, t } = useLanguage();

  const getLucideIcon = (id: string) => {
    switch (id) {
      case 'vruddhashram':
        return <Heart size={26} style={{ color: '#800020' }} />;
      case 'yashanmukti':
        return <ShieldCheck size={26} style={{ color: '#0F4C2A' }} />;
      case 'sports':
        return <Award size={26} style={{ color: '#b45309' }} />;
      case 'health':
        return <Activity size={26} style={{ color: '#0F4C2A' }} />;
      case 'employment':
        return <Briefcase size={26} style={{ color: '#800020' }} />;
      default:
        return <Heart size={26} style={{ color: '#0F4C2A' }} />;
    }
  };

  const getIconBg = (id: string) => {
    switch (id) {
      case 'vruddhashram': return '#fcf0f2';
      case 'yashanmukti': return '#f0f7f3';
      case 'sports': return '#fff8eb';
      case 'health': return '#f0f7f3';
      case 'employment': return '#fcf0f2';
      default: return '#f0f7f3';
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

      <section className="section-padding" style={{ backgroundColor: '#fcfdfc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
            <div className="badge-green" style={{ marginBottom: '12px' }}>5 CORE SOCIAL INITIATIVES</div>
            <h2 style={{ fontSize: '2.25rem', color: '#0F4C2A', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Transformative Community Development
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: '1.7' }}>
              Guided by the vision of social harmony and compassion, our programs operate across Maharashtra with measurable, grassroots outcomes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {WORK_AREAS.map((work) => {
              const isVruddhashram = work.id === 'vruddhashram';
              return (
                <div 
                  key={work.id} 
                  className="card" 
                  style={{ 
                    padding: '34px 28px', 
                    borderRadius: '18px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    backgroundColor: '#ffffff', 
                    borderTop: isVruddhashram ? '4px solid #800020' : '4px solid #0F4C2A',
                    borderLeft: '1px solid #e2e8f0',
                    borderRight: '1px solid #e2e8f0',
                    borderBottom: '1px solid #e2e8f0',
                    position: 'relative'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: getIconBg(work.id), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {getLucideIcon(work.id)}
                      </div>
                      <div className={isVruddhashram ? "badge-maroon" : "badge-gold"} style={{ fontSize: '0.74rem' }}>
                        {lang === 'hi' ? work.hiShare : work.share}
                      </div>
                    </div>
                    
                    <h3 style={{ fontSize: '1.32rem', color: '#0F4C2A', marginBottom: '12px', fontWeight: 800 }}>
                      {lang === 'hi' ? work.hiTitle : work.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '26px' }}>
                      {lang === 'hi' ? work.hiDescription : work.description}
                    </p>
                  </div>

                  <Link
                    href={isVruddhashram ? '/vruddhashram' : '/donate'}
                    className={isVruddhashram ? "btn btn-maroon" : "btn btn-dark-green"}
                    style={{ width: '100%', borderRadius: '12px', padding: '13px' }}
                  >
                    <Heart size={16} fill="#ffffff" />
                    <span>{isVruddhashram ? (lang === 'hi' ? 'हौसाई वृद्धाश्रम सविस्तर पहा' : 'Explore Housai Vruddhashram') : t('work.supportBtn')}</span>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Impact Commitment Box */}
          <div style={{
            background: 'linear-gradient(135deg, #0A381F 0%, #0F4C2A 70%, #630019 100%)',
            borderRadius: '20px',
            padding: '40px 36px',
            color: '#ffffff',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            border: '1px solid rgba(243, 168, 18, 0.35)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="badge-gold" style={{ marginBottom: '12px', backgroundColor: 'rgba(243, 168, 18, 0.2)', color: '#f3a812' }}>
                DIRECT COMMUNITY PARTICIPATION
              </span>
              <h3 style={{ fontSize: '1.65rem', color: '#ffffff', marginBottom: '10px' }}>
                Want to partner or volunteer with our field units?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.96rem', lineHeight: '1.6' }}>
                Whether you want to sponsor meals at Housai Vruddhashram or volunteer for youth sports, your support creates tangible change.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold" style={{ padding: '14px 28px' }}>
                <span>Connect With Us</span>
                <ArrowRight size={17} />
              </Link>
              <Link href="/donate" className="btn btn-outline-white" style={{ padding: '14px 26px' }}>
                <span>Support Financially</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
