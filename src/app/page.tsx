'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, ArrowRight, Star } from 'lucide-react';
import { IMPACT_STATS } from '@/data/foundationData';

const HERO_IMAGES = {
  leftFigure: '/assets/figure_left.png',
  rightFigure: '/assets/figure_right.png',
  centerFigure: '/assets/figure_center.png',
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* HERO SECTION — navy background, compact height            */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#16366f] border-b-4 border-[#d92b2b] flex items-center" style={{ minHeight: 'calc(100vh - 64px)', maxHeight: '720px', paddingTop: '32px', paddingBottom: '40px' }}>
        
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(27,122,75,0.2) 0%, transparent 70%)', transform: 'translate(20%, -20%)' }} />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(217,43,43,0.12) 0%, transparent 70%)', transform: 'translate(-20%, 20%)' }} />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* ——— LEFT COLUMN ——— */}
            <div className="flex flex-col gap-5 text-white">
              
              {/* Badge */}
              <div className="animate-fade-up inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full border border-[#1b7a4b] bg-[#1b7a4b]/15 text-sm font-bold text-white tracking-wide">
                <Heart className="w-4 h-4 fill-[#1b7a4b] text-[#1b7a4b] shrink-0" />
                RAMDAS ATHAWALE YOUTH FOUNDATION
              </div>

              {/* Heading */}
              <div className="animate-fade-up delay-100 space-y-1">
                <h1 className="font-extrabold tracking-tight leading-[1.12]" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.1rem, 4vw, 2.85rem)' }}>
                  Serving With Care,{' '}
                  <br />
                  <span className="text-[#1b7a4b]">Dignity &amp; Humanity</span>
                </h1>
                <div className="w-14 h-1 bg-[#d92b2b] rounded-full mt-3" />
              </div>

              {/* Description */}
              <p className="animate-fade-up delay-200 text-slate-200 leading-relaxed" style={{ fontSize: 'clamp(0.88rem, 1.5vw, 0.98rem)', maxWidth: '520px' }}>
                Ramdas Athawale Youth Foundation is committed to uplifting lives through exemplary elderly care at{' '}
                <strong className="text-white">Housai Vruddhashram</strong>, healthcare initiatives, social service outreach, youth sports, and skill employment generation.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-up delay-300 flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 bg-[#1b7a4b] hover:bg-[#145c37] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{ fontSize: '0.95rem' }}
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  Donate Now
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#16366f] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{ fontSize: '0.95rem' }}
                >
                  <Users className="w-4 h-4 text-[#16366f]" />
                  Join With Us
                  <ArrowRight className="w-4 h-4 text-[#16366f]" />
                </Link>
              </div>

              {/* Sub-label */}
              <div className="animate-fade-up delay-400 flex items-center gap-2 pt-2 border-t border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#1b7a4b] animate-pulse flex-shrink-0" />
                <span className="text-slate-200 font-semibold text-sm">Supporting Senior Care • Housai Vruddhashram</span>
              </div>
            </div>

            {/* ——— RIGHT COLUMN ——— */}
            <div className="flex flex-col items-center justify-center">
              
              {/* Slogan */}
              <div className="animate-fade-up text-center mb-6 px-4">
                <div className="inline-block relative">
                  <span className="absolute -left-4 -top-1 text-[#1b7a4b] text-2xl font-serif">"</span>
                  <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)' }}>
                    <span className="text-white">Care Today. </span>
                    <span className="text-[#1b7a4b]">Hope for Tomorrow.</span>
                  </h2>
                  <div className="w-24 h-[3px] bg-[#d92b2b] rounded-full mt-2 mx-auto" />
                </div>
              </div>

              {/* Portrait Composition */}
              <div className="animate-float relative" style={{ width: '420px', maxWidth: '100%', height: '340px' }}>
                
                {/* Orbit circle */}
                <div className="absolute inset-0 m-auto w-72 h-72 rounded-full border border-[#1b7a4b]/25 bg-gradient-to-br from-[#1b7a4b]/12 to-transparent pointer-events-none" />
                
                {/* Red orbit dot */}
                <div className="absolute bottom-8 right-8 w-3.5 h-3.5 rounded-full bg-[#d92b2b] border-2 border-white shadow pointer-events-none" />

                {/* Dot grid top-right */}
                <div className="absolute top-0 right-0 grid grid-cols-4 gap-1.5 opacity-25 pointer-events-none">
                  {Array.from({length: 16}).map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />)}
                </div>

                {/* Dot grid bottom-right */}
                <div className="absolute bottom-0 right-0 grid grid-cols-4 gap-1.5 opacity-25 pointer-events-none">
                  {Array.from({length: 16}).map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />)}
                </div>

                {/* Upper-left portrait */}
                <div className="absolute animate-scale-up delay-100 rounded-full border-[5px] border-white shadow-xl overflow-hidden z-10 hover:scale-105 transition-transform duration-300"
                  style={{ top: '8px', left: '20px', width: '130px', height: '130px' }}>
                  <Image src={HERO_IMAGES.leftFigure} alt="Hon. Smt. Droupadi Murmu" fill sizes="130px" className="object-cover" priority />
                </div>

                {/* Upper-right portrait */}
                <div className="absolute animate-scale-up delay-200 rounded-full border-[5px] border-white shadow-xl overflow-hidden z-10 hover:scale-105 transition-transform duration-300"
                  style={{ top: '8px', right: '20px', width: '130px', height: '130px' }}>
                  <Image src={HERO_IMAGES.rightFigure} alt="Hon. Shri Narendra Modi" fill sizes="130px" className="object-cover" priority />
                </div>

                {/* Center lower portrait (larger) */}
                <div className="absolute animate-scale-up delay-300 rounded-full border-[6px] border-white shadow-2xl overflow-hidden z-20 hover:scale-105 transition-transform duration-300"
                  style={{ bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: '170px', height: '170px' }}>
                  <Image src={HERO_IMAGES.centerFigure} alt="Hon. Shri Ramdas Athawale" fill sizes="170px" className="object-cover object-top" priority />
                </div>

                {/* HOUSAI CARE badge */}
                <div className="absolute animate-fade-up delay-400 z-30 bg-[#d92b2b] text-white text-[0.7rem] font-extrabold tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1.5 uppercase"
                  style={{ bottom: '-8px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
                  <Star className="w-3 h-3 fill-white text-white shrink-0" />
                  HOUSAI CARE
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* STATS STRIP                                               */}
      {/* ======================================================== */}
      <section className="w-full bg-white border-b border-slate-200 py-7">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center py-4 px-4 ${idx < IMPACT_STATS.length - 1 ? 'border-b md:border-b-0 md:border-r border-slate-200' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1b7a4b] tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {stat.prefix}{stat.count}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
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
