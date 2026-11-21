
import { Bell, Plus } from "lucide-react";

function Header({ onAddClick }) {
  return (
    <header className="h-16 sm:h-20 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Job<span className="text-orange-500">Track</span>
        </h1>
        <span className="hidden sm:inline-block text-xs text-slate-400 border-l border-slate-200 pl-3">
          Career workspace
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition">
          <Bell size={20} />
        </button>

        <button
          onClick={onAddClick}
          className="flex items-center gap-1.5 sm:gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition whitespace-nowrap shadow-xs"
        >
          <Plus size={18} />
          <span>Add Application</span>
        </button>

        <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-xs sm:text-sm">
          AK
        </div>
      </div>
    </header>
  );
}

export default Header;
