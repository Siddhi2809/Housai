'use client';

import React from 'react';
import Link from 'next/link';
import { FOUNDATION_INFO, DIRECTORS_BOARD, KEY_OFFICERS } from '@/data/foundationData';
import { ShieldCheck, Award, Heart, Users, CheckCircle2, Building, Target, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>{t('about.bannerBadge')}</div>
          <h1 className="page-banner-title">{t('about.bannerTitle')}</h1>
          <p className="page-banner-subtitle">
            {t('about.bannerSub')}
          </p>
          <div className="breadcrumb">
            <Link href="/">{t('nav.home')}</Link>
            <span>/</span>
            <span>{t('nav.about')}</span>
          </div>
        </div>
      </div>

      {/* FOUNDATION OVERVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
            <div>
              <div className="badge-green" style={{ marginBottom: '14px' }}>{t('about.badge')}</div>
              <h2 style={{ fontSize: '2.1rem', color: 'var(--brand-blue)', marginBottom: '18px' }}>
                {t('about.title')}
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
                {t('about.desc')}
              </p>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8', marginBottom: '24px' }}>
                {t('about.p2')}
              </p>

              <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #1b7a4b', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h4 style={{ color: 'var(--brand-blue)', fontSize: '1.1rem', fontWeight: 800 }}>Core Focus Areas:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
                  <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} style={{ color: '#1b7a4b', flexShrink: 0 }} />
                    <span>{t('about.m1')}</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} style={{ color: '#1b7a4b', flexShrink: 0 }} />
                    <span>{t('about.m2')}</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} style={{ color: '#1b7a4b', flexShrink: 0 }} />
                    <span>{t('about.m3')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-blue)', marginBottom: '20px', borderBottom: '2px solid #f3a812', paddingBottom: '10px' }}>
                  {t('about.cardTitle')}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <ShieldCheck size={22} style={{ color: '#1b7a4b', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>{t('about.regNo')}</strong>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Reg. No. MH/323/F-17200/15</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Award size={22} style={{ color: '#f3a812', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>{t('about.taxExempt')}</strong>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{t('about.taxDesc')}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Building size={22} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>{t('about.headquarters')}</strong>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{t('about.headquartersVal')}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Phone size={22} style={{ color: '#1b7a4b', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>Official Contacts &amp; Helpline</strong>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>9975601777 / 9922942777 / 9922943777</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '28px' }}>
                  <Link href="/donate" className="btn btn-gold" style={{ width: '100%', borderRadius: '12px' }}>
                    <Heart size={16} />
                    <span>{t('about.supportBtn')}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY OFFICERS & FOUNDER SPEECH */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge-green" style={{ marginBottom: '10px' }}>FOUNDATION LEADERSHIP</div>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--brand-blue)' }}>{t('team.keyOfficers')}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {KEY_OFFICERS.map((officer, idx) => (
              <div key={idx} className="card" style={{ padding: '32px', borderRadius: '18px', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #16366f, #1b7a4b)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800 }}>
                    {officer.name.charAt(officer.name.indexOf(' ') + 1)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--brand-blue)', marginBottom: '2px' }}>{officer.name}</h3>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1b7a4b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {officer.title} ({officer.marathiTitle})
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '16px' }}>
                  &ldquo;{officer.message}&rdquo;
                </p>

                <div style={{ padding: '12px 16px', backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '0.85rem', color: '#334155' }}>
                  <strong>मराठी मनोगत:</strong> {officer.marathiMessage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD OF DIRECTORS LIST */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-gold" style={{ marginBottom: '10px' }}>GOVERNING COUNCIL</div>
            <h2 style={{ fontSize: '2rem', color: 'var(--brand-blue)' }}>{t('team.boardMembers')}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {DIRECTORS_BOARD.map((director, idx) => (
              <div key={idx} className="card" style={{ padding: '20px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <CheckCircle2 size={20} style={{ color: '#1b7a4b', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.96rem', color: 'var(--brand-blue)' }}>{director.name}</strong>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{director.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
