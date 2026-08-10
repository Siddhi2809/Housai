import React from 'react';
import { Phone, Mail, MapPin, Heart, Shield, ArrowRight } from 'lucide-react';
import { FOUNDATION_INFO, OFFICES } from '../data/foundationData';

export default function Footer({ setActivePage }) {
  return (
    <footer style={{ backgroundColor: 'var(--bg-darker)', color: 'var(--text-offwhite)', paddingTop: '60px', paddingBottom: '30px', borderTop: '4px solid var(--gold-primary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <img src="/assets/logo.png" alt="Foundation Logo" style={{ height: '54px' }} />
              <div>
                <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem' }}>RAMDAS ATHAWALE</h4>
                <p style={{ color: 'var(--gold-primary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>YOUTH FOUNDATION</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.6' }}>
              A registered non-profit social organization committed to elderly welfare, senior citizen dignity through <strong>Housai Vruddhashram</strong>, healthcare, de-addiction, and youth empowerment.
            </p>
            <div style={{ padding: '12px', background: 'rgba(243, 168, 18, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--gold-primary)', fontWeight: '700' }}>
                REGISTRATION NO: {FOUNDATION_INFO.regNo}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Foundation' },
                { id: 'vruddhashram', label: 'Housai Vruddhashram (Priority)' },
                { id: 'work', label: 'Initiatives & Programs' },
                { id: 'team', label: 'Leadership & Board' },
                { id: 'csr', label: 'CSR Partnerships' },
                { id: 'legal', label: 'Legal & Transparency' },
                { id: 'donate', label: 'Donate Online' },
                { id: 'contact', label: 'Contact Information' },
              ].map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => { setActivePage(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    style={{ background: 'none', border: 'none', color: 'var(--text-offwhite)', fontSize: '0.92rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <ArrowRight size={14} style={{ color: 'var(--gold-primary)' }} />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Initiatives */}
          <div>
            <h4 style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Social Impact Focus
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--gold-primary)' }}>
                <strong style={{ color: 'var(--text-white)', fontSize: '0.9rem' }}>Housai Vruddhashram</strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Senior Citizen Home & Dignified Healthcare</p>
              </li>
              <li style={{ fontSize: '0.9rem', color: 'var(--text-offwhite)' }}>• Yashanmukti De-Addiction Drives</li>
              <li style={{ fontSize: '0.9rem', color: 'var(--text-offwhite)' }}>• Free Rural Healthcare Camps</li>
              <li style={{ fontSize: '0.9rem', color: 'var(--text-offwhite)' }}>• Youth Sports Tournaments</li>
              <li style={{ fontSize: '0.9rem', color: 'var(--text-offwhite)' }}>• Women Skill & Employment</li>
              <li style={{ fontSize: '0.9rem', color: 'var(--text-offwhite)' }}>• Tathastu Cultural Academy</li>
            </ul>
          </div>

          {/* Contact & HQ */}
          <div>
            <h4 style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Headquarters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <span>{OFFICES[0].address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <span>0233 3560136 / 9922943777</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <span style={{ wordBreak: 'break-all' }}>{FOUNDATION_INFO.emailPrimary}</span>
              </div>

              <button 
                className="btn btn-gold" 
                style={{ marginTop: '10px', width: '100%' }}
                onClick={() => { setActivePage('donate'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <Heart size={16} fill="var(--bg-darker)" />
                <span>SUPPORT OUR MISSION</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <p>© {new Date().getFullYear()} Ramdas Athawale Youth Foundation. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => setActivePage('legal')}>Legal & 80G Transparency</span>
            <span style={{ cursor: 'pointer' }} onClick={() => setActivePage('contact')}>Contact Headquarters</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
