'use client';

import React from 'react';
import Link from 'next/link';
import { KEY_OFFICERS, DIRECTORS_BOARD } from '@/data/foundationData';
import { UserRound, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TeamPage() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>GOVERNANCE &amp; MEMBERS (मेम्बर्स)</div>
          <h1 className="page-banner-title">Our Officers &amp; Governing Board</h1>
          <p className="page-banner-subtitle">
            Meet the founder, mentor, secretary, and board of directors driving Khasdar Ramdasji Athawale Youth Foundation forward.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Members &amp; Board</span>
          </div>
        </div>
      </div>

      {/* CHIEF MENTOR & KEY OFFICERS */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge-green" style={{ marginBottom: '10px' }}>KEY OFFICERS (प्रमुख पदाधिकारी)</div>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--brand-blue)' }}>Key Leadership &amp; Mentors</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {KEY_OFFICERS.map((officer, idx) => (
              <div key={idx} className="card" style={{ padding: '32px', borderRadius: '18px', textAlign: 'center', backgroundColor: '#ffffff' }}>
                <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: 'linear-gradient(135deg, #16366f, #1b7a4b)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '2rem', fontWeight: 800 }}>
                  {officer.name.charAt(officer.name.indexOf(' ') + 1)}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', marginBottom: '4px' }}>{officer.name}</h3>
                <span className="badge-gold" style={{ fontSize: '0.78rem', marginBottom: '16px', display: 'inline-block' }}>
                  {officer.title} • {officer.marathiTitle}
                </span>

                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.75', marginBottom: '16px' }}>
                  &ldquo;{officer.message}&rdquo;
                </p>

                <div style={{ padding: '12px', backgroundColor: '#f8fafc', borderRadius: '10px', fontSize: '0.85rem', color: '#16366f', fontWeight: 600 }}>
                  {officer.marathiMessage}
                </div>
              </div>
            ))}
          </div>

          {/* BOARD OF DIRECTORS GRID */}
          <div style={{ marginTop: '40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div className="badge-gold" style={{ marginBottom: '10px' }}>BOARD OF DIRECTORS (संचालक मंडळ)</div>
              <h2 style={{ fontSize: '2rem', color: 'var(--brand-blue)' }}>Governing Board Members</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {DIRECTORS_BOARD.map((director, idx) => (
                <div key={idx} className="card" style={{ padding: '24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '14px', backgroundColor: '#f8fafc' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#eef7f2', color: '#1b7a4b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.02rem', color: 'var(--brand-blue)', marginBottom: '2px', fontWeight: 700 }}>{director.name}</h4>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>{director.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
