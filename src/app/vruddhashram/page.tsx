'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, CheckCircle2, Phone, Mail, MapPin, ShieldCheck, 
  Sparkles, Award, ExternalLink 
} from 'lucide-react';
import { FOUNDATION_INFO, OFFICES } from '@/data/foundationData';
import { useLanguage } from '@/context/LanguageContext';

export default function VruddhashramPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>{t('vruddha.bannerBadge')}</div>
          <h1 className="page-banner-title">{t('vruddha.bannerTitle')}</h1>
          <p className="page-banner-subtitle">
            {t('vruddha.bannerSub')}
          </p>
          <div className="breadcrumb">
            <Link href="/">{t('nav.home')}</Link>
            <span>/</span>
            <span>{t('nav.vruddhashram')}</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <div className="badge-green" style={{ marginBottom: '16px' }}>PRIMARY FOUNDATION UNIT</div>
              <h2 style={{ fontSize: '2.5rem', color: '#0F4C2A', marginBottom: '20px', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
                {t('vruddha.h2')}
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
                {t('vruddha.p1')}
              </p>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '28px' }}>
                We provide round-the-clock free shelter, wholesome diet kitchens, emergency ambulance backup, medical checkups, and emotional companionship to senior citizens who have no family or financial support.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/donate" className="btn btn-maroon" style={{ padding: '14px 28px', borderRadius: '12px' }}>
                  <Heart size={18} fill="#ffffff" />
                  <span>{t('vruddha.sponsorBtn')}</span>
                </Link>
                <Link href="/contact" className="btn btn-outline-green" style={{ padding: '14px 28px', borderRadius: '12px' }}>
                  <Phone size={18} />
                  <span>{t('vruddha.inquireBtn')}</span>
                </Link>
              </div>
            </div>

            <div>
              <div className="card priority-card" style={{ padding: '38px', borderRadius: '24px', borderTop: '4px solid #800020' }}>
                <div className="priority-ribbon">SANGLI FACILITY</div>
                <h3 style={{ fontSize: '1.4rem', color: '#0F4C2A', marginBottom: '22px', borderBottom: '2px solid rgba(243, 168, 18, 0.4)', paddingBottom: '12px', fontWeight: 800 }}>
                  Facility Highlights &amp; Services
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.98rem', fontWeight: 500, lineHeight: '1.5' }}>{t('vruddha.f1')}</span>
                  </li>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.98rem', fontWeight: 500, lineHeight: '1.5' }}>{t('vruddha.f2')}</span>
                  </li>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.98rem', fontWeight: 500, lineHeight: '1.5' }}>{t('vruddha.f3')}</span>
                  </li>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.98rem', fontWeight: 500, lineHeight: '1.5' }}>{t('vruddha.f4')}</span>
                  </li>
                </ul>

                <div style={{ marginTop: '28px', padding: '18px', backgroundColor: '#f8fafc', borderRadius: '14px', border: '1px solid #e8eef0', fontSize: '0.88rem', color: '#475569', lineHeight: '1.65' }}>
                  <strong style={{ color: '#0F4C2A' }}>Address:</strong> Behind Sugar Factory, Shalini Nagar, Sangli, Maharashtra. <br />
                  <strong style={{ color: '#800020' }}>Direct Helpline:</strong> 0233 3560136 / 9922943777
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
