
import { Bell, Plus } from "lucide-react";

function Header({ onAddClick }) {
  return (
    <header className="h-14 sm:h-16 bg-white/95 backdrop-blur-sm border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-2.5">
        <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
          Job<span className="text-orange-500">Track</span>
        </h1>
        <span className="hidden sm:inline-block text-[11px] text-slate-400 border-l border-slate-200 pl-2.5 font-medium">
          Workspace
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition">
          <Bell size={18} />
        </button>

        <button
          onClick={onAddClick}
          className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition shadow-xs"
        >
          <Plus size={16} />
          <span>Add Application</span>
        </button>

        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-xs shadow-xs">
          AK
        </div>
      </div>
    </header>
  );
}

export default Header;
