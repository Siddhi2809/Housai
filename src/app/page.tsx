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
              { icon: '🏆', count: '5+', label: 'Years of Dedicated Service' },
              { icon: '👴', count: '1,250+', label: 'Elderly Citizens Supported' },
              { icon: '🤝', count: '85+', label: 'Social Initiatives Completed' },
              { icon: '👥', count: '120+', label: 'Dedicated Volunteers & Staff' },
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
    </div>
  );
}
