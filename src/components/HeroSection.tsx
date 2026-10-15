"use client";

import FloatingBadge from "./FloatingBadge";
import HeroFloatingCard from "./HeroFloatingCard";

export default function HeroSection() {
  return (
    <section className="relative hero-gradient overflow-hidden py-8 md:py-12 lg:py-16">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Row 1: Three-column — Left card | Centre badge | Right card ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4 md:gap-6">

          {/* LEFT — WhatsApp Alert card */}
          <div className="hidden md:flex justify-start animate-float">
            <HeroFloatingCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              }
              title="WhatsApp Alert"
              titleColor="text-green-500"
              subtitle="Get notified on whatsapp"
              description="You'll get all important updates on your whatsapp"
              borderColor="border-green-100"
            />
          </div>

          {/* CENTER — AI badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-200">
              {/* Bot icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M12 11V7" />
                <circle cx="12" cy="5" r="2" />
                <circle cx="8" cy="16" r="1" fill="#3B82F6" stroke="none" />
                <circle cx="16" cy="16" r="1" fill="#3B82F6" stroke="none" />
                <path d="M9 20h6" />
              </svg>
              <span className="text-[13px] font-semibold text-slate-700">AI-Powered Campus Assistant</span>
            </div>
          </div>

          {/* RIGHT — Resume Builder card */}
          <div className="hidden md:flex justify-end animate-float-delayed">
            <HeroFloatingCard
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              }
              title="Resume Builder"
              titleColor="text-amber-500"
              subtitle="Build Your Resume"
              description="Our resume builder gives you dynamic options to build better & faster resume that got you hired"
              borderColor="border-purple-100"
            />
          </div>
        </div>

        {/* ── Row 2: Main headline ── */}
        <div className="text-center mt-6 md:mt-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-slate-900 leading-tight tracking-tight">
            Connect{" "}
            <span className="gradient-text">10X Faster.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-500 font-normal max-w-lg mx-auto leading-relaxed">
            One platform connecting students, colleges &amp; employers — faster.
          </p>
        </div>

        {/* ── Row 3: Three-column — Student badge | Label | Company badge ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 mt-8 md:mt-10">

          {/* LEFT — Students matched badge */}
          <div className="flex justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <FloatingBadge
              avatars={[
                { initials: "AK", color: "bg-blue-500" },
                { initials: "PK", color: "bg-purple-500" },
                { initials: "SN", color: "bg-green-500" },
              ]}
              fireIcon
              count="142"
              label="students matched today"
              sublabel="Just now • IIT, BITS, VIT"
            />
          </div>

          {/* CENTER — "What are you looking for?" */}
          <div className="flex items-center justify-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {/* Sparkle left */}
            <svg width="18" height="18" viewBox="0 0 20 20" fill="#60A5FA">
              <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
            </svg>
            <span className="text-lg sm:text-xl font-bold text-blue-500 whitespace-nowrap">
              What are you looking for?
            </span>
            {/* Sparkle right */}
            <svg width="18" height="18" viewBox="0 0 20 20" fill="#60A5FA" className="animate-sparkle-delayed">
              <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
            </svg>
          </div>

          {/* RIGHT — Company shortlisted badge */}
          <div className="flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 shadow-md px-4 py-2.5 hover:shadow-lg transition-shadow duration-200 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" fill="white" fillOpacity="0.2"/>
                  <line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <line x1="9" y1="21" x2="9" y2="9" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-slate-800">
                  <span className="text-blue-500">Radiant Info</span>{" "}shortlisted 8 interns
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block flex-shrink-0" />
                  <span className="text-[11px] text-slate-400">Verified recruiter • 2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
