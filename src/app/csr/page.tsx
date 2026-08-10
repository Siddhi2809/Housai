'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Heart, FileText, ArrowRight } from 'lucide-react';

export default function CsrPage() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>CORPORATE SOCIAL RESPONSIBILITY</div>
          <h1 className="page-banner-title">CSR Partnerships</h1>
          <p className="page-banner-subtitle">
            Partner with Ramdas Athawale Youth Foundation for compliant, 80G tax-exempted CSR implementation.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / 
            <span>CSR Partnerships</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '50px' }}>
            <div className="badge-green" style={{ marginBottom: '14px' }}>TRANSPARENT CSR EXECUTION</div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--brand-blue)', marginBottom: '16px' }}>
              Empowering Communities Through Corporate Giving
            </h2>
            <p style={{ color: '#4a5568', fontSize: '1.02rem', lineHeight: '1.7' }}>
              We collaborate with corporate partners to implement high-impact social projects under Schedule VII of the Companies Act 2013, with a primary focus on elderly welfare, health, and skill empowerment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div className="card" style={{ padding: '30px' }}>
              <ShieldCheck size={36} style={{ color: 'var(--bg-normal-green)', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--brand-blue)', marginBottom: '10px' }}>100% Tax Deductible</h3>
              <p style={{ color: '#4a5568', fontSize: '0.92rem', lineHeight: '1.6' }}>
                All CSR contributions receive 80G tax benefit receipts along with audited utilization certificates.
              </p>
            </div>

            <div className="card" style={{ padding: '30px' }}>
              <FileText size={36} style={{ color: 'var(--gold-primary)', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--brand-blue)', marginBottom: '10px' }}>Impact Reports & Audits</h3>
              <p style={{ color: '#4a5568', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Regular progress reports, beneficiary data, and financial reporting provided to corporate CSR committees.
              </p>
            </div>

            <div className="card" style={{ padding: '30px' }}>
              <Heart size={36} style={{ color: 'var(--brand-red)', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--brand-blue)', marginBottom: '10px' }}>Adopt a Senior Wing</h3>
              <p style={{ color: '#4a5568', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Corporates can sponsor entire medical wings or meal programs at Housai Vruddhashram with co-branding opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
