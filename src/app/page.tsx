'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, ArrowRight, Star, Award } from 'lucide-react';
import { IMPACT_STATS } from '@/data/foundationData';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* HERO SECTION                                              */}
      {/* ======================================================== */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0e1f4d 0%, #122060 40%, #163570 70%, #1a4060 100%)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '520px',
        }}
      >
        {/* Decorative background dots grid (bottom-right) */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            opacity: 0.15,
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '10px',
          }}
        >
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#ffffff' }}
            />
          ))}
        </div>

        {/* Decorative circle accent (right center) */}
        <div
          style={{
            position: 'absolute',
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.06)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-100px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '650px',
            height: '650px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.04)',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative red dot */}
        <div
          style={{
            position: 'absolute',
            right: '260px',
            bottom: '90px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: '#d92b2b',
          }}
        />

        {/* Main Content */}
        <div
          className="hero-grid"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '60px 40px 50px 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '40px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* ---- LEFT COLUMN ---- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(27, 122, 75, 0.25)',
                  border: '1px solid rgba(27, 122, 75, 0.5)',
                  color: '#6ee7b7',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(110,231,183,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Award size={11} color="#6ee7b7" />
                </span>
                RAMDAS ATHAWALE YOUTH FOUNDATION
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '3rem',
                  lineHeight: '1.18',
                  color: '#ffffff',
                  marginBottom: '2px',
                }}
              >
                Serving With Care,
              </h1>
              <h1
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '3rem',
                  lineHeight: '1.18',
                  color: '#22c55e',
                }}
              >
                Dignity &amp; Humanity
              </h1>
              {/* Red underline accent */}
              <div
                style={{
                  width: '56px',
                  height: '4px',
                  backgroundColor: '#d92b2b',
                  borderRadius: '2px',
                  marginTop: '14px',
                }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '0.975rem',
                color: 'rgba(255,255,255,0.78)',
                lineHeight: '1.75',
                maxWidth: '480px',
              }}
            >
              Ramdas Athawale Youth Foundation is committed to uplifting lives
              through exemplary elderly care at{' '}
              <strong style={{ color: '#ffffff', fontWeight: 700 }}>
                Housai Vruddhashram
              </strong>
              , healthcare initiatives, social service outreach, youth sports, and
              skill employment generation.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                href="/donate"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#1b7a4b',
                  color: '#ffffff',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  padding: '13px 26px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#145c37';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#1b7a4b';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <Heart size={16} fill="#ffffff" />
                Donate Now
              </Link>

              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  padding: '13px 26px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.18)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <Users size={16} />
                Join With Us <ArrowRight size={15} />
              </Link>
            </div>

            {/* Supporting tagline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: 600,
                  letterSpacing: '0.3px',
                }}
              >
                Supporting Senior Care • Housai Vruddhashram
              </p>
            </div>
          </div>
          {/* ---- RIGHT COLUMN ---- */}
          <div
            className="hero-right"
            style={{
              position: 'relative',
              minHeight: '420px',
              width: '100%',
            }}
          >
            {/* Quote text — top-left of the right section */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                left: '0px',
                zIndex: 10,
              }}
            >
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.7rem',
                  lineHeight: '1.3',
                  color: '#ffffff',
                }}
              >
                &ldquo;Care Today.
              </p>
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.7rem',
                  lineHeight: '1.3',
                  color: '#22c55e',
                }}
              >
                Hope for Tomorrow.
              </p>
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#d92b2b',
                  borderRadius: '2px',
                  marginTop: '10px',
                }}
              />
            </div>

            {/* Large green decorative circle with gradient fade towards top */}
            <div
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-52%)',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'linear-gradient(to top, #145c37 0%, rgba(20, 92, 55, 0.45) 50%, rgba(20, 92, 55, 0.08) 90%, transparent 100%)',
                zIndex: 1,
              }}
            />

            {/* Decorative thin circle outline behind the main circle */}
            <div
              style={{
                position: 'absolute',
                right: '-110px',
                top: '50%',
                transform: 'translateY(-52%)',
                width: '460px',
                height: '460px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.07)',
                zIndex: 0,
              }}
            />

            {/* Photo: Top-Left — Lady (President) */}
            <div
              style={{
                position: 'absolute',
                top: '90px',
                left: '140px',
                width: '145px',
                height: '145px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #ffffff',
                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                zIndex: 10,
              }}
            >
              <Image
                src="/assets/figure_left.png"
                alt="President of India"
                width={145}
                height={145}
                style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
              />
            </div>

            {/* Photo: Top-Right — PM Modi */}
            <div
              style={{
                position: 'absolute',
                top: '80px',
                right: '90px',
                width: '145px',
                height: '145px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #ffffff',
                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                zIndex: 10,
              }}
            >
              <Image
                src="/assets/figure_right.png"
                alt="Prime Minister of India"
                width={145}
                height={145}
                style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
              />
            </div>

            {/* Photo: Center-Bottom — Ramdas Athawale (largest, in front) */}
            <div
              style={{
                position: 'absolute',
                bottom: '60px',
                left: '50%',
                transform: 'translateX(-30%)',
                width: '165px',
                height: '165px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #ffffff',
                boxShadow: '0 8px 28px rgba(0,0,0,0.45)',
                zIndex: 12,
              }}
            >
              <Image
                src="/assets/figure_center.png"
                alt="Ramdas Athawale"
                width={165}
                height={165}
                style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
              />
            </div>

            {/* HOUSAI CARE — red pill button, centered below photos */}
            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '50%',
                transform: 'translateX(-20%)',
                backgroundColor: '#d92b2b',
                color: '#ffffff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.82rem',
                padding: '9px 22px',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                letterSpacing: '0.6px',
                zIndex: 15,
                boxShadow: '0 4px 16px rgba(217,43,43,0.5)',
                whiteSpace: 'nowrap',
              }}
            >
              <Star size={13} fill="#ffffff" />
              HOUSAI CARE
            </div>

            {/* Decorative dot grid — bottom-right corner */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '7px',
                opacity: 0.25,
                zIndex: 2,
              }}
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#ffffff' }}
                />
              ))}
            </div>

            {/* Small red decorative dot on arc */}
            <div
              style={{
                position: 'absolute',
                right: '48px',
                bottom: '120px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#d92b2b',
                zIndex: 5,
                boxShadow: '0 0 10px rgba(217, 43, 43, 0.6)',
              }}
            />

            {/* Long concave mirrored green arc line */}
            <svg
              style={{
                position: 'absolute',
                right: '-40px',
                bottom: '-20px',
                zIndex: 3,
                opacity: 0.65,
                pointerEvents: 'none',
              }}
              width="450"
              height="350"
              viewBox="0 0 450 350"
              fill="none"
            >
              <path
                d="M 420 20 Q 180 320 0 160"
                stroke="#22c55e"
                strokeWidth="1.8"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* STATS STRIP                                               */}
      {/* ======================================================== */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          paddingTop: '36px',
          paddingBottom: '36px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
          }}
        >
          <div
            className="stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
          >
            {[
              { icon: '🏆', count: '17+', label: 'Years of Service (Est. 2007)' },
              { icon: '📁', count: '400+', label: 'Projects Across 25 States' },
              { icon: '🏠', count: '458', label: 'Homeless Houses Built' },
              { icon: '🚩', count: '2,000+', label: 'Villages & Slums Covered' },
            ].map((stat, idx, arr) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '16px 24px',
                  borderRight: idx < arr.length - 1 ? '1px solid #e2e8f0' : 'none',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '6px' }}>{stat.icon}</div>
                <div
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 800,
                    fontSize: '2.1rem',
                    color: '#16366f',
                    lineHeight: '1.1',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {stat.count}
                </div>
                <div
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.875rem',
                    color: '#64748b',
                    fontWeight: 600,
                    marginTop: '6px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ABOUT & MISSION SUMMARY                                   */}
      {/* ======================================================== */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Column: About Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#eef7f2',
                    border: '1px solid rgba(27, 122, 75, 0.3)',
                    color: '#1b7a4b',
                    borderRadius: '9999px',
                    padding: '6px 16px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Heart size={14} fill="#1b7a4b" color="#1b7a4b" />
                  ESTABLISHED 2007 • ALL INDIA CHARITABLE TRUST
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '2.2rem',
                  lineHeight: '1.25',
                  color: '#16366f',
                }}
              >
                Dedicated to Elderly Care, Health, Education &amp; ST Community Welfare
              </h2>

              <p
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: '1.75',
                }}
              >
                <strong style={{ color: '#0f172a', fontWeight: 700 }}>Khasdar Ramdasji Athawale Youth Foundation</strong> (Reg No: MH/323/F-17200/15) is a development organization operating over 400 projects across 2,000 remote villages &amp; urban slums in 25 states. Our primary flagship unit is <span style={{ color: '#1b7a4b', fontWeight: 700 }}>Housai Vruddhashram</span> in Sangli, providing free shelter, food, and nursing to homeless seniors.
              </p>

              {/* 2x2 Feature Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '8px' }}>
                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.4rem', lineHeight: '1' }}>👵👴</div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.92rem', color: '#16366f' }}>Housai Vruddhashram</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px', lineHeight: '1.4' }}>Free shelter, meals, 24/7 nursing for homeless seniors.</p>
                  </div>
                </div>

                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.4rem', lineHeight: '1' }}>🚫🍷</div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.92rem', color: '#16366f' }}>Yashanmukti Drives</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px', lineHeight: '1.4' }}>De-addiction rallies &amp; youth counseling campaigns.</p>
                  </div>
                </div>

                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.4rem', lineHeight: '1' }}>🩺🚑</div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.92rem', color: '#16366f' }}>Arogya &amp; Ambulance</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px', lineHeight: '1.4' }}>24/7 ambulance patient care &amp; medical financial aid.</p>
                  </div>
                </div>

                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.4rem', lineHeight: '1' }}>💼🧵</div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.92rem', color: '#16366f' }}>Rojgar Nirmiti &amp; ST Welfare</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px', lineHeight: '1.4' }}>Poverty alleviation &amp; education for ST children.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '8px' }}>
                <Link
                  href="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: '#1b7a4b',
                    textDecoration: 'none',
                  }}
                >
                  Learn More About Our Trust &amp; Governance <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Column: Registration Card */}
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '36px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 12px 36px rgba(22, 54, 111, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '5px 14px',
                    backgroundColor: '#fff3d6',
                    color: '#92400e',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    borderRadius: '9999px',
                    marginBottom: '16px',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  Official Registration
                </span>

                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.35rem',
                    color: '#16366f',
                    marginBottom: '20px',
                  }}
                >
                  Transparent &amp; Registered Public Trust
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: '#475569', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#eef7f2', color: '#1b7a4b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800', fontSize: '0.75rem', marginTop: '2px' }}>✓</div>
                    <div>
                      <strong style={{ color: '#0f172a', display: 'block' }}>Trust Reg No:</strong>
                      MH/323/F/17200/15 (Maharashtra Public Trust Act)
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#fff3d6', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800', fontSize: '0.75rem', marginTop: '2px' }}>★</div>
                    <div>
                      <strong style={{ color: '#0f172a', display: 'block' }}>80G Tax Exemption:</strong>
                      50% Income Tax rebate on all monetary donations under Section 80G.
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#16366f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800', fontSize: '0.75rem', marginTop: '2px' }}>ℹ</div>
                    <div>
                      <strong style={{ color: '#0f172a', display: 'block' }}>Headquarters:</strong>
                      Tasgaon &amp; Sangli, Maharashtra | Liaison Office: New Delhi
                    </div>
                  </div>
                </div>

                <Link
                  href="/donate"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#d92b2b',
                    color: '#ffffff',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    padding: '14px 24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(217, 43, 43, 0.3)',
                    textAlign: 'center',
                  }}
                >
                  <Heart size={16} fill="#ffffff" />
                  SUPPORT HOUSAI VRUDDHASHRAM
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CORE INITIATIVES GRID                                    */}
      {/* ======================================================== */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1b7a4b', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              OUR SOCIAL IMPACT
            </span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: '#16366f', marginBottom: '12px' }}>
              Key Initiatives &amp; Welfare Work
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6' }}>
              Explore how Ramdas Athawale Youth Foundation touches thousands of lives across Maharashtra through structured community projects.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* Card 1: Housai Vruddhashram */}
            <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#1b7a4b', color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(27, 122, 75, 0.3)' }}>
                  👵👴
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1b7a4b', backgroundColor: '#eef7f2', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                  70% Foundation Focus
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#16366f', marginTop: '12px', marginBottom: '8px' }}>
                  Housai Vruddhashram
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
                  Our flagship senior care facility providing homeless and destitute elderly citizens with comfortable rooms, nutritious meals, 24/7 nursing, and emotional dignity.
                </p>
              </div>
              <Link href="/vruddhashram" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1b7a4b', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                Explore Facility Details <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 2: Yashanmukti */}
            <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#16366f', color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(22, 54, 111, 0.3)' }}>
                  🚫🍷
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#16366f', backgroundColor: '#dbeafe', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                  Youth Welfare
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#16366f', marginTop: '12px', marginBottom: '8px' }}>
                  Yashanmukti Drives
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
                  Community de-addiction awareness rallies, youth counseling sessions, and rehabilitation support to eradicate substance abuse in Sangli &amp; Tasgaon.
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#16366f', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                View Awareness Drives <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 3: Free Healthcare */}
            <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#f3a812', color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(243, 168, 18, 0.3)' }}>
                  🩺💊
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#92400e', backgroundColor: '#fff3d6', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                  Rural Health
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#16366f', marginTop: '12px', marginBottom: '8px' }}>
                  Free Medical Camps
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
                  Organizing multi-specialty health checkups, free eye checkups &amp; cataract operations, and free medicine distribution for rural families.
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#b45309', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                Learn About Health Camps <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 4: Youth & Sports */}
            <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#4f46e5', color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}>
                  🏆⚽
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#3730a3', backgroundColor: '#e0e7ff', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                  Sports &amp; Talent
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#16366f', marginTop: '12px', marginBottom: '8px' }}>
                  Youth Sports Promotion
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
                  Distributing sports equipment to rural athletes, sponsoring athletic tournaments, and fostering physical fitness and teamwork among youth.
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4f46e5', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                See Sports Programs <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 5: Women Empowerment */}
            <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#e11d48', color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(225, 29, 72, 0.3)' }}>
                  👩‍💼🧵
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9f1239', backgroundColor: '#ffe4e6', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                  Livelihoods
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#16366f', marginTop: '12px', marginBottom: '8px' }}>
                  Women Empowerment
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
                  Skill development workshops, tailoring training, and micro-initiative guidance for rural women self-help groups to foster financial independence.
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e11d48', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                Explore Livelihood Projects <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 6: Cultural & Relief */}
            <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#d92b2b', color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(217, 43, 43, 0.3)' }}>
                  🎭🌊
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#991b1b', backgroundColor: '#fee2e2', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                  Disaster Relief
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#16366f', marginTop: '12px', marginBottom: '8px' }}>
                  Cultural &amp; Emergency Relief
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
                  Preserving Maharashtrian heritage and providing rapid relief kits (food packets, clean water, blankets) during floods and emergencies.
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#d92b2b', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                View Emergency Outreach <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CTA BANNER                                               */}
      {/* ======================================================== */}
      <section style={{ backgroundColor: '#16366f', color: '#ffffff', padding: '64px 0', borderTop: '4px solid #d92b2b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: '#ffffff', marginBottom: '16px' }}>
            Join Hands With Us to Make a Real Difference
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '640px', margin: '0 auto 28px auto', lineHeight: '1.6' }}>
            Whether by adopting a senior citizen at Housai Vruddhashram, sponsoring medical kits, or volunteering your time, your support transforms lives.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              href="/donate"
              style={{
                backgroundColor: '#1b7a4b',
                color: '#ffffff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '14px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(27, 122, 75, 0.4)',
              }}
            >
              DONATE &amp; SAVE TAX (80G)
            </Link>
            <Link
              href="/contact"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '14px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
              CONTACT HEAD OFFICE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

}
