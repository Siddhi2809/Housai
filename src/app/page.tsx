'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, ArrowRight, Star, Award, ShieldCheck, Activity, Briefcase } from 'lucide-react';
import { IMPACT_STATS } from '@/data/foundationData';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

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
                {t('hero.badge')}
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
                {t('hero.title1')}
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
                {t('hero.title2')}
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
              {t('hero.description')}
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
                {t('hero.donateBtn')}
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
                {t('hero.joinBtn')} <ArrowRight size={15} />
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
                {t('hero.tagline')}
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
              className="hero-quote"
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
                &ldquo;{t('hero.quote1')}
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
                {t('hero.quote2')}
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
              className="hero-circle-main"
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
              className="hero-circle-outline"
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
              className="hero-img-left"
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
              className="hero-img-right"
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
              className="hero-img-center"
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
              className="hero-pill-badge"
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
              {t('hero.careBadge')}
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
          borderBottom: '1px solid #e8eef0',
          paddingTop: '40px',
          paddingBottom: '40px',
          boxShadow: '0 4px 20px rgba(15, 76, 42, 0.04)',
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
              { icon: '🏆', count: '17+', label: t('stats.years'), accent: '#f3a812' },
              { icon: '📁', count: '400+', label: t('stats.projects'), accent: '#0F4C2A' },
              { icon: '🏠', count: '458', label: t('stats.houses'), accent: '#800020' },
              { icon: '🚩', count: '2,000+', label: t('stats.villages'), accent: '#0F4C2A' },
            ].map((stat, idx, arr) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '16px 24px',
                  borderRight: idx < arr.length - 1 ? '1px solid #e8eef0' : 'none',
                  transition: 'transform 0.25s ease',
                }}
              >
                <div style={{ fontSize: '2.1rem', marginBottom: '8px' }}>{stat.icon}</div>
                <div
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 900,
                    fontSize: '2.4rem',
                    color: '#0F4C2A',
                    lineHeight: '1.05',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.count}
                </div>
                <div
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.85rem',
                    color: '#64748b',
                    fontWeight: 600,
                    marginTop: '8px',
                    letterSpacing: '0.2px',
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
      <section style={{ backgroundColor: '#f8fafc', padding: '88px 0', borderTop: '1px solid #e8eef0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Column: About Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div>
                <span className="badge-green">
                  <Heart size={13} fill="#0F4C2A" color="#0F4C2A" />
                  {t('about.badge')}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '2.35rem',
                  lineHeight: '1.2',
                  color: '#0F4C2A',
                  letterSpacing: '-0.02em',
                }}
              >
                {t('about.title')}
              </h2>

              <p
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: '1.8',
                }}
              >
                {t('about.desc')}
              </p>

              {/* 2x2 Feature Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '6px' }}>
                <div style={{ padding: '18px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e8eef0', boxShadow: '0 2px 10px rgba(15, 76, 42, 0.04)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.94rem', color: '#0F4C2A' }}>{t('initiatives.v1')}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px', lineHeight: '1.45' }}>{t('initiatives.v1Desc')}</p>
                  </div>
                </div>

                <div style={{ padding: '18px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e8eef0', boxShadow: '0 2px 10px rgba(15, 76, 42, 0.04)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#fcf0f2', color: '#800020', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.94rem', color: '#800020' }}>{t('initiatives.v2')}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px', lineHeight: '1.45' }}>{t('initiatives.v2Desc')}</p>
                  </div>
                </div>

                <div style={{ padding: '18px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e8eef0', boxShadow: '0 2px 10px rgba(15, 76, 42, 0.04)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#fff8eb', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.94rem', color: '#0F4C2A' }}>{t('initiatives.v3')}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px', lineHeight: '1.45' }}>{t('initiatives.v3Desc')}</p>
                  </div>
                </div>

                <div style={{ padding: '18px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e8eef0', boxShadow: '0 2px 10px rgba(15, 76, 42, 0.04)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.94rem', color: '#0F4C2A' }}>{t('initiatives.v5')}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px', lineHeight: '1.45' }}>{t('initiatives.v5Desc')}</p>
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
                    fontSize: '0.94rem',
                    fontWeight: 800,
                    color: '#0F4C2A',
                    textDecoration: 'none',
                    letterSpacing: '0.2px',
                  }}
                >
                  {t('about.learnMore')} <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Column: Registration Card */}
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '38px',
                  border: '1.5px solid rgba(15, 76, 42, 0.15)',
                  boxShadow: '0 16px 36px rgba(15, 76, 42, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <span className="badge-gold">
                    Official Registration
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#800020', letterSpacing: '0.5px' }}>
                    Govt. Certified
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    color: '#0F4C2A',
                    marginBottom: '20px',
                    lineHeight: '1.25',
                  }}
                >
                  {t('about.cardTitle')}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: '#475569', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800', fontSize: '0.78rem', marginTop: '2px' }}>✓</div>
                    <div>
                      <strong style={{ color: '#0b1911', display: 'block' }}>{t('about.regNo')}</strong>
                      MH/323/F/17200/15 (Maharashtra Public Trust Act)
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#fff8eb', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800', fontSize: '0.78rem', marginTop: '2px' }}>★</div>
                    <div>
                      <strong style={{ color: '#0b1911', display: 'block' }}>{t('about.taxExempt')}</strong>
                      {t('about.taxDesc')}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#fcf0f2', color: '#800020', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800', fontSize: '0.78rem', marginTop: '2px' }}>ℹ</div>
                    <div>
                      <strong style={{ color: '#0b1911', display: 'block' }}>{t('about.headquarters')}</strong>
                      {t('about.headquartersVal')}
                    </div>
                  </div>
                </div>

                <Link
                  href="/donate"
                  className="btn btn-maroon"
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    padding: '14px',
                  }}
                >
                  <Heart size={16} fill="#ffffff" />
                  <span>Support Foundation Projects</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CORE INITIATIVES GRID                                    */}
      {/* ======================================================== */}
      <section style={{ backgroundColor: '#ffffff', padding: '88px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px auto' }}>
            <span className="badge-green" style={{ marginBottom: '12px' }}>
              {t('initiatives.tagline')}
            </span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2.35rem', color: '#0F4C2A', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              {t('initiatives.title')}
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: '1.7' }}>
              {t('initiatives.sub')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* Card 1: Housai Vruddhashram */}
            <div className="card" style={{ padding: '30px', borderTop: '4px solid #800020', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '54px', height: '54px', borderRadius: '14px', backgroundColor: '#fcf0f2', color: '#800020', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Heart size={26} fill="#800020" />
                </div>
                <span className="badge-maroon" style={{ fontSize: '0.72rem', marginBottom: '12px', display: 'inline-block' }}>
                  Primary Focus
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '10px' }}>
                  {t('initiatives.v1')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.65', marginBottom: '24px' }}>
                  {t('initiatives.v1Desc')}
                </p>
              </div>
              <Link href="/vruddhashram" style={{ fontSize: '0.88rem', fontWeight: 800, color: '#800020', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                Explore Facility Details <ArrowRight size={15} />
              </Link>
            </div>

            {/* Card 2: Yashanmukti */}
            <div className="card" style={{ padding: '30px', borderTop: '4px solid #0F4C2A', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '54px', height: '54px', borderRadius: '14px', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <ShieldCheck size={26} />
                </div>
                <span className="badge-green" style={{ fontSize: '0.72rem', marginBottom: '12px', display: 'inline-block' }}>
                  Youth Welfare
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '10px' }}>
                  {t('initiatives.v2')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.65', marginBottom: '24px' }}>
                  {t('initiatives.v2Desc')}
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F4C2A', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                View Awareness Drives <ArrowRight size={15} />
              </Link>
            </div>

            {/* Card 3: Free Healthcare */}
            <div className="card" style={{ padding: '30px', borderTop: '4px solid #f3a812', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '54px', height: '54px', borderRadius: '14px', backgroundColor: '#fff8eb', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Activity size={26} />
                </div>
                <span className="badge-gold" style={{ fontSize: '0.72rem', marginBottom: '12px', display: 'inline-block' }}>
                  Rural Health
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '10px' }}>
                  {t('initiatives.v3')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.65', marginBottom: '24px' }}>
                  {t('initiatives.v3Desc')}
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.88rem', fontWeight: 800, color: '#b45309', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                Learn About Health Camps <ArrowRight size={15} />
              </Link>
            </div>

            {/* Card 4: Youth & Sports */}
            <div className="card" style={{ padding: '30px', borderTop: '4px solid #0F4C2A', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '54px', height: '54px', borderRadius: '14px', backgroundColor: '#f0f7f3', color: '#0F4C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Award size={26} />
                </div>
                <span className="badge-green" style={{ fontSize: '0.72rem', marginBottom: '12px', display: 'inline-block' }}>
                  Sports &amp; Talent
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '10px' }}>
                  {t('initiatives.v4')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.65', marginBottom: '24px' }}>
                  {t('initiatives.v4Desc')}
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F4C2A', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                See Sports Programs <ArrowRight size={15} />
              </Link>
            </div>

            {/* Card 5: Women Empowerment */}
            <div className="card" style={{ padding: '30px', borderTop: '4px solid #800020', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '54px', height: '54px', borderRadius: '14px', backgroundColor: '#fcf0f2', color: '#800020', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Briefcase size={26} />
                </div>
                <span className="badge-maroon" style={{ fontSize: '0.72rem', marginBottom: '12px', display: 'inline-block' }}>
                  Livelihoods
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '10px' }}>
                  {t('initiatives.v5')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.65', marginBottom: '24px' }}>
                  {t('initiatives.v5Desc')}
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.88rem', fontWeight: 800, color: '#800020', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                Explore Livelihood Projects <ArrowRight size={15} />
              </Link>
            </div>

            {/* Card 6: Disaster Relief */}
            <div className="card" style={{ padding: '30px', borderTop: '4px solid #f3a812', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '54px', height: '54px', borderRadius: '14px', backgroundColor: '#fff8eb', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Users size={26} />
                </div>
                <span className="badge-gold" style={{ fontSize: '0.72rem', marginBottom: '12px', display: 'inline-block' }}>
                  Disaster Relief
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0F4C2A', marginBottom: '10px' }}>
                  {t('initiatives.v6')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.65', marginBottom: '24px' }}>
                  {t('initiatives.v6Desc')}
                </p>
              </div>
              <Link href="/work" style={{ fontSize: '0.88rem', fontWeight: 800, color: '#b45309', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                View Emergency Outreach <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* HOUSAI VRUDDHASHRAM FEATURED SECTION                      */}
      {/* ======================================================== */}
      <section
        style={{
          backgroundColor: '#f8fafc',
          padding: '92px 0',
          position: 'relative',
          borderTop: '1px solid #e8eef0',
          borderBottom: '1px solid #e8eef0',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '56px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Authentic Image with badge & decorative frame */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 44px rgba(15, 76, 42, 0.16)',
                  border: '2px solid rgba(15, 76, 42, 0.15)',
                  aspectRatio: '4 / 3',
                  backgroundColor: '#e2e8f0',
                }}
              >
                <Image
                  src="/assets/hero_elderly.png"
                  alt="Housai Vruddhashram Senior Citizens Care"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 56, 31, 0.75) 0%, rgba(10, 56, 31, 0.1) 60%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    color: '#ffffff',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      backgroundColor: '#800020',
                      color: '#ffffff',
                      padding: '5px 14px',
                      borderRadius: '9999px',
                      display: 'inline-block',
                      marginBottom: '8px',
                      border: '1px solid rgba(243, 168, 18, 0.4)',
                    }}
                  >
                    Flagship Facility • Sangli
                  </span>
                  <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.2rem', margin: 0, color: '#ffffff' }}>
                    Warm, Safe &amp; Peaceful Sanctuary
                  </h4>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-18px',
                  right: '-18px',
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '16px 22px',
                  boxShadow: '0 12px 30px rgba(128, 0, 32, 0.16)',
                  border: '1px solid rgba(128, 0, 32, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#fcf0f2',
                    color: '#800020',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Heart size={22} fill="#800020" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.15rem', color: '#800020', lineHeight: 1 }}>
                    100% Free
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, marginTop: '3px' }}>
                    Care &amp; Shelter
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Subtitle, Description, Features, CTA */}
            <div>
              {/* Pillar Category Badge */}
              <div style={{ marginBottom: '14px' }}>
                <span className="badge-green">
                  <ShieldCheck size={14} />
                  <span>Primary Foundation Focus</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '2.5rem',
                  color: '#0F4C2A',
                  marginBottom: '8px',
                  lineHeight: '1.18',
                  letterSpacing: '-0.02em',
                }}
              >
                Housai Vruddhashram
              </h2>
              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: '#800020',
                  marginBottom: '20px',
                }}
              >
                Care, Dignity &amp; A Home for Senior Citizens
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: '1.75',
                  marginBottom: '28px',
                }}
              >
                Housai Vruddhashram is a flagship initiative of the Ramdas Athawale Foundation dedicated to providing a safe, caring, respectful, and comfortable home for homeless, destitute, and vulnerable senior citizens. We ensure that every resident experiences true compassion, dignity, complete medical support, and a peaceful family environment in their golden years.
              </p>

              {/* 4 Feature Items */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                  marginBottom: '32px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '16px 18px',
                    borderRadius: '14px',
                    border: '1px solid #e8eef0',
                    boxShadow: '0 2px 8px rgba(15, 76, 42, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#f0f7f3',
                      color: '#0F4C2A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={20} />
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F4C2A', lineHeight: '1.3' }}>
                    Comfortable &amp; Safe Living
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '16px 18px',
                    borderRadius: '14px',
                    border: '1px solid #e8eef0',
                    boxShadow: '0 2px 8px rgba(15, 76, 42, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#fff8eb',
                      color: '#b45309',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Heart size={20} />
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b', lineHeight: '1.3' }}>
                    Nutritious Food &amp; Daily Care
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '16px 18px',
                    borderRadius: '14px',
                    border: '1px solid #e8eef0',
                    boxShadow: '0 2px 8px rgba(15, 76, 42, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#f0f7f3',
                      color: '#0F4C2A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Activity size={20} />
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F4C2A', lineHeight: '1.3' }}>
                    Health &amp; Medical Support
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '16px 18px',
                    borderRadius: '14px',
                    border: '1px solid #e8eef0',
                    boxShadow: '0 2px 8px rgba(15, 76, 42, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#fcf0f2',
                      color: '#800020',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Users size={20} />
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#800020', lineHeight: '1.3' }}>
                    Activities &amp; Companionship
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  href="/vruddhashram"
                  className="btn btn-dark-green"
                  style={{ padding: '14px 28px', borderRadius: '12px' }}
                >
                  <span>Know More</span>
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/donate"
                  className="btn btn-maroon"
                  style={{ padding: '14px 28px', borderRadius: '12px' }}
                >
                  <Heart size={16} fill="#ffffff" />
                  <span>Support Housai Vruddhashram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CTA BANNER                                               */}
      {/* ======================================================== */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A381F 0%, #0F4C2A 60%, #630019 100%)',
          color: '#ffffff',
          padding: '72px 0',
          borderTop: '4px solid #800020',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2.4rem', color: '#ffffff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            {t('cta.title')}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.88)', maxWidth: '640px', margin: '0 auto 30px auto', lineHeight: '1.7' }}>
            {t('cta.sub')}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              href="/donate"
              className="btn btn-maroon"
              style={{
                padding: '14px 32px',
                borderRadius: '12px',
                border: '1px solid rgba(243, 168, 18, 0.4)',
              }}
            >
              <Heart size={16} fill="#ffffff" />
              <span>{t('cta.donate')}</span>
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline-green"
              style={{
                padding: '14px 32px',
                borderRadius: '12px',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                color: '#ffffff',
              }}
            >
              <span>{t('cta.contact')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
