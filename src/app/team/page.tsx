'use client';

import React from 'react';
import Link from 'next/link';
import { KEY_OFFICERS, DIRECTORS_BOARD } from '@/data/foundationData';
import { UserRound, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TeamPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>{t('team.bannerBadge')}</div>
          <h1 className="page-banner-title">{t('team.bannerTitle')}</h1>
          <p className="page-banner-subtitle">
            {t('team.bannerSub')}
          </p>
          <div className="breadcrumb">
            <Link href="/">{t('nav.home')}</Link>
            <span>/</span>
            <span>{t('nav.team')}</span>
          </div>
        </div>
      </div>

      {/* CHIEF MENTOR & KEY OFFICERS */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-green" style={{ marginBottom: '12px' }}>KEY OFFICERS (प्रमुख पदाधिकारी)</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0F4C2A', letterSpacing: '-0.02em' }}>{t('team.keyOfficers')}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '64px' }}>
            {KEY_OFFICERS.map((officer, idx) => (
              <div key={idx} className="card" style={{ padding: '36px', borderRadius: '24px', textAlign: 'center', backgroundColor: '#ffffff', borderTop: '4px solid #800020' }}>
                <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F4C2A 0%, #800020 100%)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '2.2rem', fontWeight: 900, boxShadow: '0 8px 24px rgba(15, 76, 42, 0.2)' }}>
                  {officer.name.charAt(officer.name.indexOf(' ') + 1)}
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '4px', fontWeight: 800 }}>{officer.name}</h3>
                <span className="badge-gold" style={{ fontSize: '0.78rem', marginBottom: '18px', display: 'inline-block' }}>
                  {officer.title} • {officer.marathiTitle}
                </span>

                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.75', marginBottom: '18px', fontStyle: 'italic' }}>
                  &ldquo;{officer.message}&rdquo;
                </p>

                <div style={{ padding: '14px', backgroundColor: '#f0f7f3', borderRadius: '12px', fontSize: '0.86rem', color: '#0F4C2A', fontWeight: 600, border: '1px solid rgba(15, 76, 42, 0.15)', lineHeight: '1.5' }}>
                  {officer.marathiMessage}
                </div>
              </div>
            ))}
          </div>

          {/* BOARD OF DIRECTORS GRID */}
          <div style={{ marginTop: '40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div className="badge-gold" style={{ marginBottom: '12px' }}>BOARD OF DIRECTORS (संचालक मंडळ)</div>
              <h2 style={{ fontSize: '2.2rem', color: '#0F4C2A', letterSpacing: '-0.02em' }}>{t('team.boardMembers')}</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {DIRECTORS_BOARD.map((director, idx) => (
                <div key={idx} className="card" style={{ padding: '24px', borderRadius: '18px', display: 'flex', alignItems: 'center', gap: '14px', backgroundColor: '#f8fafc' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.02rem', color: '#0F4C2A', marginBottom: '2px', fontWeight: 800 }}>{director.name}</h4>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>{director.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
