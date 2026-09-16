'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Heart, FileText, ArrowRight, Building2, Mail, Phone } from 'lucide-react';
import { FOUNDATION_INFO } from '@/data/foundationData';

export default function CsrPage() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>CORPORATE SOCIAL RESPONSIBILITY</div>
          <h1 className="page-banner-title">CSR Partnerships &amp; Grants</h1>
          <p className="page-banner-subtitle">
            Partner with Khasdar Ramdas Athawale Youth Foundation for compliant, 80G tax-exempted CSR implementation across Maharashtra.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>CSR Partnerships</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <div className="badge-green" style={{ marginBottom: '14px' }}>TRANSPARENT CSR EXECUTION</div>
            <h2 style={{ fontSize: '2.3rem', color: '#0F4C2A', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Empowering Communities Through Strategic Corporate Giving
            </h2>
            <p style={{ color: '#4a5568', fontSize: '1.02rem', lineHeight: '1.7' }}>
              We collaborate with corporate partners to execute high-impact social projects under Schedule VII of the Companies Act 2013, focusing on elder care dignity at Housai Vruddhashram, rural health camps, and youth de-addiction programs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            <div className="card" style={{ padding: '34px 28px', borderTop: '4px solid #0F4C2A', borderRadius: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: '#f0f7f3', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={30} style={{ color: '#0F4C2A' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '12px' }}>100% Tax Deductible (80G)</h3>
              <p style={{ color: '#4a5568', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '16px' }}>
                All CSR contributions receive official 80G tax benefit receipts along with audited utilization certificates certified by registered Chartered Accountants.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F4C2A', fontSize: '0.85rem', fontWeight: 700 }}>
                <CheckCircle2 size={16} /> <span>12A &amp; 80G Certified</span>
              </div>
            </div>

            <div className="card" style={{ padding: '34px 28px', borderTop: '4px solid #f3a812', borderRadius: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: '#fff8eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <FileText size={30} style={{ color: '#b45309' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '12px' }}>Impact Reports &amp; Audits</h3>
              <p style={{ color: '#4a5568', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Regular quarterly milestone reports, direct beneficiary metrics, and photographic evidence submitted directly to your corporate CSR committee.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b45309', fontSize: '0.85rem', fontWeight: 700 }}>
                <CheckCircle2 size={16} /> <span>Annual CA Audits Available</span>
              </div>
            </div>

            <div className="card" style={{ padding: '34px 28px', borderTop: '4px solid #800020', borderRadius: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: '#fcf0f2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Heart size={30} style={{ color: '#800020' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#800020', marginBottom: '12px' }}>Adopt a Senior Wing</h3>
              <p style={{ color: '#4a5568', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Corporates can sponsor entire medical wings, ambulance facilities, or meal nutrition programs at Housai Vruddhashram with co-branding and plaque placement.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#800020', fontSize: '0.85rem', fontWeight: 700 }}>
                <CheckCircle2 size={16} /> <span>Dedicated Plaque &amp; Naming Rights</span>
              </div>
            </div>
          </div>

          {/* Corporate Engagement Banner */}
          <div style={{ 
            background: 'linear-gradient(135deg, #0A381F 0%, #0F4C2A 60%, #630019 100%)', 
            borderRadius: '20px', 
            padding: '48px 40px', 
            color: '#ffffff',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid rgba(243, 168, 18, 0.3)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '14px', backgroundColor: 'rgba(243, 168, 18, 0.2)', color: '#f3a812' }}>
                  SCHEDULE VII COMPLIANT
                </span>
                <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '12px', fontWeight: 800 }}>
                  Ready to Discuss Your Organization’s CSR Mandate?
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px' }}>
                  Our CSR secretariat prepares tailored project presentations, budget breakdowns, and legal documentation for your board approvals.
                </p>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-gold" style={{ padding: '14px 28px' }}>
                    <Building2 size={17} />
                    <span>Initiate CSR Discussion</span>
                  </Link>
                  <Link href="/legal" className="btn btn-outline-white" style={{ padding: '14px 24px' }}>
                    <span>View Legal Credentials</span>
                  </Link>
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <h4 style={{ color: '#f3a812', fontSize: '1.1rem', marginBottom: '16px', fontWeight: 700 }}>Direct CSR Secretariat Desk</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Phone size={18} style={{ color: '#f3a812', flexShrink: 0 }} />
                    <span>+91 {FOUNDATION_INFO.phoneMobile} / 0233 3560136</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail size={18} style={{ color: '#f3a812', flexShrink: 0 }} />
                    <span>{FOUNDATION_INFO.emailPrimary}</span>
                  </div>
                  <div style={{ marginTop: '8px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                    Official Registration No: MH/323/F/17200/15 (Public Charitable Trust)
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
