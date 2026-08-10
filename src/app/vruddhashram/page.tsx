'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, CheckCircle2, Phone, Mail, MapPin, ShieldCheck, 
  Sparkles, Award, ExternalLink 
} from 'lucide-react';
import { FOUNDATION_INFO } from '@/data/foundationData';

export default function VruddhashramPage() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>FLAGSHIP INITIATIVE (70% WEIGHTAGE)</div>
          <h1 className="page-banner-title">Housai Vruddhashram Facility</h1>
          <p className="page-banner-subtitle">
            Providing homeless, helpless, and destitute senior citizens with a warm home, nourishing food, comprehensive healthcare, and full dignity.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / 
            <span>Housai Vruddhashram</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <div className="badge-green" style={{ marginBottom: '14px' }}>OUR MISSION OF CARING</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--brand-blue)', marginBottom: '20px' }}>
                Every Senior Deserves Love, Dignity & Safety
              </h2>
              <p style={{ color: '#4a5568', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '16px' }}>
                <strong>Housai Vruddhashram</strong>, located in Sangli, Maharashtra, is the core flagship initiative of the Ramdas Athawale Youth Foundation. It was established with a singular vision: no elderly person should be left abandoned, neglected, or without healthcare in their vulnerable years.
              </p>
              <p style={{ color: '#4a5568', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '24px' }}>
                Our facility currently supports over 120 resident elders with clean dormitory accommodation, 24/7 nursing care, doctor visits, hot nutritious meals, festival celebrations, and emotional companionship.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/donate" className="btn btn-gold">
                  <Heart size={18} fill="var(--bg-darker)" />
                  <span>Sponsor a Senior Citizen</span>
                </Link>
                <Link href="/contact" className="btn btn-outline-blue">
                  <Phone size={18} />
                  <span>Inquire Admission</span>
                </Link>
              </div>
            </div>

            <div>
              <div className="card priority-card" style={{ padding: '36px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--brand-blue)', marginBottom: '20px', borderBottom: '2px solid var(--gold-primary)', paddingBottom: '10px' }}>
                  Facility & Care Highlights
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--bg-normal-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#2d3748', fontSize: '0.96rem' }}><strong>100% Free Shelter & Food</strong> for destitute elders</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--bg-normal-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#2d3748', fontSize: '0.96rem' }}><strong>24/7 Medical Staff</strong> & On-Call Doctors</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--bg-normal-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#2d3748', fontSize: '0.96rem' }}><strong>Recreational Center</strong>, Yoga & Cultural Activities</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--bg-normal-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#2d3748', fontSize: '0.96rem' }}><strong>80G Tax Exemption</strong> for all donation sponsorships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
