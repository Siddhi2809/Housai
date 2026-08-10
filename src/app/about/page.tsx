'use client';

import React from 'react';
import Link from 'next/link';
import { FOUNDATION_INFO, DIRECTORS_BOARD, KEY_OFFICERS } from '@/data/foundationData';
import { ShieldCheck, Award, Heart, Users, CheckCircle2, Building, Target, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>MAHARASHTRA PUBLIC CHARITABLE TRUST</div>
          <h1 className="page-banner-title">About Our Foundation</h1>
          <p className="page-banner-subtitle">
            Khasdar Ramdasji Athawale Youth Foundation (Est. 2007) — Serving over 400 projects across 25 states of India with a primary focus on Housai Vruddhashram elderly care.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* FOUNDATION OVERVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
            <div>
              <div className="badge-green" style={{ marginBottom: '14px' }}>ESTABLISHED 2007 • ALL INDIA OUTREACH</div>
              <h2 style={{ fontSize: '2.1rem', color: 'var(--brand-blue)', marginBottom: '18px' }}>
                Transforming Lives Across Scheduled Tribes &amp; Underprivileged Communities
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
                Established in 2007 under the visionary guidance of Union Minister Hon. Ramdas Athawale Saheb, <strong>Khasdar Ramdasji Athawale Youth Foundation</strong> (Reg No: MH/323/F-17200/15) operates as a registered public charitable social enterprise dedicated to overall societal development.
              </p>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8', marginBottom: '24px' }}>
                With over <strong>400+ projects</strong> in more than <strong>2,000 remote villages and urban slums</strong> across 25 Indian states, we act as a catalyst for grassroots change. We partner with government initiatives and like-minded institutions to address critical needs in medical aid, poverty alleviation, child education, and senior citizen dignity.
              </p>

              <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #1b7a4b', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h4 style={{ color: 'var(--brand-blue)', fontSize: '1.1rem', fontWeight: 800 }}>Our Core Mission Objectives:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
                  <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} style={{ color: '#1b7a4b', flexShrink: 0 }} />
                    <span><strong>1. Medical Assistance:</strong> Financial aid &amp; healthcare resources for critical treatments.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} style={{ color: '#1b7a4b', flexShrink: 0 }} />
                    <span><strong>2. Poverty Alleviation:</strong> Socioeconomic upliftment, shelter &amp; sustainable livelihoods.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} style={{ color: '#1b7a4b', flexShrink: 0 }} />
                    <span><strong>3. Child Education:</strong> Scholarships, hostel aid &amp; mentorship for poor &amp; ST community children.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-blue)', marginBottom: '20px', borderBottom: '2px solid #f3a812', paddingBottom: '10px' }}>
                  Official Registration &amp; Contact Details
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <ShieldCheck size={22} style={{ color: '#1b7a4b', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>Maharashtra Public Charitable Trust</strong>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Reg. No. MH/323/F-17200/15</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Award size={22} style={{ color: '#f3a812', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>80G &amp; 12A Certified Tax Rebate</strong>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>50% Income Tax Exemption for Donors</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Building size={22} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>Headquarters Address</strong>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Office - Shiddu, Rajarshi Shahu Nagar, Near MSEB, Bypass Road, Tasgaon, Dist. Sangli</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Phone size={22} style={{ color: '#1b7a4b', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem' }}>Official Contacts &amp; Helpline</strong>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>9975601777 / 9922942777 / 9922943777</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '28px' }}>
                  <Link href="/donate" className="btn btn-gold" style={{ width: '100%', borderRadius: '12px' }}>
                    <Heart size={16} />
                    <span>Support Housai Vruddhashram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY OFFICERS & FOUNDER SPEECH */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge-green" style={{ marginBottom: '10px' }}>FOUNDATION LEADERSHIP</div>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--brand-blue)' }}>Founder President &amp; Key Officers</h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b', marginTop: '6px' }}>
              Guiding our mission with vision, integrity, and dedication to public welfare.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {KEY_OFFICERS.map((officer, idx) => (
              <div key={idx} className="card" style={{ padding: '32px', borderRadius: '18px', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #16366f, #1b7a4b)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800 }}>
                    {officer.name.charAt(officer.name.indexOf(' ') + 1)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--brand-blue)', marginBottom: '2px' }}>{officer.name}</h3>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1b7a4b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {officer.title} ({officer.marathiTitle})
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '16px' }}>
                  &ldquo;{officer.message}&rdquo;
                </p>

                <div style={{ padding: '12px 16px', backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '0.85rem', color: '#334155' }}>
                  <strong>मराठी मनोगत:</strong> {officer.marathiMessage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD OF DIRECTORS LIST */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-gold" style={{ marginBottom: '10px' }}>GOVERNING COUNCIL</div>
            <h2 style={{ fontSize: '2rem', color: 'var(--brand-blue)' }}>Board of Directors (संचालक मंडळ)</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {DIRECTORS_BOARD.map((director, idx) => (
              <div key={idx} className="card" style={{ padding: '20px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <CheckCircle2 size={20} style={{ color: '#1b7a4b', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.96rem', color: 'var(--brand-blue)' }}>{director.name}</strong>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{director.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
