'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShieldCheck, Check, Copy, Star } from 'lucide-react';
import { BANK_DETAILS, FOUNDATION_INFO } from '@/data/foundationData';
import confetti from 'canvas-confetti';

export default function DonatePage() {
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const triggerConfetti = () => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>50% TAX SAVINGS UNDER SECTION 80G</div>
          <h1 className="page-banner-title">Donate to Housai Vruddhashram</h1>
          <p className="page-banner-subtitle">
            Your generous contribution directly funds free food, shelter, medicines, and dignified life for abandoned elderly citizens in Sangli.
          </p>
          <div className="breadcrumb">
            <Link href="/" className="text-[#f3a812] hover:underline">Home</Link>
            <span className="mx-1 text-white/50">/</span>
            <span className="text-white/70">Donate</span>
          </div>
        </div>
      </div>

      {/* DONATION CONTENT */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>

            {/* Bank Transfer Details */}
            <div className="card priority-card" style={{ padding: '36px' }}>
              <div className="priority-ribbon">DIRECT BANK TRANSFER</div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--brand-blue)', marginBottom: '20px', borderBottom: '2px solid #f3a812', paddingBottom: '10px' }}>
                Official Bank Account Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', fontWeight: '600' }}>ACCOUNT NAME</span>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--brand-blue)' }}>{BANK_DETAILS.accountName}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', fontWeight: '600' }}>BANK NAME</span>
                  <strong style={{ fontSize: '1rem', color: '#2d3748' }}>{BANK_DETAILS.bankName}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', fontWeight: '600' }}>ACCOUNT NUMBER</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px' }}>
                    <strong style={{ fontSize: '1.2rem', color: 'var(--brand-red)', letterSpacing: '1px' }}>{BANK_DETAILS.accountNumber}</strong>
                    <button onClick={() => handleCopy(BANK_DETAILS.accountNumber)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brand-blue)' }}>
                      {copiedAccount ? <Check size={18} style={{ color: 'green' }} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', fontWeight: '600' }}>IFSC CODE</span>
                  <strong style={{ fontSize: '1.05rem', color: '#2d3748' }}>{BANK_DETAILS.ifscCode}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', fontWeight: '600' }}>BRANCH</span>
                  <strong style={{ fontSize: '0.96rem', color: '#2d3748' }}>{BANK_DETAILS.branch}</strong>
                </div>
              </div>

              <button className="btn btn-gold" onClick={triggerConfetti} style={{ width: '100%', borderRadius: '14px' }}>
                <Heart size={18} />
                <span>Pledge Support / Confirm Transfer</span>
              </button>
            </div>

            {/* Sponsorship Options */}
            <div>
              <div className="card" style={{ padding: '36px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--brand-blue)', marginBottom: '20px', borderBottom: '2px solid #f3a812', paddingBottom: '10px' }}>
                  Sponsorship Packages
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ padding: '16px', backgroundColor: '#f1f5f9', borderRadius: '14px', borderLeft: '4px solid var(--brand-red)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ color: 'var(--brand-blue)' }}>Sponsor One Meal Day</strong>
                      <span className="badge-gold">₹3,500</span>
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#555' }}>Provides full day breakfast, lunch &amp; dinner for all resident seniors.</p>
                  </div>

                  <div style={{ padding: '16px', backgroundColor: '#f1f5f9', borderRadius: '14px', borderLeft: '4px solid #1b7a4b' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ color: 'var(--brand-blue)' }}>Monthly Senior Adoption</strong>
                      <span className="badge-green">₹5,000</span>
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#555' }}>Complete food, medicine, and shelter care for 1 senior for a full month.</p>
                  </div>

                  <div style={{ padding: '16px', backgroundColor: '#f1f5f9', borderRadius: '14px', borderLeft: '4px solid #f3a812' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ color: 'var(--brand-blue)' }}>Medical Camp Support</strong>
                      <span className="badge-gold">₹15,000</span>
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#555' }}>Sponsors a rural health camp with free checkups &amp; medicine distribution.</p>
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#1b7a4b', fontWeight: '600' }}>
                  <ShieldCheck size={20} />
                  <span>80G Receipt issued within 24 hours of transfer</span>
                </div>
              </div>

              {/* Foundation Info */}
              <div className="card" style={{ padding: '24px', marginTop: '24px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <Star size={20} style={{ color: '#f3a812' }} />
                  <strong style={{ color: 'var(--brand-blue)' }}>Why Donate to Us?</strong>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#555' }}>
                  {['100% transparency in fund usage', 'Directly benefits abandoned elderly citizens', '80G Tax benefit up to 50%', 'Registered charitable trust', 'Regular impact reports to donors'].map((point, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={16} style={{ color: '#1b7a4b', flexShrink: 0 }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
