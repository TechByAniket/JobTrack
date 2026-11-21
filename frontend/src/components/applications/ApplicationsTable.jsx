
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";
import SearchFilter from "./SearchFilter";

function ApplicationsTable({ applications, onEdit, onDelete }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

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
    <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-xs">
      <div className="p-3.5 sm:px-5 sm:py-3.5 border-b border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-slate-900">
              Recent Applications
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              Track the status of your job applications
            </p>
          </div>

          <span className="text-xs text-slate-500 self-start sm:self-auto bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200/60 font-medium">
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

      <div className="overflow-auto max-h-[460px] min-h-[180px]">
        <table className="w-full text-left min-w-[720px] table-fixed">
          <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-10 shadow-xs">
            <tr>
              <th className="w-[28%] px-4 sm:px-5 py-2.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                Company / Role
              </th>
              <th className="w-[18%] px-4 sm:px-5 py-2.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                Location
              </th>
              <th className="w-[14%] px-4 sm:px-5 py-2.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                Type
              </th>
              <th className="w-[16%] px-4 sm:px-5 py-2.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                Applied Date
              </th>
              <th className="w-[14%] px-4 sm:px-5 py-2.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                Status
              </th>
              <th className="w-[10%] px-4 sm:px-5 py-2.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-right bg-slate-50">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filteredApplications.map((application) => (
              <tr
                key={application._id}
                className="hover:bg-slate-50/80 transition"
              >
                <td className="px-4 sm:px-5 py-3 overflow-hidden">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-semibold text-xs shrink-0">
                      {application.company.substring(0, 2).toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-900 leading-tight truncate">
                        {application.company}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5 truncate">
                        {application.role}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 sm:px-5 py-3 text-xs sm:text-sm text-slate-600 truncate">
                  {application.location}
                </td>

                <td className="px-4 sm:px-5 py-3 text-xs sm:text-sm text-slate-600 truncate">
                  {application.jobType}
                </td>

                <td className="px-4 sm:px-5 py-3 text-xs sm:text-sm text-slate-600 whitespace-nowrap">
                  {formatDate(application.appliedDate)}
                </td>

                <td className="px-4 sm:px-5 py-3 whitespace-nowrap">
                  <StatusBadge status={application.status} />
                </td>

                <td className="px-4 sm:px-5 py-3">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      onClick={() => onEdit(application)}
                      title="Edit application"
                      className="p-1.5 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition"
                    >
                      <Pencil size={15} />
                    </button>

                    <button
                      onClick={() => onDelete(application._id)}
                      title="Delete application"
                      className="p-1.5 rounded-md text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredApplications.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center">
                  <p className="text-sm font-medium text-slate-600">
                    No applications found
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
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
