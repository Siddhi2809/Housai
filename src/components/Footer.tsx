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
    <footer style={{ backgroundColor: 'var(--brand-blue)', color: 'var(--text-white)', paddingTop: '70px', paddingBottom: '30px', borderTop: '4px solid var(--brand-red)' }}>
      <div className="container">
        
        {/* Main 4-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Column 1: Organization Intro */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <img
                src="/assets/logo.png"
                alt="Foundation Logo"
                style={{ height: '54px', borderRadius: '50%', backgroundColor: '#ffffff', padding: '2px' }}
              />
              <div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-white)', lineHeight: '1.2' }}>
                  KHASDAR RAMDASJI ATHAWALE
                </h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--gold-primary)', letterSpacing: '1px' }}>
                  YOUTH FOUNDATION
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-offwhite)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>
              {t('foot.desc')}
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="badge-gold" style={{ fontSize: '0.75rem' }}>Reg No: MH/323/F/17200/15</span>
              <span className="badge-green" style={{ fontSize: '0.75rem', backgroundColor: 'rgba(27, 122, 75, 0.3)', color: '#ffffff' }}>80G Certified</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--gold-primary)', marginBottom: '20px', borderBottom: '2px solid var(--gold-primary)', paddingBottom: '8px', display: 'inline-block' }}>
              {t('foot.quickLinks')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <li>
                <Link href="/" style={{ color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/vruddhashram" style={{ color: 'var(--gold-primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.vruddhashram')}
                </Link>
              </li>
              <li>
                <Link href="/work" style={{ color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.work')}
                </Link>
              </li>
              <li>
                <Link href="/team" style={{ color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" style={{ color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" style={{ color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Priority & Corporate */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--gold-primary)', marginBottom: '20px', borderBottom: '2px solid var(--gold-primary)', paddingBottom: '8px', display: 'inline-block' }}>
              {t('foot.supportTitle')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', marginBottom: '24px' }}>
              <li>
                <Link href="/donate" style={{ color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.donate')}
                </Link>
              </li>
              <li>
                <Link href="/legal" style={{ color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.legal')}
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--gold-primary)' }} /> {t('nav.contact')}
                </Link>
              </li>
            </ul>

            <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(243, 168, 18, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: 'var(--gold-primary)', fontWeight: '700', fontSize: '0.88rem' }}>
                <ShieldCheck size={16} /> {t('about.taxExempt')}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-offwhite)', lineHeight: '1.5' }}>
                {t('about.taxDesc')}
              </p>
            </div>
          </div>

          {/* Column 4: Key Offices & Helpline */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--gold-primary)', marginBottom: '20px', borderBottom: '2px solid var(--gold-primary)', paddingBottom: '8px', display: 'inline-block' }}>
              {t('foot.headOffice')}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '10px', color: 'var(--text-offwhite)' }}>
                <MapPin size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                <span>Tasgaon, Sangli &amp; New Delhi</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', color: 'var(--text-offwhite)', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <span>+91 {FOUNDATION_INFO.phoneMobile} | 0233 3560136</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', color: 'var(--text-offwhite)', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', wordBreak: 'break-all' }}>{FOUNDATION_INFO.emailPrimary}</span>
              </div>

              <div style={{ marginTop: '10px' }}>
                <Link href="/donate" className="btn btn-green btn-sm" style={{ width: '100%', borderRadius: 'var(--radius-sm)' }}>
                  <Heart size={15} fill="#ffffff" />
                  <span>{t('hero.donateBtn')}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: 'var(--text-offwhite)' }}>
          <div>
            © {new Date().getFullYear()} <strong>{FOUNDATION_INFO.name}</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/legal" style={{ color: 'var(--text-offwhite)' }}>Privacy Policy</Link>
            <Link href="/legal" style={{ color: 'var(--text-offwhite)' }}>Terms of Service</Link>
            <Link href="/legal" style={{ color: 'var(--text-offwhite)' }}>80G & 12A Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
