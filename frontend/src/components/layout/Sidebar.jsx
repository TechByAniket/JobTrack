import {
  LayoutDashboard,
  BriefcaseBusiness,
  Settings,
  ChevronDown,
  X,
} from "lucide-react";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0 left-0 z-50 transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Branding */}
        <div className="px-6 py-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Job<span className="text-orange-500">Track</span>
            </h1>

            <p className="text-xs text-slate-400 mt-1">
              Career management workspace
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden transition"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-2">
        <p className="text-xs uppercase tracking-wider text-slate-500 px-3 mb-3">
          Workspace
        </p>

        <button className="flex items-center gap-3 w-full px-3 py-3 rounded-lg bg-orange-500 text-white">
          <LayoutDashboard size={19} />
          <span className="text-sm font-medium">Dashboard</span>
        </button>

        <button className="flex items-center gap-3 w-full px-3 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition">
          <BriefcaseBusiness size={19} />
          <span className="text-sm font-medium">Applications</span>
        </button>

        <button className="flex items-center gap-3 w-full px-3 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition">
          <Settings size={19} />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </nav>

      {/* Profile */}
      <div className="mt-auto p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-2">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-semibold text-sm">
            AK
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium">Aniket</p>
            <p className="text-xs text-slate-400">Personal Workspace</p>
          </div>

          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>

    </aside>
    </>
  );
}

export default Sidebar;