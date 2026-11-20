import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";
import SearchFilter from "./SearchFilter";
import { getApplications } from "../../services/applicationService";

function ApplicationsTable() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch applications when component mounts
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getApplications();
        setApplications(data);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
        setError("Unable to load applications. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // Search and filter logic
  const filteredApplications = applications.filter((application) => {
    const matchesSearch =
      application.company.toLowerCase().includes(search.toLowerCase()) ||
      application.role.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || application.status === status;

    return matchesSearch && matchesStatus;
  });

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">

      {/* Table Header */}
      <div className="px-6 py-5 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Recent Applications
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Track the status of your job applications
            </p>
          </div>

          <span className="text-sm text-slate-500">
            {filteredApplications.length} applications
          </span>
        </div>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">Company / Role</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">Location</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">Type</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">Applied Date</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">Status</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">

            {loading && (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center text-sm text-slate-500">
                  Loading applications...
                </td>
              </tr>
            )}

            {!loading && error && (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center text-sm text-red-500">
                  {error}
                </td>
              </tr>
            )}

            {!loading && !error && filteredApplications.map((application) => (
              <tr key={application._id} className="hover:bg-slate-50 transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-semibold text-sm">
                      {application.company.substring(0, 2).toUpperCase()}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {application.company}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {application.role}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {application.location}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {application.jobType}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                  {formatDate(application.appliedDate)}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={application.status} />
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition">
                      <Pencil size={16} />
                    </button>

                    <button className="p-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>

              </tr>
            ))}

            {!loading && !error && filteredApplications.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center">
                  <p className="text-sm font-medium text-slate-600">
                    No applications found
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Try changing your search or filter
                  </p>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ApplicationsTable;