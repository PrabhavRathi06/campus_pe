interface Avatar {
  initials: string;
  color: string;
}

interface FloatingBadgeProps {
  avatars?: Avatar[];
  fireIcon?: boolean;
  count: string;
  label: string;
  sublabel?: string;
}

export default function FloatingBadge({
  avatars = [],
  fireIcon,
  count,
  label,
  sublabel,
}: FloatingBadgeProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 shadow-md px-3.5 py-2.5 hover:shadow-lg transition-shadow duration-200 cursor-default">
      {/* Stacked avatars */}
      {avatars.length > 0 && (
        <div className="flex -space-x-2 flex-shrink-0">
          {avatars.map((av, i) => (
            <div
              key={i}
              className={`w-7 h-7 rounded-full ${av.color} border-2 border-white flex items-center justify-center text-[9px] font-bold text-white`}
              style={{ zIndex: avatars.length - i }}
            >
              {av.initials}
            </div>
          ))}
        </div>
      )}

      <div>
        <div className="flex items-center gap-1">
          {fireIcon && (
            <span className="text-orange-500 text-sm">🔥</span>
          )}
          <span className="text-[13px] font-bold text-slate-800">
            {count} {label}
          </span>
        </div>
        {sublabel && (
          <p className="text-[11px] text-slate-400 mt-0.5">{sublabel}</p>
        )}
      </div>
    </div>
  );
}
