'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, FileText, CheckCircle2, Download } from 'lucide-react';
import { FOUNDATION_INFO } from '@/data/foundationData';

export default function LegalPage() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>LEGAL COMPLIANCE (कायदेशीर कागदपत्रे)</div>
          <h1 className="page-banner-title">Legal Documents &amp; 80G Compliance</h1>
          <p className="page-banner-subtitle">
            Khasdar Ramdasji Athawale Youth Foundation operates with 100% legal transparency under the Maharashtra Public Trust Act.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Legal Documents</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="card" style={{ padding: '40px', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--brand-blue)', marginBottom: '24px' }}>
              Official Trust Registrations &amp; Tax Status
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '22px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #1b7a4b' }}>
                <strong style={{ color: 'var(--brand-blue)', fontSize: '1.1rem', display: 'block', marginBottom: '6px' }}>
                  Public Charitable Trust Registration
                </strong>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  Registered under the Maharashtra Public Trust Act. Official Registration No: <strong style={{ color: '#16366f' }}>MH/323/F-17200/15</strong> (Reg. Date 2007/2015).
                </p>
              </div>

              <div style={{ padding: '22px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #f3a812' }}>
                <strong style={{ color: 'var(--brand-blue)', fontSize: '1.1rem', display: 'block', marginBottom: '6px' }}>
                  Section 80G Tax Exemption Certificate
                </strong>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  All monetary donations made to Khasdar Ramdasji Athawale Youth Foundation are eligible for 50% tax exemption under Section 80G of the Indian Income Tax Act. Instant tax receipts provided for all online bank transfers.
                </p>
              </div>

              <div style={{ padding: '22px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #16366f' }}>
                <strong style={{ color: 'var(--brand-blue)', fontSize: '1.1rem', display: 'block', marginBottom: '6px' }}>
                  12A Non-Profit Tax Exemption
                </strong>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  Granted non-profit charitable trust status under Section 12A of the Income Tax Department of India.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#eef7f2', borderRadius: '16px', border: '1px solid #1b7a4b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <strong style={{ color: '#16366f', fontSize: '1rem', display: 'block' }}>Need Official Trust Certificate Copy?</strong>
                <span style={{ fontSize: '0.86rem', color: '#475569' }}>Request certified copies for CSR audit verification.</span>
              </div>
              <Link href="/contact" className="btn btn-green btn-sm" style={{ borderRadius: '10px' }}>
                Contact Trust Secretary
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
