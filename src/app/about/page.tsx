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
              <div className="badge-green" style={{ marginBottom: '16px' }}>{t('about.badge')}</div>
              <h2 style={{ fontSize: '2.4rem', color: '#0F4C2A', marginBottom: '18px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                {t('about.title')}
              </h2>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '16px' }}>
                {t('about.desc')}
              </p>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '28px' }}>
                {t('about.p2')}
              </p>

              <div style={{ padding: '26px', backgroundColor: '#f0f7f3', borderRadius: '18px', borderLeft: '5px solid #0F4C2A', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <h4 style={{ color: '#0F4C2A', fontSize: '1.15rem', fontWeight: 800 }}>Core Focus Areas:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.94rem', color: '#334155' }}>
                  <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={18} style={{ color: '#0F4C2A', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>{t('about.m1')}</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={18} style={{ color: '#0F4C2A', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>{t('about.m2')}</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={18} style={{ color: '#0F4C2A', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>{t('about.m3')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '36px', backgroundColor: '#ffffff', borderRadius: '24px', borderTop: '4px solid #800020' }}>
                <h3 style={{ fontSize: '1.35rem', color: '#0F4C2A', marginBottom: '22px', borderBottom: '2px solid rgba(243, 168, 18, 0.4)', paddingBottom: '12px', fontWeight: 800 }}>
                  {t('about.cardTitle')}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#0b1911', fontSize: '0.95rem' }}>{t('about.regNo')}</strong>
                      <span style={{ color: '#64748b', fontSize: '0.86rem' }}>Reg. No. MH/323/F-17200/15</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#fff8eb', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Award size={20} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#0b1911', fontSize: '0.95rem' }}>{t('about.taxExempt')}</strong>
                      <span style={{ color: '#64748b', fontSize: '0.86rem' }}>{t('about.taxDesc')}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Building size={20} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#0b1911', fontSize: '0.95rem' }}>{t('about.headquarters')}</strong>
                      <span style={{ color: '#64748b', fontSize: '0.86rem' }}>{t('about.headquartersVal')}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#fcf0f2', color: '#800020', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#0b1911', fontSize: '0.95rem' }}>Official Contacts &amp; Helpline</strong>
                      <span style={{ color: '#64748b', fontSize: '0.86rem' }}>9975601777 / 9922942777 / 9922943777</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '30px' }}>
                  <Link href="/donate" className="btn btn-maroon" style={{ width: '100%', borderRadius: '12px' }}>
                    <Heart size={16} fill="#ffffff" />
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
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-green" style={{ marginBottom: '12px' }}>FOUNDATION LEADERSHIP</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0F4C2A', letterSpacing: '-0.02em' }}>{t('team.keyOfficers')}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {KEY_OFFICERS.map((officer, idx) => (
              <div key={idx} className="card" style={{ padding: '36px', borderRadius: '22px', backgroundColor: '#ffffff', borderTop: '4px solid #0F4C2A' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '22px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F4C2A 0%, #800020 100%)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900, boxShadow: '0 4px 14px rgba(15, 76, 42, 0.25)' }}>
                    {officer.name.charAt(officer.name.indexOf(' ') + 1)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#0F4C2A', marginBottom: '3px', fontWeight: 800 }}>{officer.name}</h3>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#800020', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      {officer.title} ({officer.marathiTitle})
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '18px' }}>
                  &ldquo;{officer.message}&rdquo;
                </p>

                <div style={{ padding: '14px 18px', backgroundColor: '#f0f7f3', borderRadius: '12px', fontSize: '0.86rem', color: '#0F4C2A', border: '1px solid rgba(15, 76, 42, 0.15)', lineHeight: '1.55' }}>
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
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge-gold" style={{ marginBottom: '12px' }}>GOVERNING COUNCIL</div>
            <h2 style={{ fontSize: '2.2rem', color: '#0F4C2A', letterSpacing: '-0.02em' }}>{t('team.boardMembers')}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {DIRECTORS_BOARD.map((director, idx) => (
              <div key={idx} className="card" style={{ padding: '22px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.98rem', color: '#0F4C2A' }}>{director.name}</strong>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>{director.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
