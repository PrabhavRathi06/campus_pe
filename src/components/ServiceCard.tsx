"use client";

import { CheckIcon, ArrowRightIcon } from "./icons";

export type ServiceCardVariant = "college" | "job" | "hiring";

interface ServiceCardProps {
  variant: ServiceCardVariant;
  badge: string;
  badgeAvailable?: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref?: string;
  illustrationSlot?: React.ReactNode;
}

export default function ServiceCard({
  variant,
  badge,
  badgeAvailable,
  icon,
  title,
  description,
  features,
  ctaLabel,
  ctaHref = "#",
  illustrationSlot,
}: ServiceCardProps) {
  return (
    <div
      className={[
        "relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden",
        "bg-white border shadow-md",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        variant === "college" ? "border-blue-100" : "",
        variant === "job"     ? "border-blue-200 shadow-blue-50" : "",
        variant === "hiring"  ? "border-blue-100" : "",
      ].join(" ")}
    >
      {/* Decorative background blob — bottom-right */}
      <div
        className={[
          "absolute bottom-0 right-0 w-36 h-36 rounded-tl-3xl pointer-events-none opacity-50",
          variant === "college" ? "bg-gradient-to-tl from-amber-100 to-orange-50" : "",
          variant === "job"     ? "bg-gradient-to-tl from-blue-100 to-indigo-50" : "",
          variant === "hiring"  ? "bg-gradient-to-tl from-blue-50 to-slate-50" : "",
        ].join(" ")}
      />

      {/* Header: icon + status badge */}
      <div className="flex items-start justify-between relative z-10">
        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
          {icon}
        </div>
        <span
          className={[
            "text-[11.5px] font-semibold px-3 py-1 rounded-full border",
            badgeAvailable
              ? "text-green-600 bg-green-50 border-green-200"
              : "text-slate-500 bg-white border-slate-200",
          ].join(" ")}
        >
          {badge}
        </span>
      </div>

      {/* Title + description */}
      <div className="relative z-10">
        <h3 className="text-[22px] font-extrabold text-slate-900 leading-tight mb-1.5">
          {title}
        </h3>
        <p className="text-[13.5px] text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Feature list */}
      <ul className="flex flex-col gap-2.5 relative z-10">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 text-blue-500">
              <CheckIcon className="w-3.5 h-3.5" />
            </span>
            <span className="text-[13px] text-slate-600">{feat}</span>
          </li>
        ))}
      </ul>

      {/* Illustration (absolute, bottom-right) */}
      {illustrationSlot && (
        <div className="absolute bottom-16 right-4 opacity-75 pointer-events-none">
          {illustrationSlot}
        </div>
      )}

      {/* CTA Button */}
      <a
        href={ctaHref}
        className="relative z-10 mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[14px] font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 group"
      >
        {ctaLabel}
        {ctaLabel.toLowerCase().includes("explore") ? (
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        ) : (
          /* Bell / Waitlist icon */
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        )}
      </a>
    </div>
  );
}
