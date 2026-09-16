'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { OFFICES, FOUNDATION_INFO } from '@/data/foundationData';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
    
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>{t('contact.bannerBadge')}</div>
          <h1 className="page-banner-title">{t('contact.bannerTitle')}</h1>
          <p className="page-banner-subtitle">
            {t('contact.bannerSub')}
          </p>
          <div className="breadcrumb">
            <Link href="/">{t('nav.home')}</Link>
            <span>/</span>
            <span>{t('nav.contact')}</span>
          </div>
        </div>
      </div>

      {/* 3 OFFICES GRID */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-green" style={{ marginBottom: '12px' }}>OFFICIAL ADDRESSES &amp; HELPLINES</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0F4C2A', letterSpacing: '-0.02em' }}>Our Main Regional Offices</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '64px' }}>
            {OFFICES.map((off, idx) => (
              <div key={idx} className="card" style={{ padding: '36px', borderRadius: '22px', borderTop: '4px solid #800020' }}>
                <div className="badge-gold" style={{ marginBottom: '16px', fontSize: '0.74rem' }}>{off.type}</div>
                <h3 style={{ fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '18px', fontWeight: 800 }}>{off.title}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.92rem', color: '#475569' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <MapPin size={18} style={{ color: '#800020', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ lineHeight: '1.6' }}>{off.address}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Phone size={18} style={{ color: '#0F4C2A', flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0b1911' }}>Phone / Helpline:</strong>
                      <span>{off.phone}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Mail size={18} style={{ color: '#800020', flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0b1911' }}>Email:</strong>
                      <span style={{ fontSize: '0.84rem', wordBreak: 'break-all' }}>{off.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CONTACT FORM + HELPLINE INFO */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
            {/* Form */}
            <div className="card" style={{ padding: '38px', borderRadius: '24px', backgroundColor: '#ffffff', borderTop: '4px solid #0F4C2A' }}>
              <h3 style={{ fontSize: '1.45rem', color: '#0F4C2A', marginBottom: '8px', fontWeight: 800 }}>{t('contact.sendMsg')}</h3>
              <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '26px' }}>
                Fill out the form below and our volunteer team will reach back out immediately.
              </p>

              {submitted ? (
                <div style={{ padding: '26px', backgroundColor: '#f0f7f3', borderRadius: '16px', border: '1.5px solid rgba(15, 76, 42, 0.25)', textAlign: 'center' }}>
                  <CheckCircle size={44} style={{ color: '#0F4C2A', margin: '0 auto 12px auto' }} />
                  <h4 style={{ color: '#0F4C2A', fontSize: '1.15rem', marginBottom: '6px', fontWeight: 800 }}>Thank You! Message Received.</h4>
                  <p style={{ color: '#475569', fontSize: '0.9rem' }}>
                    Our helpline team has recorded your details and will call you back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0F4C2A', marginBottom: '6px' }}>{t('contact.fullName')}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '0.92rem', outline: 'none' }}
                    />
                  </div>

                  <div className="form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0F4C2A', marginBottom: '6px' }}>{t('contact.phone')}</label>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile No"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '0.92rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0F4C2A', marginBottom: '6px' }}>{t('contact.email')}</label>
                      <input
                        type="email"
                        placeholder="Email (Optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '0.92rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0F4C2A', marginBottom: '6px' }}>{t('contact.subject')}</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '0.92rem', outline: 'none', backgroundColor: '#ffffff' }}
                    >
                      <option value="">Select Category</option>
                      <option value="vruddhashram">Housai Vruddhashram Admission</option>
                      <option value="donation">Donation &amp; 80G Receipt</option>
                      <option value="ambulance">Emergency Ambulance Service</option>
                      <option value="yashanmukti">Yashanmukti De-addiction Camp</option>
                      <option value="csr">Corporate CSR Partnership</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0F4C2A', marginBottom: '6px' }}>{t('contact.message')}</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please write your inquiry details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: '100%', padding: '13px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '0.92rem', outline: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark-green"
                    style={{ padding: '14px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.96rem' }}
                  >
                    <Send size={16} />
                    <span>{t('contact.submitBtn')}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Helpline Info Side Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card" style={{ padding: '34px', borderRadius: '22px', backgroundColor: '#0A381F', color: '#ffffff', borderTop: '4px solid #800020' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: 'rgba(243, 168, 18, 0.15)', border: '1px solid #f3a812', color: '#f3a812', borderRadius: '9999px', fontSize: '0.76rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '0.5px' }}>
                  ★ SANGLI HELPLINE LAUNCH
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px', fontWeight: 800 }}>
                  {t('contact.helplineTitle')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.65', marginBottom: '22px' }}>
                  Launched on the anniversary of the organization (Dec 25) at Sahyadri Guest House by Union Minister Shri Ramdas Athawale to resolve citizen queries immediately.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.94rem', color: '#f3a812', fontWeight: 700 }}>
                  <div>📞 Helpline 1: +91 99229 43777</div>
                  <div>📞 Helpline 2: +91 99756 01777</div>
                  <div>📞 Helpline 3: +91 99229 42777</div>
                  <div>☎️ Landline: 0233 3560136</div>
                </div>
              </div>

              <div className="card" style={{ padding: '30px', borderRadius: '22px', backgroundColor: '#ffffff', borderTop: '4px solid #0F4C2A' }}>
                <h4 style={{ color: '#0F4C2A', fontSize: '1.15rem', marginBottom: '14px', fontWeight: 800 }}>Official Email Addresses</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#475569' }}>
                  <div>📧 ramdasjiathawaleyuthfoundation@gmail.com</div>
                  <div>📧 ramdasjiathawaleyouthfoudation@gmail.com</div>
                  <div>📧 buntybhandare@gmail.com</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
