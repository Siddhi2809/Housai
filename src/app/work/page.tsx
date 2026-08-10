'use client';

import React from 'react';
import Link from 'next/link';
import { WORK_AREAS } from '@/data/foundationData';
import { ArrowRight, Heart } from 'lucide-react';

export default function WorkPage() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>5 CORE PILLARS OF WORK (प्रमुख ५ घटक)</div>
          <h1 className="page-banner-title">Our Core Work &amp; Social Pillars</h1>
          <p className="page-banner-subtitle">
            Housai Vruddhashram (primary focus), Yashanmukti (Anti-Addiction), Sports Promotion, Arogya (Healthcare &amp; Ambulance), and Rojgar Nirmiti (Livelihoods &amp; ST Upliftment).
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Our Work</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge-green" style={{ marginBottom: '10px' }}>5 MAIN SOCIAL SECTORS</div>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--brand-blue)' }}>Key Development Areas</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {WORK_AREAS.map((work) => (
              <div key={work.id} className="card" style={{ padding: '32px', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#ffffff' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{work.icon}</div>
                  <div className="badge-gold" style={{ fontSize: '0.75rem', marginBottom: '12px' }}>{work.share} WEIGHTAGE</div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-blue)', marginBottom: '12px' }}>{work.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '24px' }}>{work.description}</p>
                </div>
                <Link href="/donate" className="btn btn-gold btn-sm" style={{ width: '100%', borderRadius: '10px', padding: '12px' }}>
                  <Heart size={15} fill="#000000" />
                  <span>Support This Initiative</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
