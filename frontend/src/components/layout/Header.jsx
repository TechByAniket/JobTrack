
import { Bell, Plus } from "lucide-react";

function Header({ onAddClick }) {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Track and manage your job search
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition">
          <Bell size={20} />
        </button>

        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition"
        >
          <Plus size={18} />
          Add Application
        </button>
      </div>
    </header>
  );
}

export default Header;
