'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { FOUNDATION_INFO } from '@/data/foundationData';

const NAV_LINKS = [
  { label: { en: 'Home', hi: 'मुख्य पृष्ठ' }, href: '/' },
  { label: { en: 'About Us', hi: 'हमारे बारे में' }, href: '/about' },
  { label: { en: 'Vruddhashram', hi: 'वृद्धाश्रम' }, href: '/vruddhashram' },
  { label: { en: 'Our Work', hi: 'हमारे कार्य' }, href: '/work' },
  { label: { en: 'Members & Board', hi: 'सदस्य व पदाधिकारी' }, href: '/team' },
  { label: { en: 'Portfolio', hi: 'पोर्टफोलियो' }, href: '/portfolio' },
  { label: { en: 'Gallery', hi: 'गैलरी' }, href: '/gallery' },
  { label: { en: 'Legal & 80G', hi: 'कानूनी दस्तावेज' }, href: '/legal' },
  { label: { en: 'Contact', hi: 'संपर्क करें' }, href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  useEffect(() => {
    setActivePath(window.location.pathname);
    const savedLang = localStorage.getItem('app_lang') as 'en' | 'hi';
    if (savedLang) setLang(savedLang);

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = (selectedLang: 'en' | 'hi') => {
    setLang(selectedLang);
    localStorage.setItem('app_lang', selectedLang);
    window.dispatchEvent(new Event('languageChange'));
  };

  return (
    <>
      {/* TOP HELPLINE STRIP */}
      <div style={{ backgroundColor: '#0e244d', color: '#ffffff', fontSize: '0.78rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f3a812', fontWeight: '700' }}>
              <Phone size={13} /> Helpline / हेल्पलाइन: +91 {FOUNDATION_INFO.phoneMobile} | 0233 3560136
            </span>
            <span style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Mail size={13} /> {FOUNDATION_INFO.emailPrimary}
            </span>
          </div>

          {/* LANGUAGE SELECTOR */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Globe size={13} style={{ color: '#22c55e' }} />
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: '0.75rem' }}>Language / भाषा:</span>
            <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '9999px', padding: '2px' }}>
              <button
                onClick={() => toggleLanguage('en')}
                style={{
                  padding: '2px 10px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: lang === 'en' ? '#1b7a4b' : 'transparent',
                  color: lang === 'en' ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  transition: 'all 0.2s ease',
                }}
              >
                English
              </button>
              <button
                onClick={() => toggleLanguage('hi')}
                style={{
                  padding: '2px 10px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: lang === 'hi' ? '#1b7a4b' : 'transparent',
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

      {/* Spacer for sticky header */}
      <div style={{ height: '76px' }} />

      <header
        style={{
          position: 'fixed',
          top: '32px',
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: scrolled ? '6px 16px' : '10px 16px',
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
              ? '0 10px 30px rgba(22, 54, 111, 0.2)'
              : '0 4px 20px rgba(22, 54, 111, 0.12)',
            border: '1px solid #e2e8f0',
          }}
        >
          {/* Logo & Foundation Title */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #1b7a4b',
                flexShrink: 0,
              }}
            >
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={46}
                height={46}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  color: '#16366f',
                  lineHeight: '1.2',
                  letterSpacing: '0.2px',
                }}
              >
                KHASDAR RAMDASJI ATHAWALE
              </div>
              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.68rem',
                  color: '#1b7a4b',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                }}
              >
                YOUTH FOUNDATION
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="desktop-links" style={{ listStyle: 'none', alignItems: 'center', gap: '4px' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activePath === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.82rem',
                      color: isActive ? '#1b7a4b' : '#334155',
                      padding: '6px 10px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      backgroundColor: isActive ? '#eef7f2' : 'transparent',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {link.label[lang]}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link
              href="/donate"
              style={{
                backgroundColor: '#1b7a4b',
                color: '#ffffff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.82rem',
                padding: '9px 18px',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(27, 122, 75, 0.3)',
              }}
            >
              <Heart size={14} fill="#ffffff" />
              {lang === 'en' ? 'DONATE NOW' : 'दान करें'}
            </Link>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid #cbd5e1',
                backgroundColor: '#ffffff',
                color: '#16366f',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
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
            top: '90px',
            left: '16px',
            right: '16px',
            zIndex: 999,
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 12px 36px rgba(22, 54, 111, 0.25)',
            border: '1px solid #e2e8f0',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {NAV_LINKS.map((link) => (
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
                    fontWeight: activePath === link.href ? 700 : 500,
                    color: activePath === link.href ? '#1b7a4b' : '#1e293b',
                    backgroundColor: activePath === link.href ? '#eef7f2' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  {link.label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
