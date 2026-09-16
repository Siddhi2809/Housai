'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, Phone, Mail, MapPin, ExternalLink, ShieldCheck, 
  Award, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { FOUNDATION_INFO, OFFICES } from '../data/foundationData';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: '#062414', color: '#ffffff', paddingTop: '72px', paddingBottom: '32px', borderTop: '4px solid #800020' }}>
      <div className="container">
        
        {/* Main 4-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '44px', marginBottom: '60px' }}>
          
          {/* Column 1: Organization Intro */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <img
                src="/assets/logo.png"
                alt="Foundation Logo"
                style={{ height: '56px', width: '56px', borderRadius: '50%', backgroundColor: '#ffffff', padding: '3px', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
              />
              <div>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', lineHeight: '1.25', fontWeight: 800 }}>
                  KHASDAR RAMDASJI ATHAWALE
                </h3>
                <span style={{ fontSize: '0.74rem', color: '#f3a812', letterSpacing: '1px', fontWeight: 700 }}>
                  YOUTH FOUNDATION
                </span>
              </div>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '22px' }}>
              {t('foot.desc')}
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="badge-gold" style={{ fontSize: '0.74rem', backgroundColor: 'rgba(243, 168, 18, 0.15)', color: '#f3a812' }}>
                Reg: MH/323/F/17200/15
              </span>
              <span className="badge-green" style={{ fontSize: '0.74rem', backgroundColor: 'rgba(15, 76, 42, 0.5)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
                12A &amp; 80G Certified
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#f3a812', marginBottom: '20px', borderBottom: '2px solid #800020', paddingBottom: '8px', display: 'inline-block', fontWeight: 800 }}>
              {t('foot.quickLinks')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <li>
                <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/vruddhashram" style={{ color: '#f3a812', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.vruddhashram')}
                </Link>
              </li>
              <li>
                <Link href="/work" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.work')}
                </Link>
              </li>
              <li>
                <Link href="/team" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Priority & Corporate */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#f3a812', marginBottom: '20px', borderBottom: '2px solid #800020', paddingBottom: '8px', display: 'inline-block', fontWeight: 800 }}>
              {t('foot.supportTitle')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', marginBottom: '24px' }}>
              <li>
                <Link href="/donate" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.donate')}
                </Link>
              </li>
              <li>
                <Link href="/csr" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> CSR Partnerships
                </Link>
              </li>
              <li>
                <Link href="/legal" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.legal')}
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChevronRight size={14} style={{ color: '#f3a812' }} /> {t('nav.contact')}
                </Link>
              </li>
            </ul>

            <div style={{ padding: '18px', backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: '14px', border: '1px solid rgba(243, 168, 18, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#f3a812', fontWeight: 700, fontSize: '0.9rem' }}>
                <ShieldCheck size={17} /> {t('about.taxExempt')}
              </div>
              <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.55' }}>
                {t('about.taxDesc')}
              </p>
            </div>
          </div>

          {/* Column 4: Key Offices & Helpline */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#f3a812', marginBottom: '20px', borderBottom: '2px solid #800020', paddingBottom: '8px', display: 'inline-block', fontWeight: 800 }}>
              {t('foot.headOffice')}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '10px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <MapPin size={18} style={{ color: '#f3a812', flexShrink: 0, marginTop: '2px' }} />
                <span>Tasgaon, Sangli &amp; New Delhi</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', alignItems: 'center' }}>
                <Phone size={16} style={{ color: '#f3a812', flexShrink: 0 }} />
                <span>+91 {FOUNDATION_INFO.phoneMobile} | 0233 3560136</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', color: 'rgba(255, 255, 255, 0.85)', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#f3a812', flexShrink: 0 }} />
                <span style={{ fontSize: '0.84rem', wordBreak: 'break-all' }}>{FOUNDATION_INFO.emailPrimary}</span>
              </div>

              <div style={{ marginTop: '12px' }}>
                <Link href="/donate" className="btn btn-maroon" style={{ width: '100%', borderRadius: '12px', padding: '13px' }}>
                  <Heart size={16} fill="#ffffff" />
                  <span>{t('hero.donateBtn')}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>
          <div>
            © {new Date().getFullYear()} <strong style={{ color: '#ffffff' }}>{FOUNDATION_INFO.name}</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap' }}>
            <Link href="/legal" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }}>Privacy Policy</Link>
            <Link href="/legal" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }}>Terms of Service</Link>
            <Link href="/legal" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }}>80G &amp; 12A Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
