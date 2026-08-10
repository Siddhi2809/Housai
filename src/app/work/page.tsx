'use client';

import React from 'react';
import Link from 'next/link';
import { WORK_AREAS } from '@/data/foundationData';
import { ArrowRight, Heart } from 'lucide-react';

export default function WorkPage() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>SOCIAL INITIATIVES</div>
          <h1 className="page-banner-title">Our Core Work Areas</h1>
          <p className="page-banner-subtitle">
            Beyond elderly care at Housai Vruddhashram, our foundation works across healthcare, drug de-addiction, sports, women empowerment, and disaster relief.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / 
            <span>Our Work</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {WORK_AREAS.map((work) => (
              <div key={work.id} className="card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{work.icon}</div>
                  <div className="badge-gold" style={{ fontSize: '0.75rem', marginBottom: '12px' }}>{work.share} WEIGHTAGE</div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-blue)', marginBottom: '12px' }}>{work.title}</h3>
                  <p style={{ color: '#4a5568', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '20px' }}>{work.description}</p>
                </div>
                <Link href="/donate" className="btn btn-gold btn-sm" style={{ width: '100%' }}>
                  <Heart size={14} fill="var(--bg-darker)" />
                  <span>Support This Cause</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
