'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';
import { FOUNDATION_INFO } from '@/data/foundationData';

export default function LegalPage() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>GOVERNMENT COMPLIANCE</div>
          <h1 className="page-banner-title">Legal & 80G Tax Exemption</h1>
          <p className="page-banner-subtitle">
            Ramdas Athawale Youth Foundation operates with complete legal transparency and regulatory adherence.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / 
            <span>Legal & 80G</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--brand-blue)', marginBottom: '24px' }}>
              Registration & Tax Exemption Details
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '18px', backgroundColor: 'var(--surface-light)', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--brand-blue)', fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
                  Public Charitable Trust Registration
                </strong>
                <p style={{ color: '#4a5568', fontSize: '0.94rem' }}>
                  Registered under Maharashtra Public Trust Act. Registration No: <strong>{FOUNDATION_INFO.regNo}</strong>.
                </p>
              </div>

              <div style={{ padding: '18px', backgroundColor: 'var(--surface-light)', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--brand-blue)', fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
                  Section 80G Tax Exemption Certificate
                </strong>
                <p style={{ color: '#4a5568', fontSize: '0.94rem' }}>
                  Donations made to the Foundation are eligible for 50% tax exemption under Section 80G of the Indian Income Tax Act. Instant 80G receipts issued for all digital & offline donations.
                </p>
              </div>

              <div style={{ padding: '18px', backgroundColor: 'var(--surface-light)', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--brand-blue)', fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
                  12A Income Tax Registration
                </strong>
                <p style={{ color: '#4a5568', fontSize: '0.94rem' }}>
                  Granted permanent 12A non-profit charitable status by the Income Tax Department of India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
