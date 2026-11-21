
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
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Recent Applications
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1">
              Track the status of your job applications
            </p>
          </div>

          <span className="text-xs sm:text-sm text-slate-500 self-start sm:self-auto">
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

      <div className="overflow-auto max-h-[500px]">
        <table className="w-full text-left min-w-[720px]">
          <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-10 shadow-xs">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase bg-slate-50">
                Company / Role
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase bg-slate-50">
                Location
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase bg-slate-50">
                Type
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase bg-slate-50">
                Applied Date
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase bg-slate-50">
                Status
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase text-right bg-slate-50">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filteredApplications.map((application) => (
              <tr
                key={application._id}
                className="hover:bg-slate-50 transition"
              >
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
                    <button
                      onClick={() => onEdit(application)}
                      title="Edit application"
                      className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => onDelete(application._id)}
                      title="Delete application"
                      className="p-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredApplications.length === 0 && (
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
