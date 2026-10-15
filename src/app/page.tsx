"use client";

import { useState } from "react";
import Link from "next/link";

/* ─────────────────────────── SHARED ATOMS ─────────────────────────── */

function Check({ color = "#3B82F6" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <polyline points="2,7 5,10 11,3" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionLabel({ dot, text }: { dot: string; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-3.5 py-1.5 mb-5">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: dot }}
      />
      <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">{text}</span>
    </div>
  );
}

function BlueBtn({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-[0.98] text-white font-semibold text-[15px] px-6 py-3 rounded-full shadow hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      {children}
    </a>
  );
}

/* ─────────────────────────── NAVBAR ─────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <div className="flex items-center gap-1.5">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none" className="group-hover:scale-110 transition-transform">
                <path d="M14 4L2 10L14 16L26 10Z" fill="#3B82F6" />
                <path d="M2 10V17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 13V19C8 19 10 22 14 22C18 22 20 19 20 19V13" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-extrabold"><span className="text-blue-500">Campus</span><span className="text-slate-800">Pe</span></span>
            </div>
            <span className="text-[9px] text-slate-400 tracking-wide ml-8">Connecting Students, Institutions &amp; Companies</span>
          </Link>
          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {["Colleges", "Employers", "Jobs", "Blogs"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-[15px] font-medium text-slate-600 hover:text-blue-500 transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-blue-500 rounded transition-all duration-200 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="#signin" className="text-[15px] font-medium text-slate-700 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-500 transition-colors">Sign In</Link>
            <Link href="#signup" className="text-[15px] font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-5 py-2.5 rounded-full shadow hover:shadow-md hover:-translate-y-px active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Sign Up</Link>
          </div>
          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
            {open
              ? <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>}
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-100 py-3 flex flex-col gap-1">
            {["Colleges", "Employers", "Jobs", "Blogs"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="px-3 py-2.5 text-[15px] font-medium text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" onClick={() => setOpen(false)}>{item}</Link>
            ))}
            <div className="mt-2 pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link href="#signin" className="px-3 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-blue-50 rounded-lg transition-colors" onClick={() => setOpen(false)}>Sign In</Link>
              <Link href="#signup" className="text-center text-[15px] font-semibold text-white bg-blue-500 hover:bg-blue-600 py-3 rounded-full transition-colors" onClick={() => setOpen(false)}>Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 md:py-20" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 0%,#dbeafe 0%,transparent 65%),#fff" }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(#3b82f6 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-4">
          {/* Left float card */}
          <div className="hidden lg:block w-52 flex-shrink-0 anim-float">
            <div className="bg-white border border-green-100 rounded-2xl shadow-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                <span className="text-[13px] font-bold text-green-500">WhatsApp Alert</span>
              </div>
              <p className="text-[13px] font-semibold text-slate-800 mb-1">Get notified on whatsapp</p>
              <p className="text-[11.5px] text-slate-400 leading-relaxed">You&apos;ll get all important updates on your whatsapp</p>
            </div>
          </div>
          {/* Center */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 shadow-md mb-6 sm:mb-8">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M12 11V7" /><circle cx="12" cy="5" r="2" /><circle cx="8" cy="16" r="1" fill="#3B82F6" stroke="none" /><circle cx="16" cy="16" r="1" fill="#3B82F6" stroke="none" /><path d="M9 19.5h6" /></svg>
              <span className="text-[13px] font-semibold text-slate-700">AI-Powered Campus Assistant</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Connect{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                10X Faster.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-500 max-w-md mx-auto leading-relaxed">One platform connecting students, colleges &amp; employers — faster.</p>
            {/* Bottom badge row */}
            <div className="mt-8 sm:mt-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 shadow-md px-3.5 py-2.5 hover:shadow-lg transition-shadow">
                <div className="flex -space-x-2">
                  {[["AK","#3B82F6"],["PK","#8B5CF6"],["SN","#10B981"]].map(([init,bg])=>(
                    <div key={init} style={{ background: bg }} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">{init}</div>
                  ))}
                </div>
                <div><p className="text-[13px] font-bold text-slate-800">🔥 142 students matched today</p><p className="text-[11px] text-slate-400">Just now • IIT, BITS, VIT</p></div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="#60A5FA" className="anim-twinkle"><path d="M9 0 L10.2 7.8 L18 9 L10.2 10.2 L9 18 L7.8 10.2 L0 9 L7.8 7.8 Z" /></svg>
                <span className="text-[17px] sm:text-[19px] font-bold text-blue-500 whitespace-nowrap">What are you looking for?</span>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="#60A5FA" className="anim-twinkle-alt"><path d="M9 0 L10.2 7.8 L18 9 L10.2 10.2 L9 18 L7.8 10.2 L0 9 L7.8 7.8 Z" /></svg>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 shadow-md px-3.5 py-2.5 hover:shadow-lg transition-shadow">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" fill="rgba(255,255,255,0.2)" /><line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" /><line x1="9" y1="21" x2="9" y2="9" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" /></svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-slate-800"><span className="text-blue-500">Radiant Info</span> shortlisted 8 interns</p>
                  <div className="flex items-center gap-1.5 mt-0.5"><span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" /><span className="text-[11px] text-slate-400">Verified recruiter • 2 days ago</span></div>
                </div>
              </div>
            </div>
          </div>
          {/* Right float card */}
          <div className="hidden lg:block w-52 flex-shrink-0 anim-float-slow">
            <div className="bg-white border border-purple-100 rounded-2xl shadow-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                <span className="text-[13px] font-bold text-amber-500">Resume Builder</span>
              </div>
              <p className="text-[13px] font-semibold text-slate-800 mb-1">Build Your Resume</p>
              <p className="text-[11.5px] text-slate-400 leading-relaxed">Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICE CARDS ─────────────────────────── */
function ServiceCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {/* College */}
        <div className="relative flex flex-col bg-white rounded-2xl border border-slate-200 shadow-md p-6 gap-4 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
          <div className="absolute bottom-0 right-0 w-36 h-36 rounded-tl-[2rem] pointer-events-none opacity-60 bg-gradient-to-tl from-amber-100 to-orange-50" />
          <div className="flex items-start justify-between relative">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M2 11l10-7 10 7"/></svg>
            </div>
            <span className="text-[11.5px] font-semibold px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-500">Coming Soon</span>
          </div>
          <div className="relative"><h3 className="text-[22px] font-extrabold text-slate-900 mb-1.5">College</h3><p className="text-[13.5px] text-slate-500">Explore colleges, courses, fees, placements &amp; more</p></div>
          <ul className="flex flex-col gap-2.5 relative">
            {["Search by course, location, fees","Connect directly with colleges","Improve student placements"].map(f=>(
              <li key={f} className="flex items-start gap-2.5"><span className="mt-0.5 flex-shrink-0"><Check /></span><span className="text-[13px] text-slate-600">{f}</span></li>
            ))}
          </ul>
          <button className="relative mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[14px] font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-[0.98] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 group">
            Join Waitlist
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </button>
        </div>
        {/* Job */}
        <div className="relative flex flex-col bg-white rounded-2xl border border-slate-200 shadow-md p-6 gap-4 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
          <div className="absolute bottom-0 right-0 w-36 h-36 rounded-tl-[2rem] pointer-events-none opacity-60 bg-gradient-to-tl from-blue-100 to-indigo-50" />
          <div className="flex items-start justify-between relative">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <span className="text-[11.5px] font-semibold px-3 py-1 rounded-full border border-green-200 bg-green-50 text-green-600">Available Now</span>
          </div>
          <div className="relative"><h3 className="text-[22px] font-extrabold text-slate-900 mb-1.5">I&apos;m Looking for a Job</h3><p className="text-[13.5px] text-slate-500">Upload your resume. We&apos;ll find jobs that fit you.</p></div>
          <ul className="flex flex-col gap-2.5 relative">
            {["Jobs from 1000+ sources","AI powered matching","WhatsApp & email alerts"].map(f=>(
              <li key={f} className="flex items-start gap-2.5"><span className="mt-0.5 flex-shrink-0"><Check /></span><span className="text-[13px] text-slate-600">{f}</span></li>
            ))}
          </ul>
          {/* Job illustration */}
          <div className="absolute bottom-14 right-3 opacity-75 pointer-events-none">
            <svg width="72" height="72" viewBox="0 0 80 80" fill="none"><rect x="6" y="10" width="48" height="58" rx="5" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/><rect x="13" y="20" width="34" height="4" rx="2" fill="#BFDBFE"/><rect x="13" y="28" width="28" height="3" rx="1.5" fill="#DBEAFE"/><rect x="13" y="34" width="22" height="3" rx="1.5" fill="#DBEAFE"/><circle cx="58" cy="57" r="15" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2"/><circle cx="55" cy="54" r="7" fill="none" stroke="#3B82F6" strokeWidth="2.5"/><line x1="60" y1="59" x2="68" y2="67" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          <button className="relative mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[14px] font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-[0.98] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 group">
            Explore Jobs
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
        {/* Hiring */}
        <div className="relative flex flex-col bg-white rounded-2xl border border-slate-200 shadow-md p-6 gap-4 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
          <div className="absolute bottom-0 right-0 w-36 h-36 rounded-tl-[2rem] pointer-events-none opacity-60 bg-gradient-to-tl from-blue-50 to-slate-100" />
          <div className="flex items-start justify-between relative">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span className="text-[11.5px] font-semibold px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-500">Coming Soon</span>
          </div>
          <div className="relative"><h3 className="text-[22px] font-extrabold text-slate-900 mb-1.5">I&apos;m Hiring</h3><p className="text-[13.5px] text-slate-500">Connect with colleges and find candidates — from students to graduates.</p></div>
          <ul className="flex flex-col gap-2.5 relative">
            {["Connect directly with colleges","Find the right candidates","Simplify your hiring"].map(f=>(
              <li key={f} className="flex items-start gap-2.5"><span className="mt-0.5 flex-shrink-0"><Check /></span><span className="text-[13px] text-slate-600">{f}</span></li>
            ))}
          </ul>
          {/* Hiring illustration */}
          <div className="absolute bottom-14 right-3 opacity-75 pointer-events-none">
            <svg width="66" height="66" viewBox="0 0 72 72" fill="none"><rect x="6" y="10" width="56" height="48" rx="6" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/><rect x="6" y="10" width="56" height="14" rx="6" fill="#DBEAFE"/><circle cx="16" cy="17" r="3" fill="#93C5FD"/><circle cx="24" cy="17" r="3" fill="#BFDBFE"/><circle cx="32" cy="17" r="3" fill="#DBEAFE"/><path d="M20 34L14 40L20 46" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M50 34L56 40L50 46" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M38 30L30 50" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <button className="relative mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[14px] font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-[0.98] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 group">
            Join Waitlist
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STATS ─────────────────────────── */
function StatsBar() {
  return (
    <section className="border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-100">
          {[
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, bg: "bg-purple-100", value: "800+", label: "Students" },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M2 11l10-7 10 7"/></svg>, bg: "bg-blue-100", value: "130+", label: "colleges" },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, bg: "bg-green-100", value: "100+", label: "jobs & internships" },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10" strokeWidth="2"/></svg>, bg: "bg-orange-100", value: "100%", label: "Safe & Trusted" },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-4 md:px-8 group cursor-default">
              <div className={`w-12 h-12 rounded-full ${s.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>{s.icon}</div>
              <div><p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">{s.value}</p><p className="text-[13px] text-slate-500 mt-0.5">{s.label}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PARTNERS ─────────────────────────── */
function Partners() {
  const logos = [
    { name: "GINSERV", color: "#2563EB", sub: "Nurturing Ventures" },
    { name: "STARTUP\nKARNATAKA", color: "#EA580C", sub: null },
    { name: "🏛", color: "#92400E", sub: null },
    { name: "TALENTSPOTIFY", color: "#1e293b", sub: null },
    { name: "RADIANT\nInfo", color: "#DC2626", sub: null },
    { name: "D\n#s", color: "#1e293b", sub: null },
  ];
  return (
    <section className="border-t border-slate-100 bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[13px] text-slate-400 font-medium mb-8">Trusted by partners across India</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((l) => (
            <div key={l.name} className="flex flex-col items-center gap-0.5 opacity-70 hover:opacity-100 transition-opacity cursor-default group">
              <span
                className="font-extrabold text-[15px] leading-tight text-center whitespace-pre-line tracking-tight group-hover:scale-105 transition-transform"
                style={{ color: l.color }}
              >
                {l.name}
              </span>
              {l.sub && <span className="text-[10px] text-slate-400">{l.sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── OPPORTUNITY DISCOVERY ─────────────────────────── */
function OpportunityDiscovery() {
  const [activeTab, setActiveTab] = useState("All");

  const steps = [
    { num: "01", title: "Set your preferences", desc: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.", tag: "Smart Profile", tagColor: "text-blue-500 bg-blue-50 border-blue-100" },
    { num: "02", title: "Discover relevant opportunities", desc: "Explore colleges and career opportunities matched to your profile, interests and goals", tag: "AI Ranked", tagColor: "text-blue-500 bg-blue-50 border-blue-100" },
    { num: "03", title: "Get notified when something fits", desc: "Get notified when a relevant college or new opportunity is found, so you can act early.", tag: "Instant Alerts", tagColor: "text-green-600 bg-green-50 border-green-100" },
  ];

  const allFeedItems = [
    { type: "Colleges", logo: "IIM", logoBg: "#C8102E", name: "IIM Bangalore", tag: "Top College", tagColor: "text-blue-500 bg-blue-50", meta: "🎓 MBA  📍 Bengaluru  ₹ 3L+", desc: "India's premier management institute with global exposure...", cta: "View Details", ctaBg: "border border-blue-200 text-blue-600 hover:bg-blue-50" },
    { type: "Internships", logo: "G", logoBg: "#4285F4", name: "Product Intern", tag: "Internship", tagColor: "text-blue-500 bg-blue-50", meta: "📍 Bengaluru  💻 Hybrid  ₹ 35K/mo", desc: "Work on real products, learn from top engineers and build...", cta: "Apply Now", ctaBg: "bg-blue-500 text-white hover:bg-blue-600" },
    { type: "Freelance", logo: "N", logoBg: "#1a1a1a", name: "Marketing Gig", tag: "Freelance", tagColor: "text-purple-600 bg-purple-50", meta: "🏠 Remote  💼 Freelance  ₹ 10K - ₹ 25K", desc: "Create content and help with social media campaigns for...", cta: "View Details", ctaBg: "border border-blue-200 text-blue-600 hover:bg-blue-50" },
    { type: "Jobs", logo: "M", logoBg: "#0ea5e9", name: "Associate Software Engineer", tag: "Full-Time", tagColor: "text-green-600 bg-green-50", meta: "📍 Hyderabad  🏢 On-site  ₹ 8-12 LPA", desc: "Frontend & backend development for high-scale enterprise systems...", cta: "Apply Now", ctaBg: "bg-blue-500 text-white hover:bg-blue-600" },
  ];

  const filteredFeed = activeTab === "All" ? allFeedItems.slice(0, 3) : allFeedItems.filter(item => item.type === activeTab || (activeTab === "Jobs" && item.tag === "Full-Time"));
  const displayFeed = filteredFeed.length > 0 ? filteredFeed : allFeedItems.slice(0, 2);

  return (
    <section className="py-14 md:py-20" style={{ background: "linear-gradient(135deg,#f8faff 0%,#f0f7ff 50%,#f8faff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <SectionLabel dot="#3B82F6" text="01 • Opportunity Discovery" />
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 leading-tight mb-4">
              Stop searching.<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Start getting matched.</span>
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-8 max-w-sm">Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p>
            <div className="flex flex-col gap-3 mb-8">
              {steps.map(s => (
                <div key={s.num} className="flex items-start gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4 hover:shadow-md hover:border-blue-100 transition-all duration-200">
                  <span className="text-[11px] font-bold text-slate-300 mt-0.5 flex-shrink-0 w-5">{s.num}</span>
                  <div className="flex-1">
                    <p className="text-[14px] font-bold text-slate-900">{s.title}</p>
                    <p className="text-[12.5px] text-slate-500 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${s.tagColor}`}>{s.tag}</span>
                </div>
              ))}
            </div>
            <BlueBtn>Explore opportunities →</BlueBtn>
          </div>
          {/* Right — feed card */}
          <div>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-6">
              {/* Feed header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-slate-900">CampusPe Opportunity Feed</p>
                    <p className="text-[12px] text-slate-400">Colleges &amp; opportunities matched to you</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[11px] text-green-600 font-semibold">12 new matches today</span>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-none">
                {["All","Colleges","Jobs","Internships","Freelance","Part-time"].map((t)=>(
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`text-[12px] font-semibold px-3 py-1.5 rounded-full flex-shrink-0 transition-all duration-150 ${activeTab === t ? "bg-blue-500 text-white shadow-sm" : "text-slate-500 bg-slate-100 hover:bg-slate-200 hover:text-slate-800"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {/* Feed items */}
              <div className="flex flex-col gap-3">
                {displayFeed.map(item=>(
                  <div key={item.name} className="border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200 bg-white group">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 shadow-sm" style={{ background: item.logoBg }}>{item.logo}</div>
                        <div>
                          <span className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</span>
                          <span className={`ml-2 text-[11px] font-semibold px-2 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                        </div>
                      </div>
                      <button className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg flex-shrink-0 transition-all active:scale-95 ${item.ctaBg}`}>{item.cta}</button>
                    </div>
                    <p className="text-[11.5px] text-slate-400 ml-11 mb-1">{item.meta}</p>
                    <p className="text-[12.5px] text-slate-500 ml-11">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                <a href="#jobs" className="text-[13px] font-semibold text-blue-500 hover:text-blue-600 transition-colors">View all matched opportunities →</a>
                <span className="text-[11px] text-slate-400">Curated for you • Updated daily</span>
              </div>
            </div>
            {/* Handwritten note */}
            <p className="mt-4 text-[14px] text-indigo-500 pl-6" style={{ fontFamily: "cursive" }}>
              ↙ A mix of colleges, jobs,<br />internships and gigs — all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── RESUME UPLOAD ─────────────────────────── */
function ResumeUpload() {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  return (
    <section className="py-14 md:py-20 bg-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%,#ede9fe 0%,transparent 60%),#f8faff" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 border border-slate-200 rounded-full px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm shadow-sm">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-[13px] font-semibold text-slate-700">TRY IT LIVE</span>
          <span className="text-[12px] text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full font-medium">v2.4 AI Engine</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[50px] font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
          Upload your resume.<br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Find jobs that fit.</span>
        </h2>
        <p className="text-[15px] text-slate-500 max-w-lg mx-auto mb-10 leading-relaxed">Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p>

        {/* Upload card */}
        <div className="relative max-w-xl mx-auto">
          {/* 98% match badge */}
          <div className="absolute -left-2 sm:-left-6 top-4 z-10 bg-white border border-slate-200 rounded-xl shadow-lg px-3 py-2 flex items-center gap-2.5 anim-float">
            <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">⚡</div>
            <div className="text-left">
              <p className="text-[12px] font-bold text-slate-800 leading-none">98% Match Rate</p>
              <p className="text-[10px] text-slate-400 mt-0.5">AI semantic rank</p>
            </div>
          </div>
          {/* ATS compliant badge */}
          <div className="absolute -right-2 sm:-right-6 bottom-12 z-10 bg-white border border-slate-200 rounded-xl shadow-lg px-3 py-2 flex items-center gap-2.5 anim-float-slow">
            <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 text-xs font-bold">🔒</div>
            <div className="text-left">
              <p className="text-[12px] font-bold text-slate-800 leading-none">ATS Compliant</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Standardized parser</p>
            </div>
          </div>
          {/* Main upload box */}
          <label
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                setUploadedFile(e.dataTransfer.files[0].name);
              }
            }}
            className={`block bg-white rounded-3xl border-2 border-dashed ${isDragging ? "border-blue-500 bg-blue-50/50" : "border-blue-200 hover:border-blue-400"} shadow-xl px-8 py-10 transition-all duration-200 cursor-pointer group`}
          >
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
            <h3 className="text-[22px] font-bold text-slate-900 mb-2">Upload your resume</h3>
            <p className="text-[13px] text-slate-400 mb-6">PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.</p>
            
            <span className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-[15px] px-8 py-3 rounded-full shadow hover:shadow-md transition-all duration-200 mb-4 cursor-pointer">
              {uploadedFile ? "Replace resume ↑" : "Upload resume ↑"}
            </span>

            {uploadedFile ? (
              <p className="text-[13px] text-green-600 font-semibold mb-3 flex items-center justify-center gap-1.5">
                <Check color="#16a34a" /> {uploadedFile} selected
              </p>
            ) : (
              <p className="text-[12px] text-slate-400 mb-3">or drag and drop your file here</p>
            )}

            <div className="flex items-center justify-center gap-2">
              {["PDF","DOC","DOCX"].map(t=>(
                <span key={t} className="text-[11px] font-semibold border border-slate-200 rounded-full px-2.5 py-1 text-slate-500 group-hover:border-slate-300">{t}</span>
              ))}
            </div>
          </label>
        </div>

        {/* Feature chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
          {[
            { label: "Resume analyzed", sub: "Ready in 4s", subColor: "text-green-500", icon: "#10B981" },
            { label: "Skills matched", sub: "Deep taxonomy", subColor: "text-blue-500", icon: "#3B82F6" },
            { label: "Experience matched", sub: "Contextual seniority", subColor: "text-purple-500", icon: "#8B5CF6" },
            { label: "1,000+ sources searched", sub: "Real-time aggregators", subColor: "text-blue-500", icon: "#3B82F6" },
          ].map(c=>(
            <div key={c.label} className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-left hover:shadow-md hover:border-blue-100 transition-all duration-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: c.icon + "20" }}>
                  <svg width="10" height="10" viewBox="0 0 13 13" fill="none"><polyline points="2,7 5,10 11,3" stroke={c.icon} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-[13px] font-semibold text-slate-800">{c.label}</span>
              </div>
              <p className={`text-[11px] font-medium ${c.subColor} ml-7`}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOR COLLEGES ─────────────────────────── */
function ForColleges() {
  const rows = [
    {
      num: "01", label: "VERIFIED PROFILE", title: "Build your college profile",
      desc: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
      chips: [
        { text: "✓ NAAC A++ Ready", style: "border border-green-300 text-green-700 bg-white" },
        { text: "98% Match", style: "bg-blue-500 text-white" },
      ]
    },
    {
      num: "02", label: "DIRECT ENROLL", title: "Students discover and connect",
      desc: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
      chips: [
        { text: "📋 Direct Enquiries", style: "border border-slate-200 text-slate-600 bg-white" },
        { text: "● WHATSAPP / CHAT", style: "border border-green-200 text-green-600 bg-white" },
        { text: "Avg. response <15 min", style: "text-slate-400 text-[10px]" },
      ]
    },
    {
      num: "03", label: "CAMPUS RECRUITING", title: "Recruiters discover your College",
      desc: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
      chips: [
        { text: "📋 500+ Hiring Partners", style: "border border-slate-200 text-slate-600 bg-white" },
        { text: "🔗 Connect Directly", style: "border border-slate-200 text-slate-600 bg-white" },
      ]
    },
    {
      num: "04", label: "LIVE HUD", title: "Track placements in real time",
      desc: "Track students, interviews, offers and placements from one centralized dashboard.",
      chips: [
        { text: "● LIVE PLACEMENTS", style: "border border-red-200 text-red-500 bg-white" },
        { text: "Students · Interviews · Offers", style: "bg-blue-500 text-white" },
      ]
    },
  ];
  return (
    <section id="colleges" className="py-14 md:py-20" style={{ background: "linear-gradient(135deg,#f0f7ff 0%,#f8faff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <SectionLabel dot="#3B82F6" text="02 • For Colleges" />
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 leading-tight mb-5">
              Get Discovered<br />by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Students and<br />Recruiters.</span>
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-8 max-w-sm">Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.</p>
            <BlueBtn>List Your College →</BlueBtn>
          </div>
          {/* Right */}
          <div className="flex flex-col gap-3">
            {rows.map(r=>(
              <div key={r.num} className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-blue-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-slate-300">{r.num}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-widest">{r.label}</span>
                    </div>
                    <h3 className="text-[16px] font-bold text-slate-900 mb-1.5">{r.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{r.desc}</p>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-shrink-0">
                    {r.chips.map(c=>(
                      <span key={c.text} className={`text-[11px] font-semibold px-2.5 py-1.5 rounded-lg ${c.style}`}>{c.text}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOR EMPLOYERS ─────────────────────────── */
function ForEmployers() {
  const rows = [
    {
      num: "01", title: "Post a role in minutes", badge: "INSTANT SETUP",
      desc: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
      chips: [
        { text: "⚡ 5 Min Deployment", style: "bg-green-500 text-white" },
        { text: "500+ Campus Network", style: "border border-slate-200 text-slate-500 bg-white" },
      ]
    },
    {
      num: "02", title: "Receive a matched shortlist", badge: "INSTANT SETUP",
      desc: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
      chips: [
        { text: "⊘ Zero CV Clutter", style: "border border-slate-200 text-slate-600 bg-white" },
        { text: "Tier 1–Tier 3 Parity", style: "border border-slate-200 text-slate-500 bg-white" },
      ]
    },
    {
      num: "03", title: "Connect with candidates directly", badge: "INSTANT SETUP",
      desc: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
      chips: [
        { text: "📅 In-App Scheduling", style: "border border-blue-200 text-blue-600 bg-white" },
        { text: "1-Click Video / Chat", style: "border border-slate-200 text-slate-500 bg-white" },
      ]
    },
    {
      num: "04", title: "Reduce your time-to-hire", badge: "INSTANT SETUP",
      desc: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
      chips: [
        { text: "<2 DAYS", style: "bg-blue-500 text-white" },
        { text: "57% Faster Hiring", style: "bg-green-100 text-green-700 border border-green-200" },
      ]
    },
  ];
  return (
    <section id="employers" className="py-14 md:py-20 bg-white" style={{ background: "linear-gradient(135deg,#f8faff 0%,#f0f7ff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <SectionLabel dot="#3B82F6" text="03 • For Employers" />
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 leading-tight mb-5">
              Stop running<br />campus drives.<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Start hiring the right<br />people.</span>
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-8 max-w-sm">Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.</p>
            <BlueBtn>Post a Job →</BlueBtn>
          </div>
          {/* Right */}
          <div className="flex flex-col gap-3">
            {rows.map(r=>(
              <div key={r.num} className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-blue-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-slate-300">{r.num}</span>
                      <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full tracking-wide">{r.badge}</span>
                    </div>
                    <h3 className="text-[16px] font-bold text-slate-900 mb-1.5">{r.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{r.desc}</p>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-shrink-0">
                    {r.chips.map(c=>(
                      <span key={c.text} className={`text-[11px] font-semibold px-2.5 py-1.5 rounded-lg ${c.style}`}>{c.text}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── APP INTERFACE SHOWCASE ─────────────────────────── */
function AppInterfaceShowcase() {
  const [activeSlide, setActiveSlide] = useState(2); // Center slide index

  const screens = [
    {
      title: "Student Feed",
      type: "Student",
      content: (
        <div className="p-3 text-left">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[10px] text-slate-400">Hi, Amit Kumar</p>
              <p className="text-[11px] font-bold text-slate-800">Discover</p>
            </div>
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[9px] text-blue-600 font-bold">🔔</div>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-2.5 text-white mb-2 shadow-sm">
            <p className="text-[10px] font-bold">See how you can find a job quickly!</p>
            <span className="inline-block mt-1 text-[8px] bg-white text-blue-600 font-bold px-2 py-0.5 rounded-full">Read more</span>
          </div>
          <p className="text-[10px] font-bold text-slate-700 mb-1.5">Recommended Jobs</p>
          <div className="border border-slate-100 rounded-lg p-2 bg-slate-50/50">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[7px] font-bold">G</span>
              <div>
                <p className="text-[9px] font-bold text-slate-800">Software Engineer</p>
                <p className="text-[7.5px] text-slate-400">Google Inc · Bangalore</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-100">
              <span className="text-[8px] text-blue-600 font-semibold">₹ 6-8 LPA</span>
              <span className="text-[7.5px] bg-blue-500 text-white px-2 py-0.5 rounded font-bold">Apply Now</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Post a Job",
      type: "Recruiter",
      content: (
        <div className="p-3 text-left">
          <div className="bg-blue-500 -mx-3 -mt-3 p-2 text-white mb-2 rounded-t-2xl">
            <p className="text-[10px] font-bold text-center">Post a Job</p>
          </div>
          <p className="text-[10px] font-bold text-slate-800 mb-1">Hot Vacancy</p>
          <p className="text-[8px] text-slate-400 mb-2">Post job to hire best talent for your company</p>
          <div className="space-y-1.5">
            <div>
              <p className="text-[8px] font-semibold text-slate-500">Job Title*</p>
              <div className="h-5 rounded border border-slate-200 bg-slate-50 px-1.5 text-[8px] flex items-center text-slate-400">Software Engineer</div>
            </div>
            <div>
              <p className="text-[8px] font-semibold text-slate-500">Job Type*</p>
              <div className="h-5 rounded border border-slate-200 bg-white px-1.5 text-[8px] flex items-center justify-between text-slate-600">Full-Time <span>▾</span></div>
            </div>
            <div>
              <p className="text-[8px] font-semibold text-slate-500">Work Mode*</p>
              <div className="h-5 rounded border border-slate-200 bg-white px-1.5 text-[8px] flex items-center justify-between text-slate-600">Hybrid <span>▾</span></div>
            </div>
            <div className="pt-1">
              <span className="block text-center text-[8.5px] font-bold bg-blue-500 text-white py-1 rounded-md shadow-sm">Post Opportunity</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Hero Main Feed",
      type: "Primary",
      content: (
        <div className="p-3 text-left">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[10px] text-slate-400">Hi, Amit Kumar</p>
              <p className="text-[12px] font-bold text-slate-900">Discover</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[9px]">🔔</span>
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-bold">AK</span>
            </div>
          </div>
          <div className="flex gap-1.5 mb-2.5">
            <span className="text-[8px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500 text-white">Colleges</span>
            <span className="text-[8px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">Job/Internship</span>
          </div>
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl p-2.5 mb-2.5 shadow-sm">
            <p className="text-[9px] font-bold text-amber-400">XYZ University</p>
            <p className="text-[7.5px] text-slate-300 mt-0.5 line-clamp-2">The best education you can get is investing in yourself.</p>
            <span className="inline-block mt-1.5 text-[7.5px] bg-blue-500 text-white px-2 py-0.5 rounded font-bold">Explore</span>
          </div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[9.5px] font-bold text-slate-800">Top Courses</p>
            <span className="text-[8px] text-blue-500 font-semibold">View all</span>
          </div>
          <div className="flex justify-between gap-1 mb-2.5">
            {["B.Tech", "Arts", "MBBS", "B.Com", "M.Com"].map(c=>(
              <div key={c} className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[8px] text-blue-600 border border-blue-100">🎓</div>
                <span className="text-[7px] text-slate-600 mt-0.5 font-medium">{c}</span>
              </div>
            ))}
          </div>
          <p className="text-[9.5px] font-bold text-slate-800 mb-1">Trending Colleges</p>
          <div className="border border-slate-100 rounded-lg p-2 bg-slate-50/60">
            <p className="text-[9px] font-bold text-slate-800">Victory College</p>
            <p className="text-[7px] text-slate-400">📍 B.Tech Mecha.. · 4 years</p>
            <span className="inline-block mt-1 text-[7.5px] bg-blue-500 text-white px-2.5 py-0.5 rounded font-bold">Apply Now</span>
          </div>
        </div>
      )
    },
    {
      title: "My Applications",
      type: "Tracker",
      content: (
        <div className="p-3 text-left">
          <div className="bg-blue-500 -mx-3 -mt-3 p-2 text-white mb-2 rounded-t-2xl">
            <p className="text-[10px] font-bold text-center">My Application</p>
          </div>
          <div className="flex gap-1 mb-2">
            <span className="text-[7.5px] font-bold px-2 py-0.5 rounded bg-blue-500 text-white">Applied(5)</span>
            <span className="text-[7.5px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-500">Shortlisted(2)</span>
            <span className="text-[7.5px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-500">Rejected(1)</span>
          </div>
          <div className="space-y-1.5">
            {[
              { role: "Software Engineer", comp: "Google Inc", match: "95% Match" },
              { role: "Full Stack Web Dev", comp: "Flip · Mumbai", match: "91% Match" },
              { role: "Backend Developer", comp: "Tokopedia", match: "84% Match" },
              { role: "Frontend Developer", comp: "Rukita · Bangalore", match: "92% Match" },
            ].map(j=>(
              <div key={j.role} className="border border-slate-100 rounded p-1.5 bg-white shadow-xs">
                <div className="flex items-center justify-between">
                  <p className="text-[8.5px] font-bold text-slate-800">{j.role}</p>
                  <span className="text-[7px] bg-green-50 text-green-700 font-bold px-1 rounded">{j.match}</span>
                </div>
                <p className="text-[7.5px] text-slate-400">{j.comp}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "College Portal",
      type: "College",
      content: (
        <div className="p-3 text-left">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[10px] font-bold text-slate-800">XYZ College</p>
              <p className="text-[7.5px] text-slate-400">Discover</p>
            </div>
            <span className="text-[10px]">⚙️</span>
          </div>
          <div className="h-5 rounded-full border border-slate-200 bg-slate-50 px-2 text-[7.5px] flex items-center text-slate-400 mb-2">🔍 Search course, name...</div>
          <p className="text-[9px] font-bold text-slate-800 mb-1">Courses</p>
          <div className="border border-blue-100 rounded-lg p-2 bg-blue-50/30">
            <p className="text-[8.5px] font-bold text-slate-800">B.Tech Computer Science</p>
            <div className="grid grid-cols-2 gap-1 text-[7px] text-slate-500 my-1">
              <div>Total Seat: <strong className="text-slate-800">60</strong></div>
              <div>Available: <strong className="text-green-600">08</strong></div>
              <div>Fees: <strong className="text-slate-800">₹ 3,50,000</strong></div>
            </div>
            <div className="flex gap-1 mt-1">
              <span className="flex-1 text-center text-[7px] bg-blue-500 text-white py-0.5 rounded font-bold">View Details</span>
              <span className="flex-1 text-center text-[7px] border border-blue-200 text-blue-600 py-0.5 rounded font-bold">Edit</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-blue-500 leading-tight mb-4 tracking-tight">
          Checkout Our App Interface Look
        </h2>
        <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 max-w-2xl mx-auto mb-14 leading-relaxed">
          Experience the power of a unified campus ecosystem right in your pocket. <strong className="text-slate-700 font-semibold">CampusPe</strong> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
        </p>

        {/* Mockups Container */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-6 py-6 overflow-x-auto scrollbar-none pb-8 px-4">
          {screens.map((screen, idx) => {
            const isCenter = idx === activeSlide;
            return (
              <div
                key={screen.title}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  isCenter
                    ? "w-[240px] sm:w-[260px] h-[500px] z-20 scale-105 shadow-2xl border-4 border-amber-500 rounded-[38px] ring-8 ring-amber-500/10"
                    : "w-[190px] sm:w-[210px] h-[440px] opacity-75 hover:opacity-100 hover:scale-100 scale-95 border-2 border-slate-300 rounded-[32px] shadow-lg"
                } bg-white overflow-hidden flex flex-col`}
              >
                {/* Phone Notch & Status bar */}
                <div className="pt-2 px-3 flex items-center justify-between text-[9px] text-slate-700 bg-white">
                  <span>9:41</span>
                  <div className="w-16 h-3 bg-slate-900 rounded-full" />
                  <span>5G 🔋</span>
                </div>
                {/* Screen Content */}
                <div className="flex-1 overflow-y-auto scrollbar-none bg-white">
                  {screen.content}
                </div>
                {/* Home Indicator */}
                <div className="py-1.5 flex justify-center bg-white border-t border-slate-50">
                  <div className="w-20 h-1 bg-slate-800 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`transition-all duration-200 rounded-full ${activeSlide === i ? "w-6 h-2 bg-blue-500" : "w-2 h-2 bg-blue-200 hover:bg-blue-300"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── DOWNLOAD APP NOW ─────────────────────────── */
function DownloadApp() {
  return (
    <section className="py-14 md:py-20 overflow-hidden" style={{ background: "radial-gradient(ellipse 90% 70% at 90% 50%, #eff6ff 0%, #f8faff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-extrabold text-blue-500 leading-tight mb-5 tracking-tight">
              Download App Now
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed mb-8 max-w-lg">
              Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you&apos;re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection. Your career doesn&apos;t start at graduation—it starts here.
            </p>
            {/* Store Badges */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Google Play */}
              <a
                href="#download-android"
                className="inline-flex items-center gap-3 bg-black hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.21 2.21 0 0 1 3 20.627V3.373c0-.6.225-1.168.609-1.559zM15.207 13.414l2.578 2.579-11.531 6.551 8.953-9.13zm2.578-5.407L15.207 10.586 6.254 1.456l11.531 6.551zm1.285 2.164l3.12 1.773a1.22 1.22 0 0 1 0 2.112l-3.12 1.773-2.128-2.129 2.128-2.729z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">GET IT ON</span>
                  <span className="text-[15px] font-bold block mt-0.5">Google Play</span>
                </div>
              </a>
              {/* App Store */}
              <a
                href="#download-ios"
                className="inline-flex items-center gap-3 bg-black hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.64-1.05 1.69-.92 2.71 1.01.08 2.02-.51 2.63-1.21z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[9px] text-slate-400 block font-medium">Download on the</span>
                  <span className="text-[15px] font-bold block mt-0.5">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Dual Angled Mockup */}
          <div className="relative flex justify-center items-center py-6">
            {/* Phone 1 Underneath */}
            <div className="w-[200px] sm:w-[230px] h-[400px] sm:h-[440px] bg-slate-900 border-4 border-slate-700 rounded-[36px] shadow-2xl p-2.5 transform -rotate-12 translate-x-4 translate-y-6 opacity-90 overflow-hidden">
              <div className="w-full h-full bg-white rounded-[26px] p-2 overflow-hidden text-left">
                <div className="w-12 h-2.5 bg-slate-800 rounded-full mx-auto mb-2" />
                <p className="text-[9px] font-bold text-slate-700">Recommended</p>
                <div className="mt-2 space-y-1.5">
                  <div className="h-10 bg-slate-50 rounded border border-slate-100" />
                  <div className="h-10 bg-slate-50 rounded border border-slate-100" />
                  <div className="h-10 bg-slate-50 rounded border border-slate-100" />
                </div>
              </div>
            </div>
            {/* Phone 2 Floating on top */}
            <div className="w-[210px] sm:w-[240px] h-[420px] sm:h-[460px] bg-slate-900 border-4 border-slate-600 rounded-[38px] shadow-2xl p-2.5 transform rotate-6 -translate-x-4 z-10 overflow-hidden anim-float">
              <div className="w-full h-full bg-white rounded-[28px] p-3 overflow-hidden text-left">
                <div className="w-14 h-3 bg-slate-900 rounded-full mx-auto mb-2" />
                <p className="text-[9px] text-slate-400">Hi, Amit Kumar</p>
                <p className="text-[11px] font-bold text-slate-900">Discover</p>
                <div className="mt-2 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-1.5 text-white">
                  <p className="text-[8px] font-bold">CampusPe Pro</p>
                  <p className="text-[7px] opacity-80">Instant connection</p>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="h-8 bg-blue-50 rounded border border-blue-100" />
                  <div className="h-8 bg-slate-50 rounded border border-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STILL HAVE QUESTIONS BANNER ─────────────────────────── */
function StillHaveQuestions() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-8 sm:p-12 text-center shadow-lg border border-blue-100/60"
          style={{
            background: "linear-gradient(135deg, rgba(219,234,254,0.6) 0%, rgba(239,246,255,0.8) 50%, rgba(243,232,255,0.5) 100%)",
          }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-3 tracking-tight">
            Still have questions?
          </h3>
          <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
            Our support team is here to help you succeed. Get in touch anytime.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-[14px] px-6 py-2.5 rounded-full shadow hover:shadow-md transition-all active:scale-95"
            >
              Contact Support
              <span className="w-5 h-5 rounded-full bg-white text-blue-500 flex items-center justify-center text-[10px] font-bold">↗</span>
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-blue-600 border border-blue-300 font-semibold text-[14px] px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all active:scale-95"
            >
              Schedule a Call
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">📞</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── COMPREHENSIVE FOOTER ─────────────────────────── */
function FooterComprehensive() {
  return (
    <footer className="pt-12 pb-8 bg-gradient-to-b from-white via-blue-50/20 to-blue-50/40 text-slate-600 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Ready for what's next? Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2 tracking-tight">
              Ready for what&apos;s next?
            </h3>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 max-w-lg leading-relaxed">
              Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a href="#colleges" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-[13px] px-4 py-2.5 rounded-xl shadow-xs transition-colors">
              Explore Colleges →
            </a>
            <a href="#jobs" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-[13px] px-4 py-2.5 rounded-xl shadow-xs transition-colors">
              Find Opportunities →
            </a>
            <a href="#list-college" className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-[13px] px-4 py-2.5 rounded-xl transition-colors">
              List Your College →
            </a>
            <a href="#post-job" className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-[13px] px-4 py-2.5 rounded-xl transition-colors">
              Post a Job →
            </a>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12 text-left">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4L2 10L14 16L26 10Z" fill="#3B82F6" />
                <path d="M2 10V17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 13V19C8 19 10 22 14 22C18 22 20 19 20 19V13" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-blue-500">Campus</span>
                <span className="text-slate-900">Pe</span>
              </span>
            </div>
            <p className="text-[14.5px] font-semibold text-slate-800 leading-snug mb-3">
              From choosing a college to finding your next opportunity.
            </p>
            <p className="text-[13px] text-slate-500 leading-relaxed max-w-sm">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {/* Links Column 1: For Students */}
          <div>
            <p className="text-[14px] font-bold text-slate-900 mb-3">For Students</p>
            <ul className="space-y-2 text-[13px] text-slate-500">
              {["Explore Colleges", "Find Opportunities", "Internships", "Full-time Jobs", "Part-time & Gig", "Application Tracker"].map(l=>(
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g,'-')}`} className="hover:text-blue-500 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: For Colleges */}
          <div>
            <p className="text-[14px] font-bold text-slate-900 mb-3">For Colleges</p>
            <ul className="space-y-2 text-[13px] text-slate-500">
              {["List Your College", "Admissions", "Fee Collection", "Placements"].map(l=>(
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g,'-')}`} className="hover:text-blue-500 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: For Employers & Company */}
          <div>
            <p className="text-[14px] font-bold text-slate-900 mb-3">For Employers</p>
            <ul className="space-y-2 text-[13px] text-slate-500 mb-5">
              {["Post a Job", "Find Talent", "Campus Hiring"].map(l=>(
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g,'-')}`} className="hover:text-blue-500 transition-colors">{l}</a></li>
              ))}
            </ul>
            <p className="text-[14px] font-bold text-slate-900 mb-3">Company</p>
            <ul className="space-y-2 text-[13px] text-slate-500">
              {["About Us", "Contact Us", "Blogs", "Careers"].map(l=>(
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g,'-')}`} className="hover:text-blue-500 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Links Column 4: Legal & Policies */}
          <div>
            <p className="text-[14px] font-bold text-slate-900 mb-3">Legal &amp; Policies</p>
            <ul className="space-y-2 text-[13px] text-slate-500 mb-4">
              {["Privacy Policy", "Terms & Conditions", "Refund & Cancellation Policy", "Cookie Policy", "Grievance Redressal", "Job & Internship Disclaimer"].map(l=>(
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g,'-')}`} className="hover:text-blue-500 transition-colors">{l}</a></li>
              ))}
            </ul>
            <a href="#policies" className="text-[12px] font-bold text-blue-500 hover:underline block mb-4">
              View all policies →
            </a>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-[11px] text-slate-600 leading-snug">
              Separate user, institution and employer terms can live inside the full Policies page.
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="border-t border-slate-200 pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-600">
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:contactus@campuspe.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <span className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 text-xs">✉</span>
              contactus@campuspe.com
            </a>
            <a href="tel:+916362606464" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <span className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 text-xs">📞</span>
              +91 6362606464
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-slate-500 font-medium">Students · Colleges · Employers</span>
          </div>
        </div>

        {/* Bottom copyright & Socials */}
        <div className="border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-500">
          <p>© 2026 CampusPe Technologies Pvt. Ltd. Privacy Terms Grievance</p>
          <div className="flex items-center gap-4 text-slate-600 text-[15px]">
            {["LinkedIn", "Instagram", "Twitter", "Facebook", "WhatsApp", "YouTube"].map((social, idx) => (
              <a key={social} href={`#${social.toLowerCase()}`} title={social} className="hover:text-blue-500 transition-colors">
                {idx === 0 && "in"}
                {idx === 1 && "📸"}
                {idx === 2 && "𝕏"}
                {idx === 3 && "f"}
                {idx === 4 && "💬"}
                {idx === 5 && "▶"}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceCards />
      <StatsBar />
      <Partners />
      <OpportunityDiscovery />
      <ResumeUpload />
      <ForColleges />
      <ForEmployers />
      <AppInterfaceShowcase />
      <DownloadApp />
      <StillHaveQuestions />
      <FooterComprehensive />
    </>
  );
}

