import React, { useState } from 'react';
import { Phone, Mail, Heart, Menu, X, ChevronDown } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  // Strictly 5 main primary navigation links
  const primaryNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'vruddhashram', label: 'Housai Vruddhashram', isPriority: true },
    { id: 'work', label: 'Our Work' },
    { id: 'contact', label: 'Contact' },
  ];

  // Secondary pages under 'More' dropdown
  const secondaryNavItems = [
    { id: 'team', label: 'Our Team' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'csr', label: 'CSR Partnerships' },
    { id: 'legal', label: 'Legal & 80G' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header-wrapper" style={{ position: 'absolute', top: '16px', left: 0, right: 0, zIndex: 1000, padding: '0 20px', marginBottom: '24px' }}>
      {/* Floating Rounded Header Pill Bar - White, Red, Dark Blue, Green palette */}
      <div
        className="header-main"
        style={{
          backgroundColor: '#ffffff',
          backdropFilter: 'blur(16px)',
          borderRadius: '9999px',
          border: '2px solid var(--brand-red)',
          boxShadow: '0 10px 30px rgba(22, 54, 111, 0.15)',
          padding: '0 24px',
          maxWidth: '1240px',
          margin: '0 auto 20px auto'
        }}
      >
        <div className="navbar-container" style={{ height: '70px' }}>
          {/* Logo & Brand */}
          <div
            className="brand-logo-link"
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="/assets/logo.png"
              alt="Ramdas Athawale Youth Foundation Official Logo"
              className="brand-logo-img"
              style={{ height: '52px', borderRadius: '50%' }}
            />
            <div className="brand-text">
              <span className="brand-title" style={{ fontSize: '1rem', color: 'var(--brand-blue)' }}>RAMDAS ATHAWALE</span>
              <span className="brand-subtitle" style={{ fontSize: '0.68rem', color: 'var(--brand-red)' }}>YOUTH FOUNDATION</span>
            </div>
          </div>

          {/* Nav Links (5 Items + More Dropdown) */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {primaryNavItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: activePage === item.id ? 'var(--brand-red)' : 'var(--brand-blue)',
                    fontWeight: item.isPriority ? '700' : '600'
                  }}
                >
                  {item.label}
                  {item.isPriority && (
                    <span
                      style={{
                        marginLeft: '5px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-normal-green)',
                        display: 'inline-block'
                      }}
                    />
                  )}
                </button>
              </li>
            ))}

            {/* Optional More Menu for Secondary Pages */}
            <li style={{ position: 'relative' }}>
              <button
                className="nav-link"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--brand-blue)' }}
              >
                <span>More</span>
                <ChevronDown size={14} style={{ color: 'var(--brand-red)' }} />
              </button>

              {moreDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '45px',
                  right: 0,
                  backgroundColor: '#ffffff',
                  border: '2px solid var(--brand-red)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 0',
                  minWidth: '170px',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 1100
                }}>
                  {secondaryNavItems.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => handleNavClick(sec.id)}
                      style={{
                        padding: '8px 16px',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        color: activePage === sec.id ? 'var(--brand-red)' : 'var(--brand-blue)',
                        fontSize: '0.88rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      {sec.label}
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Primary CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              className="btn btn-green btn-sm"
              onClick={() => handleNavClick('donate')}
              style={{ borderRadius: '9999px', padding: '8px 20px' }}
            >
              <Heart size={15} fill="#ffffff" />
              <span>DONATE NOW</span>
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              style={{ color: 'var(--brand-blue)' }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
