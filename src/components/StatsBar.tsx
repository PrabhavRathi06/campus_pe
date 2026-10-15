import { UsersIcon, BuildingIcon, BriefcaseIcon, ShieldIcon } from "./icons";

const stats = [
  {
    icon: <UsersIcon className="w-7 h-7" />,
    iconBg: "bg-purple-100 text-purple-500",
    value: "800+",
    label: "Students",
  },
  {
    icon: <BuildingIcon className="w-7 h-7" />,
    iconBg: "bg-blue-100 text-blue-500",
    value: "130+",
    label: "colleges",
  },
  {
    icon: <BriefcaseIcon className="w-7 h-7" />,
    iconBg: "bg-green-100 text-green-500",
    value: "100+",
    label: "jobs & internships",
  },
  {
    icon: <ShieldIcon className="w-7 h-7" />,
    iconBg: "bg-orange-100 text-orange-500",
    value: "100%",
    label: "Safe & Trusted",
  },
];

export default function StatsBar() {
  return (
    <section className="border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-100">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 md:px-8 group cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${stat.iconBg} transition-transform duration-200 group-hover:scale-110`}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                  {stat.value}
                </p>
                <p className="text-[13px] text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
