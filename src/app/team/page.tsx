'use client';

import React from 'react';
import Link from 'next/link';
import { LEADERSHIP, DIRECTORS_BOARD } from '@/data/foundationData';
import { UserRound, Award, ShieldCheck } from 'lucide-react';

export default function TeamPage() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>GOVERNANCE & LEADERSHIP</div>
          <h1 className="page-banner-title">Our Dedicated Team & Board</h1>
          <p className="page-banner-subtitle">
            Guided by visionary social leaders, patrons, and dedicated trustees who drive our senior citizen welfare and social development programs.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / 
            <span>Our Team</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: 'var(--brand-blue)', marginBottom: '30px', textAlign: 'center' }}>
            Patrons & Key Leadership
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} className="card" style={{ padding: '30px', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--brand-light-blue)', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <UserRound size={40} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--brand-blue)', marginBottom: '6px' }}>{leader.name}</h3>
                <span className="badge-gold" style={{ fontSize: '0.75rem', marginBottom: '12px' }}>{leader.role}</span>
                <p style={{ color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.6' }}>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
