
import { Bell, Plus, Menu } from "lucide-react";

function Header({ onAddClick, onMenuClick }) {
  return (
    <header className="h-16 sm:h-20 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden transition"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>

        <div>
          <h2 className="text-base sm:text-lg font-semibold text-slate-800">
            Dashboard
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">
            Track and manage your job search
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition">
          <Bell size={20} />
        </button>

        <button
          onClick={onAddClick}
          className="flex items-center gap-1.5 sm:gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition whitespace-nowrap"
        >
          <Plus size={18} />
          <span>Add Application</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
