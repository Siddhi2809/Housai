'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, ShieldCheck, Clock } from 'lucide-react';
import { OFFICES, FOUNDATION_INFO } from '@/data/foundationData';

export default function ContactPage() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>GET IN TOUCH</div>
          <h1 className="page-banner-title">Contact Headquarters & Offices</h1>
          <p className="page-banner-subtitle">
            Have questions about donations, 80G receipts, senior citizen admissions, or CSR partnerships? Reach out to our teams in Sangli, Tasgaon, or Delhi.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / 
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            {OFFICES.map((off, idx) => (
              <div key={idx} className="card" style={{ padding: '30px', borderTop: '4px solid var(--brand-red)' }}>
                <div className="badge-gold" style={{ marginBottom: '14px', fontSize: '0.75rem' }}>{off.type}</div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', marginBottom: '16px' }}>{off.title}</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: '#4a5568' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <MapPin size={18} style={{ color: 'var(--brand-red)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{off.address}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Phone size={18} style={{ color: 'var(--brand-red)', flexShrink: 0 }} />
                    <span>{off.phone}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Mail size={18} style={{ color: 'var(--brand-red)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.84rem', wordBreak: 'break-all' }}>{off.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
