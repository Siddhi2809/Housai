'use client';

import React from 'react';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/data/foundationData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>IMPACT & EXECUTION</div>
          <h1 className="page-banner-title">Project Portfolio</h1>
          <p className="page-banner-subtitle">
            Explore our completed and ongoing social projects across Sangli, Tasgaon, and Maharashtra.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / 
            <span>Portfolio</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {PORTFOLIO_PROJECTS.map((proj) => (
              <div key={proj.id} className="card" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge-green" style={{ fontSize: '0.75rem' }}>{proj.category}</span>
                  <span className="badge-gold" style={{ fontSize: '0.75rem' }}>{proj.status}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', marginBottom: '12px' }}>{proj.title}</h3>
                <p style={{ color: '#4a5568', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>{proj.summary}</p>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {proj.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {proj.beneficiaries}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
