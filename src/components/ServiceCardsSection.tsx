import ServiceCard from "./ServiceCard";
import { UniversityIcon, BriefcaseIcon, UsersIcon } from "./icons";

// Job Search Illustration
function JobIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="48" height="60" rx="4" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/>
      <rect x="14" y="22" width="36" height="4" rx="2" fill="#BFDBFE"/>
      <rect x="14" y="30" width="30" height="3" rx="1.5" fill="#DBEAFE"/>
      <rect x="14" y="36" width="24" height="3" rx="1.5" fill="#DBEAFE"/>
      <rect x="14" y="42" width="28" height="3" rx="1.5" fill="#DBEAFE"/>
      <rect x="14" y="48" width="20" height="3" rx="1.5" fill="#DBEAFE"/>
      <circle cx="58" cy="58" r="16" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2"/>
      <circle cx="55" cy="55" r="7" fill="none" stroke="#3B82F6" strokeWidth="2.5"/>
      <line x1="60" y1="60" x2="68" y2="68" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

// Code/Dev Illustration
function HiringIllustration() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="56" height="48" rx="6" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/>
      <rect x="8" y="12" width="56" height="14" rx="6" fill="#DBEAFE"/>
      <circle cx="18" cy="19" r="3" fill="#93C5FD"/>
      <circle cx="26" cy="19" r="3" fill="#BFDBFE"/>
      <circle cx="34" cy="19" r="3" fill="#DBEAFE"/>
      <path d="M22 36L16 42L22 48" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M50 36L56 42L50 48" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 32L32 52" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const cards = [
  {
    variant: "college" as const,
    badge: "Coming Soon",
    icon: <UniversityIcon className="w-6 h-6" />,
    title: "College",
    description: "Explore colleges, courses, fees, placements & more",
    features: [
      "Search by course, location, fees",
      "Connect directly with colleges",
      "Improve student placements",
    ],
    ctaLabel: "Join Waitlist",
  },
  {
    variant: "job" as const,
    badge: "Available Now",
    badgeAvailable: true,
    icon: <BriefcaseIcon className="w-6 h-6" />,
    title: "I'm Looking for a Job",
    description: "Upload your resume. We'll find jobs that fit you.",
    features: [
      "Jobs from 1000+ sources",
      "AI powered matching",
      "WhatsApp & email alerts",
    ],
    ctaLabel: "Explore Jobs",
    illustration: <JobIllustration />,
  },
  {
    variant: "hiring" as const,
    badge: "Coming Soon",
    icon: <UsersIcon className="w-6 h-6" />,
    title: "I'm Hiring",
    description:
      "Connect with colleges and find candidates — from students to graduates.",
    features: [
      "Connect directly with colleges",
      "Find the right candidates",
      "Simplify your hiring",
    ],
    ctaLabel: "Join Waitlist",
    illustration: <HiringIllustration />,
  },
];

export default function ServiceCardsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {cards.map((card, i) => (
          <ServiceCard
            key={i}
            variant={card.variant}
            badge={card.badge}
            badgeAvailable={card.badgeAvailable}
            icon={card.icon}
            title={card.title}
            description={card.description}
            features={card.features}
            ctaLabel={card.ctaLabel}
            illustrationSlot={card.illustration}
          />
        ))}
      </div>
    </section>
  );
}
