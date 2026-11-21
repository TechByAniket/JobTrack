import {
  BriefcaseBusiness,
  Send,
  Users,
  Trophy,
} from "lucide-react";

const iconMap = {
  total: BriefcaseBusiness,
  applied: Send,
  interview: Users,
  offer: Trophy,
};

const colorMap = {
  total: "bg-slate-100 text-slate-600",
  applied: "bg-orange-100 text-orange-600",
  interview: "bg-blue-100 text-blue-600",
  offer: "bg-green-100 text-green-600",
};

function StatCard({ title, value, description, type }) {
  const Icon = iconMap[type];

  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-slate-300 hover:shadow-xs transition">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-xs font-medium text-slate-500">
          {title}
        </p>

        <div className={`p-1.5 rounded-lg ${colorMap[type]}`}>
          <Icon size={16} />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="text-[11px] text-slate-400 mt-1">
        {description}
      </p>
    </div>
  );
}

export default StatCard;