import { Search, SlidersHorizontal } from "lucide-react";

function SearchFilter({ search, setSearch, status, setStatus }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">

      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search company or job role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition"
        />
      </div>

      {/* Status Filter */}
      <div className="relative sm:w-48">
        <SlidersHorizontal
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full appearance-none pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition"
        >
          <option value="All">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Withdrawn">Withdrawn</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

    </div>
  );
}

export default SearchFilter;