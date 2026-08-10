'use client';

import React from 'react';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS, IMPACT_STATS } from '@/data/foundationData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Home, Heart, Award } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>OVER 400+ PROJECTS ACROSS 25 STATES</div>
          <h1 className="page-banner-title">Social Impact &amp; Project Portfolio</h1>
          <p className="page-banner-subtitle">
            Highlighting key completed initiatives including 458 permanent houses for homeless families, 24/7 ambulance patient care, and Housai Vruddhashram elderly sanctuary.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Portfolio</span>
          </div>
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge-green" style={{ marginBottom: '10px' }}>REAL IMPACT (तुम्ही केलेली कामे)</div>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--brand-blue)' }}>Major Accomplishments &amp; Projects</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {PORTFOLIO_PROJECTS.map((proj) => (
              <div key={proj.id} className="card" style={{ padding: '32px', borderRadius: '18px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="badge-green" style={{ fontSize: '0.75rem' }}>{proj.category}</span>
                    <span className="badge-gold" style={{ fontSize: '0.75rem' }}>{proj.status}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-blue)', marginBottom: '12px', lineHeight: '1.35' }}>{proj.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '20px' }}>{proj.summary}</p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={15} style={{ color: 'var(--brand-red)' }} /> {proj.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#1b7a4b' }}>
                    <CheckCircle2 size={15} /> {proj.beneficiaries}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* HOUSING INITIATIVE HIGHLIGHT */}
          <div className="card" style={{ marginTop: '50px', padding: '36px', borderRadius: '20px', backgroundColor: '#ffffff', borderLeft: '6px solid #1b7a4b', boxShadow: '0 10px 30px rgba(22, 54, 111, 0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '12px' }}>KEY ACCOMPLISHMENT</span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--brand-blue)', marginBottom: '12px' }}>
                  458 Permanent Houses for Homeless Citizens
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Under our special housing drive in the Sangli district operation area, Khasdar Ramdasji Athawale Youth Foundation provided 458 homeless and destitute families with permanent fixed houses, giving them security, warmth, and long-term dignity.
                </p>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#eef7f2', borderRadius: '16px', textAlign: 'center', border: '1px solid #1b7a4b' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1b7a4b', fontFamily: 'Outfit, sans-serif' }}>458</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#16366f', marginTop: '4px' }}>Homeless Families Provided Permanent Homes</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
