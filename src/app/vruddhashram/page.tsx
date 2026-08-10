'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, CheckCircle2, Phone, Mail, MapPin, ShieldCheck, 
  Sparkles, Award, ExternalLink 
} from 'lucide-react';
import { FOUNDATION_INFO, OFFICES } from '@/data/foundationData';

export default function VruddhashramPage() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="container">
          <div className="badge-gold" style={{ marginBottom: '12px' }}>FLAGSHIP INITIATIVE (प्रमुख घटक: वृद्धाश्रम)</div>
          <h1 className="page-banner-title">Housai Vruddhashram Facility, Sangli</h1>
          <p className="page-banner-subtitle">
            Housai Vruddhashram is our primary unit dedicated to providing homeless, destitute, and helpless senior citizens with dignified shelter, nutritious meals, nursing, and medical care.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Housai Vruddhashram</span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <div className="badge-green" style={{ marginBottom: '14px' }}>PRIMARY FOUNDATION UNIT</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--brand-blue)', marginBottom: '20px', lineHeight: '1.25' }}>
                Every Senior Citizen Deserves Dignity, Health &amp; Love
              </h2>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '16px' }}>
                <strong>Housai Vruddhashram</strong> is our flagship residential old age care facility located behind Sugar Factory, Shalini Nagar, Sangli. As highlighted by Founder President Sandeshbhao Bhandare and Chief Mentor Seematai Athawale, <strong>Vruddhashram care constitutes our foundation&apos;s primary social operation</strong>.
              </p>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '24px' }}>
                We provide round-the-clock free shelter, wholesome diet kitchens, emergency ambulance backup, medical checkups, and emotional companionship to senior citizens who have no family or financial support.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/donate" className="btn btn-gold" style={{ padding: '14px 24px', borderRadius: '12px' }}>
                  <Heart size={18} fill="#000000" />
                  <span>Sponsor a Senior (80G Tax Exemption)</span>
                </Link>
                <Link href="/contact" className="btn btn-outline-blue" style={{ padding: '14px 24px', borderRadius: '12px' }}>
                  <Phone size={18} />
                  <span>Inquire Admission / Call Helpline</span>
                </Link>
              </div>
            </div>

            <div>
              <div className="card priority-card" style={{ padding: '36px', borderRadius: '20px' }}>
                <div className="priority-ribbon">SANGLI FACILITY</div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--brand-blue)', marginBottom: '20px', borderBottom: '2px solid var(--gold-primary)', paddingBottom: '10px' }}>
                  Facility Highlights &amp; Services
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--bg-normal-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#334155', fontSize: '0.95rem' }}><strong>100% Free Food &amp; Shelter</strong> for destitute elderly citizens</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--bg-normal-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#334155', fontSize: '0.95rem' }}><strong>24/7 Ambulance Backup</strong> &amp; on-call doctors</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--bg-normal-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#334155', fontSize: '0.95rem' }}><strong>Recreational &amp; Cultural Center</strong>, daily morning yoga</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--bg-normal-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#334155', fontSize: '0.95rem' }}><strong>50% Income Tax Savings</strong> for all donor sponsors under Section 80G</span>
                  </li>
                </ul>

                <div style={{ marginTop: '28px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '0.86rem', color: '#475569' }}>
                  <strong>Address:</strong> Behind Sugar Factory, Shalini Nagar, Sangli, Maharashtra. <br />
                  <strong>Direct Helpline:</strong> 0233 3560136 / 9922943777
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
