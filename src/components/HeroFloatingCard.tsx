interface HeroFloatingCardProps {
  icon: React.ReactNode;
  title: string;
  titleColor?: string;
  subtitle: string;
  description: string;
  /** Use a full static Tailwind border class e.g. "border-green-100" */
  borderColor?: string;
}

export default function HeroFloatingCard({
  icon,
  title,
  titleColor = "text-blue-500",
  subtitle,
  description,
  borderColor = "border-slate-200",
}: HeroFloatingCardProps) {
  return (
    <div
      className={`bg-white border ${borderColor} rounded-2xl shadow-lg p-3.5 w-[200px] sm:w-[215px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default`}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span className="flex-shrink-0">{icon}</span>
        <span className={`text-[12.5px] font-bold ${titleColor}`}>{title}</span>
      </div>
      <p className="text-[12px] font-semibold text-slate-700 leading-snug mb-1">
        {subtitle}
      </p>
      <p className="text-[11px] text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
