'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/work' },
  { label: 'Housai Vruddhashram', href: '/vruddhashram' },
  { label: 'Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(window.location.pathname);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-[88px]" />

      <header
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-center"
        style={{
          padding: scrolled ? '8px 20px' : '12px 20px',
          transition: 'padding 0.3s ease',
        }}
      >
        {/* Pill / Capsule Nav Container */}
        <nav
          className="w-full flex items-center justify-between"
          style={{
            maxWidth: '1280px',
            backgroundColor: '#ffffff',
            borderRadius: '9999px',
            padding: '8px 12px 8px 12px',
            boxShadow: scrolled
              ? '0 8px 32px rgba(22, 54, 111, 0.18)'
              : '0 4px 24px rgba(22, 54, 111, 0.12)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          {/* Logo + Brand Name */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #e2e8f0',
                flexShrink: 0,
              }}
            >
              <Image
                src="/assets/logo.png"
                alt="Ramdas Athawale Youth Foundation Logo"
                width={52}
                height={52}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div className="leading-tight">
              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: '#16366f',
                  letterSpacing: '0.3px',
                  lineHeight: '1.2',
                }}
              >
                RAMDAS ATHAWALE
              </div>
              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  color: '#1b7a4b',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}
              >
                YOUTH FOUNDATION
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1" style={{ listStyle: 'none' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activePath === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.875rem',
                      color: isActive ? '#1b7a4b' : '#374151',
                      padding: '7px 12px',
                      borderRadius: '9999px',
                      display: 'block',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.color = '#16366f';
                        (e.target as HTMLElement).style.backgroundColor = '#f1f5f9';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.color = '#374151';
                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          display: 'block',
                          height: '2px',
                          backgroundColor: '#1b7a4b',
                          borderRadius: '2px',
                          marginTop: '2px',
                          width: '100%',
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Donate Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center gap-2"
              style={{
                backgroundColor: '#1b7a4b',
                color: '#ffffff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.875rem',
                padding: '10px 20px',
                borderRadius: '9999px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s ease',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#145c37';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 16px rgba(27,122,75,0.35)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#1b7a4b';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <Heart size={15} fill="#ffffff" />
              DONATE NOW
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                background: 'none',
                cursor: 'pointer',
                color: '#16366f',
              }}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div
          className="fixed top-[88px] left-4 right-4 z-[999] rounded-2xl lg:hidden"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 12px 40px rgba(22,54,111,0.18)',
            padding: '16px',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    color: activePath === link.href ? '#1b7a4b' : '#1e293b',
                    backgroundColor: activePath === link.href ? '#eef7f2' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: '#1b7a4b',
                  color: '#ffffff',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                }}
              >
                <Heart size={16} fill="#ffffff" />
                DONATE NOW
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
