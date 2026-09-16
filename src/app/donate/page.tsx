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
            <div className="card priority-card" style={{ padding: '38px', borderRadius: '24px', borderTop: '4px solid #800020' }}>
              <div className="priority-ribbon">OFFICIAL BANK ACCOUNT</div>
              <h3 style={{ fontSize: '1.4rem', color: '#0F4C2A', marginBottom: '22px', borderBottom: '2px solid rgba(243, 168, 18, 0.4)', paddingBottom: '12px', fontWeight: 800 }}>
                {t('donate.primaryBank')}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '26px' }}>
                <div>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', display: 'block', fontWeight: 800, letterSpacing: '0.5px' }}>ACCOUNT NAME</span>
                  <strong style={{ fontSize: '1.05rem', color: '#0F4C2A' }}>{BANK_DETAILS.accountName}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', display: 'block', fontWeight: 800, letterSpacing: '0.5px' }}>BANK NAME &amp; BRANCH</span>
                  <strong style={{ fontSize: '0.98rem', color: '#0b1911' }}>{BANK_DETAILS.bankName}, {BANK_DETAILS.branch}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', display: 'block', fontWeight: 800, letterSpacing: '0.5px' }}>ACCOUNT NUMBER</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                    <strong style={{ fontSize: '1.35rem', color: '#800020', letterSpacing: '1px', fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}>{BANK_DETAILS.accountNumber}</strong>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.accountNumber)}
                      style={{ background: '#f0f7f3', border: '1px solid rgba(15, 76, 42, 0.25)', borderRadius: '8px', padding: '6px 10px', cursor: 'pointer', color: '#0F4C2A', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700 }}
                    >
                      {copiedAccount ? <Check size={16} style={{ color: '#0F4C2A' }} /> : <Copy size={16} />}
                      <span>{copiedAccount ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', display: 'block', fontWeight: 800, letterSpacing: '0.5px' }}>IFSC CODE</span>
                  <strong style={{ fontSize: '1.05rem', color: '#0b1911' }}>{BANK_DETAILS.ifscCode}</strong>
                </div>
              </div>

              <div style={{ padding: '16px', backgroundColor: '#f0f7f3', borderRadius: '14px', border: '1px solid rgba(15, 76, 42, 0.2)', marginBottom: '22px', fontSize: '0.86rem', color: '#0F4C2A', lineHeight: '1.5' }}>
                {t('donate.receiptNote')}
              </div>

              <button className="btn btn-maroon" onClick={triggerConfetti} style={{ width: '100%', borderRadius: '12px', padding: '14px' }}>
                <Heart size={18} fill="#ffffff" />
                <span>{t('donate.confirmBtn')}</span>
              </button>
            </div>

            {/* SBI Account & Sponsorship Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* SBI Account Card */}
              <div className="card" style={{ padding: '30px', borderRadius: '22px', backgroundColor: '#f8fafc', border: '1px solid #e8eef0', borderTop: '4px solid #0F4C2A' }}>
                <h4 style={{ fontSize: '1.2rem', color: '#0F4C2A', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800 }}>
                  <Building2 size={20} style={{ color: '#0F4C2A' }} />
                  {t('donate.sbiBank')}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#475569' }}>
                  <div><strong style={{ color: '#0b1911' }}>Account Name:</strong> {BANK_DETAILS.sbiAccountName}</div>
                  <div><strong style={{ color: '#0b1911' }}>Bank:</strong> {BANK_DETAILS.sbiBankName}</div>
                  <div><strong style={{ color: '#0b1911' }}>Account No:</strong> <strong style={{ color: '#800020' }}>{BANK_DETAILS.sbiAccountNumber}</strong></div>
                  <div><strong style={{ color: '#0b1911' }}>IFSC Code:</strong> {BANK_DETAILS.sbiIfscCode}</div>
                  <div><strong style={{ color: '#0b1911' }}>Branch:</strong> {BANK_DETAILS.sbiBranch}</div>
                </div>
              </div>

              {/* Sponsorship Packages */}
              <div className="card" style={{ padding: '30px', borderRadius: '22px' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '18px', borderBottom: '2px solid rgba(243, 168, 18, 0.4)', paddingBottom: '10px', fontWeight: 800 }}>
                  {t('donate.pkgTitle')}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '14px', borderLeft: '4px solid #800020' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ color: '#0F4C2A', fontSize: '0.96rem' }}>{t('donate.p1Title')}</strong>
                      <span className="badge-maroon">₹3,500</span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#64748b' }}>{t('donate.p1Desc')}</p>
                  </div>

                  <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '14px', borderLeft: '4px solid #0F4C2A' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ color: '#0F4C2A', fontSize: '0.96rem' }}>{t('donate.p2Title')}</strong>
                      <span className="badge-green">₹5,000</span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#64748b' }}>{t('donate.p2Desc')}</p>
                  </div>

                  <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '14px', borderLeft: '4px solid #f3a812' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ color: '#0F4C2A', fontSize: '0.96rem' }}>{t('donate.p3Title')}</strong>
                      <span className="badge-gold">₹10,000</span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#64748b' }}>{t('donate.p3Desc')}</p>
                  </div>
                </div>

                <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid #e8eef0', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#0F4C2A', fontWeight: '700' }}>
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
