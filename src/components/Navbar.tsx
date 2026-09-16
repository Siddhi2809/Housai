'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { FOUNDATION_INFO } from '@/data/foundationData';
import { useLanguage } from '@/context/LanguageContext';

const NAV_LINKS = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.vruddhashram', href: '/vruddhashram' },
  { key: 'nav.work', href: '/work' },
  { key: 'nav.team', href: '/team' },
  { key: 'nav.gallery', href: '/gallery' },
  { key: 'nav.contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TOP HELPLINE & UTILITY STRIP */}
      <div className="top-strip" style={{ backgroundColor: '#0A381F', color: '#ffffff', fontSize: '0.78rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1002 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', overflow: 'hidden' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f3a812', fontWeight: '700', whiteSpace: 'nowrap' }}>
              <Phone size={13} /> {t('nav.helpline')} +91 {FOUNDATION_INFO.phoneMobile}
            </span>
            <span className="top-strip-email" style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap' }}>
              <Mail size={13} /> {FOUNDATION_INFO.emailPrimary}
            </span>
          </div>

          {/* LANGUAGE SELECTOR */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <Globe size={13} style={{ color: '#f3a812' }} />
            <span className="top-strip-lang-label" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: '0.75rem' }}>{t('nav.language')}</span>
            <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '9999px', padding: '2px' }}>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: lang === 'en' ? '#800020' : 'transparent',
                  color: lang === 'en' ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  transition: 'all 0.2s ease',
                }}
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                style={{
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: lang === 'hi' ? '#800020' : 'transparent',
                  color: lang === 'hi' ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  transition: 'all 0.2s ease',
                }}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      <header
        className="main-header"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
          display: 'flex',
          justifyContent: 'center',
          padding: scrolled ? '6px 16px' : '10px 16px',
          marginTop: scrolled ? '0' : '-8px',
          transition: 'all 0.3s ease',
        }}
      >
        <nav
          style={{
            width: '100%',
            maxWidth: '1280px',
            backgroundColor: '#ffffff',
            borderRadius: '9999px',
            padding: '6px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: scrolled
              ? '0 6px 20px rgba(15, 76, 42, 0.15)'
              : '0 4px 18px rgba(15, 76, 42, 0.12)',
            border: '1px solid #e2e8f0',
          }}
        >
          {/* Logo & Foundation Title */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', minWidth: 0 }}>
            <div
              className="nav-logo-icon"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #0F4C2A',
                flexShrink: 0,
              }}
            >
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={40}
                height={40}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div
                className="nav-title-primary"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.84rem',
                  color: '#0F4C2A',
                  lineHeight: '1.15',
                  letterSpacing: '0.2px',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
              >
                KHASDAR RAMDASJI ATHAWALE
              </div>
              <div
                className="nav-title-secondary"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.65rem',
                  color: '#800020',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                YOUTH FOUNDATION
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="desktop-links" style={{ listStyle: 'none', alignItems: 'center', gap: '4px' }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: isActive ? 800 : 600,
                      fontSize: '0.82rem',
                      color: isActive ? '#ffffff' : '#334155',
                      padding: '6px 13px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      backgroundColor: isActive ? '#0F4C2A' : 'transparent',
                      boxShadow: isActive ? '0 0 14px rgba(15, 76, 42, 0.5)' : 'none',
                      border: isActive ? '1px solid #800020' : '1px solid transparent',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <Link
              href="/donate"
              className="nav-donate-btn"
              style={{
                backgroundColor: '#800020',
                color: '#ffffff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.78rem',
                padding: '7px 13px',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(128, 0, 32, 0.3)',
              }}
            >
              <Heart size={13} fill="#ffffff" />
              <span>{t('nav.donate')}</span>
            </Link>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #cbd5e1',
                backgroundColor: '#ffffff',
                color: '#0F4C2A',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '86px',
            left: '12px',
            right: '12px',
            zIndex: 1001,
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 12px 36px rgba(15, 76, 42, 0.25)',
            border: '1px solid #e2e8f0',
          }}
        >
          {/* Mobile Language Switcher row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '12px',
              marginBottom: '10px',
              borderBottom: '1px solid #f1f5f9',
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={14} color="#0F4C2A" /> Language / भाषा
            </span>
            <div style={{ display: 'inline-flex', backgroundColor: '#f1f5f9', borderRadius: '9999px', padding: '2px' }}>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: lang === 'en' ? '#800020' : 'transparent',
                  color: lang === 'en' ? '#ffffff' : '#475569',
                }}
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                style={{
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: lang === 'hi' ? '#800020' : 'transparent',
                  color: lang === 'hi' ? '#ffffff' : '#475569',
                }}
              >
                हिंदी
              </button>
            </div>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 800 : 500,
                      color: isActive ? '#ffffff' : '#1e293b',
                      backgroundColor: isActive ? '#0F4C2A' : 'transparent',
                      boxShadow: isActive ? '0 0 10px rgba(15, 76, 42, 0.5)' : 'none',
                      textDecoration: 'none',
                    }}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
