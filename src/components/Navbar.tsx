'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/work', label: 'Our Work' },
    { href: '/vruddhashram', label: 'Housai Vruddhashram' },
    { href: '/team', label: 'Team' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  const isHomePage = pathname === '/';

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isHomePage
          ? 'bg-transparent pt-4 pb-2'
          : scrolled
          ? 'bg-[#16366f] shadow-lg pt-2 pb-2'
          : 'bg-[#16366f] pt-3 pb-2'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill Navbar */}
        <div
          className={`w-full rounded-full flex items-center justify-between px-4 sm:px-5 py-2.5 transition-all duration-300 ${
            isHomePage
              ? 'bg-white shadow-xl border border-slate-200/60'
              : 'bg-white/10 backdrop-blur-md border border-white/20'
          }`}
          style={{ minHeight: '60px' }}
        >
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-red-200 shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Ramdas Athawale Youth Foundation Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-extrabold text-[0.85rem] sm:text-[0.95rem] tracking-tight ${
                  isHomePage ? 'text-[#16366f]' : 'text-white'
                }`}
              >
                RAMDAS ATHAWALE
              </span>
              <span
                className={`font-bold text-[0.6rem] sm:text-[0.65rem] tracking-widest uppercase ${
                  isHomePage ? 'text-[#d92b2b]' : 'text-red-300'
                }`}
              >
                YOUTH FOUNDATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 mx-3">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-semibold text-[0.85rem] xl:text-[0.9rem] whitespace-nowrap transition-colors duration-200 py-1 ${
                    active
                      ? 'text-[#1b7a4b] font-bold'
                      : isHomePage
                      ? 'text-[#16366f] hover:text-[#1b7a4b]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#1b7a4b] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Donate CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/donate"
              className="bg-[#1b7a4b] hover:bg-[#145c37] text-white font-bold text-[0.78rem] sm:text-[0.84rem] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Heart className="w-3.5 h-3.5 fill-white text-white shrink-0" />
              <span>DONATE NOW</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isHomePage ? 'text-[#16366f] hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl p-4 border border-slate-200 shadow-xl flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                    active
                      ? 'bg-[#1b7a4b]/10 text-[#1b7a4b] font-bold'
                      : 'text-[#16366f] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#1b7a4b] hover:bg-[#145c37] text-white font-bold text-sm px-4 py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
