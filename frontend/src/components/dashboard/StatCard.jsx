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
    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm transition">

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className={`p-2 rounded-lg ${colorMap[type]}`}>
          <Icon size={19} />
        </div>
      </div>

      <h3 className="text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="text-xs text-slate-500 mt-2">
        {description}
      </p>

    </div>
  );
}

export default StatCard;