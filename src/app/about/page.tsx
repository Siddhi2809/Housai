'use client';

import React from 'react';
import Link from 'next/link';
import { FOUNDATION_INFO, LEADERSHIP, DIRECTORS_BOARD } from '@/data/foundationData';
import { Award, ShieldCheck, Heart, Users, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>TRANSPARENT SOCIAL FOUNDATION</div>
          <h1 className="page-banner-title">About Our Foundation</h1>
          <p className="page-banner-subtitle">
            Ramdas Athawale Youth Foundation is dedicated to selfless social impact, senior citizen dignity, healthcare, and youth development.
          </p>
          <div className="breadcrumb">
            <Link href="/" className="text-[#f3a812] hover:underline">Home</Link>
            <span className="mx-1 text-white/50">/</span>
            <span className="text-white/70">About Us</span>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <div className="badge-green" style={{ marginBottom: '14px' }}>WHO WE ARE</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--brand-blue)', marginBottom: '20px' }}>
                Building a Compassionate &amp; Empowered Society
              </h2>
              <p style={{ color: '#4a5568', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '16px' }}>
                <strong>Ramdas Athawale Youth Foundation</strong> is a registered social welfare trust (Reg No: MAH/1048/2021/SANGLI) founded to address urgent community needs across Maharashtra and India.
              </p>
              <p style={{ color: '#4a5568', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '24px' }}>
                While our highest priority initiative (70%) is <strong>Housai Vruddhashram</strong>, dedicated to elderly dignity and old-age home care, the Foundation also champions drug-free campaigns (Yashanmukti), rural healthcare camps, youth athletic development, women employment, and cultural preservation.
              </p>

              <div style={{ padding: '20px', backgroundColor: '#f1f5f9', borderRadius: '14px', borderLeft: '4px solid #f3a812' }}>
                <h4 style={{ color: 'var(--brand-blue)', fontSize: '1.1rem', marginBottom: '8px' }}>Our Fundamental Principles</h4>
                <p style={{ color: '#555', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  Equality, Dignity for Seniors, Zero-Tolerance for Addiction, and Active Community Welfare.
                </p>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '36px', backgroundColor: '#ffffff' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--brand-blue)', marginBottom: '20px', borderBottom: '2px solid #f3a812', paddingBottom: '10px' }}>
                  Official Registration &amp; Tax Status
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <ShieldCheck size={24} style={{ color: '#1b7a4b', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#2d3748', fontSize: '0.98rem' }}>Registered Public Charitable Trust</strong>
                      <span style={{ color: '#64748b', fontSize: '0.88rem' }}>Reg No: MH/323/F/17200/15 (Maharashtra Public Trust Act)</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Award size={24} style={{ color: '#f3a812', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#2d3748', fontSize: '0.98rem' }}>Section 80G Tax Exemption</strong>
                      <span style={{ color: '#64748b', fontSize: '0.88rem' }}>50% Income Tax deduction for all Indian donors</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Users size={24} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#2d3748', fontSize: '0.98rem' }}>12A Registration</strong>
                      <span style={{ color: '#64748b', fontSize: '0.88rem' }}>Tax-exempt charitable organization status</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '30px' }}>
                  <Link href="/donate" className="btn btn-gold" style={{ width: '100%' }}>
                    <Heart size={16} />
                    <span>Support Our Work</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      {LEADERSHIP && LEADERSHIP.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="badge-green" style={{ marginBottom: '12px' }}>OUR LEADERSHIP</div>
              <h2 style={{ fontSize: '2rem', color: 'var(--brand-blue)' }}>Foundation Leadership</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
              {LEADERSHIP.map((member: { name: string; role: string; description?: string }, idx: number) => (
                <div key={idx} className="card" style={{ padding: '28px', textAlign: 'center' }}>
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #16366f, #1b7a4b)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#fff', fontWeight: '800', fontSize: '1.6rem' }}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-blue)', marginBottom: '4px' }}>{member.name}</h3>
                  <div style={{ fontSize: '0.82rem', color: '#1b7a4b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>{member.role}</div>
                  {member.description && (
                    <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>{member.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOARD OF DIRECTORS */}
      {DIRECTORS_BOARD && DIRECTORS_BOARD.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div className="badge-gold" style={{ marginBottom: '12px' }}>BOARD OF DIRECTORS</div>
              <h2 style={{ fontSize: '2rem', color: 'var(--brand-blue)' }}>Governing Board</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {DIRECTORS_BOARD.map((director: { name: string; role: string }, idx: number) => (
                <div key={idx} className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
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
      )}
    </div>
  );
}
