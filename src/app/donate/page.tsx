'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShieldCheck, Check, Copy, Star, Building2, Phone } from 'lucide-react';
import { BANK_DETAILS, FOUNDATION_INFO } from '@/data/foundationData';
import { useLanguage } from '@/context/LanguageContext';
import confetti from 'canvas-confetti';

export default function DonatePage() {
  const { t } = useLanguage();
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const triggerConfetti = () => {
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
  };

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>{t('donate.bannerBadge')}</div>
          <h1 className="page-banner-title">{t('donate.bannerTitle')}</h1>
          <p className="page-banner-subtitle">
            {t('donate.bannerSub')}
          </p>
          <div className="breadcrumb">
            <Link href="/">{t('nav.home')}</Link>
            <span>/</span>
            <span>{t('nav.donate')}</span>
          </div>
        </div>
      </div>

      {/* DONATION CONTENT */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>

            {/* Bank Transfer Details — Primary Bank of India */}
            <div className="card priority-card" style={{ padding: '36px', borderRadius: '20px' }}>
              <div className="priority-ribbon">OFFICIAL BANK ACCOUNT</div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--brand-blue)', marginBottom: '20px', borderBottom: '2px solid #f3a812', paddingBottom: '10px' }}>
                {t('donate.primaryBank')}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: '700' }}>ACCOUNT NAME</span>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--brand-blue)' }}>{BANK_DETAILS.accountName}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: '700' }}>BANK NAME &amp; BRANCH</span>
                  <strong style={{ fontSize: '0.98rem', color: '#0f172a' }}>{BANK_DETAILS.bankName}, {BANK_DETAILS.branch}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: '700' }}>ACCOUNT NUMBER</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px' }}>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--brand-red)', letterSpacing: '1px' }}>{BANK_DETAILS.accountNumber}</strong>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.accountNumber)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      {copiedAccount ? <Check size={18} style={{ color: 'green' }} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: '700' }}>IFSC CODE</span>
                  <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>{BANK_DETAILS.ifscCode}</strong>
                </div>
              </div>

              <div style={{ padding: '16px', backgroundColor: '#eef7f2', borderRadius: '12px', border: '1px solid #1b7a4b', marginBottom: '20px', fontSize: '0.85rem', color: '#16366f' }}>
                {t('donate.receiptNote')}
              </div>

              <button className="btn btn-gold" onClick={triggerConfetti} style={{ width: '100%', borderRadius: '12px', padding: '14px' }}>
                <Heart size={18} />
                <span>{t('donate.confirmBtn')}</span>
              </button>
            </div>

            {/* SBI Account & Sponsorship Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* SBI Account Card */}
              <div className="card" style={{ padding: '28px', borderRadius: '20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--brand-blue)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Building2 size={20} style={{ color: '#1b7a4b' }} />
                  {t('donate.sbiBank')}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#475569' }}>
                  <div><strong>Account Name:</strong> {BANK_DETAILS.sbiAccountName}</div>
                  <div><strong>Bank:</strong> {BANK_DETAILS.sbiBankName}</div>
                  <div><strong>Account No:</strong> <strong style={{ color: 'var(--brand-blue)' }}>{BANK_DETAILS.sbiAccountNumber}</strong></div>
                  <div><strong>IFSC Code:</strong> {BANK_DETAILS.sbiIfscCode}</div>
                  <div><strong>Branch:</strong> {BANK_DETAILS.sbiBranch}</div>
                </div>
              </div>

              {/* Sponsorship Packages */}
              <div className="card" style={{ padding: '28px', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', marginBottom: '16px', borderBottom: '2px solid #f3a812', paddingBottom: '8px' }}>
                  Sponsorship Packages
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ padding: '14px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--brand-red)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <strong style={{ color: 'var(--brand-blue)', fontSize: '0.94rem' }}>Sponsor One Day Meal (Vruddhashram)</strong>
                      <span className="badge-gold">₹3,500</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Breakfast, lunch &amp; dinner for all resident seniors.</p>
                  </div>

                  <div style={{ padding: '14px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #1b7a4b' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <strong style={{ color: 'var(--brand-blue)', fontSize: '0.94rem' }}>Monthly Senior Citizen Adoption</strong>
                      <span className="badge-green">₹5,000</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Complete shelter, medical care, and food for 1 senior citizen.</p>
                  </div>

                  <div style={{ padding: '14px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #f3a812' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <strong style={{ color: 'var(--brand-blue)', fontSize: '0.94rem' }}>Medical &amp; Ambulance Support</strong>
                      <span className="badge-gold">₹10,000</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Sponsors free medical kits &amp; emergency patient transport.</p>
                  </div>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#1b7a4b', fontWeight: '700' }}>
                  <ShieldCheck size={20} />
                  <span>80G Receipt issued within 24 hours of confirmation</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
