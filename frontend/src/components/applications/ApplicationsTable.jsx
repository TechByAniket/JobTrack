import { Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

const applications = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineer Intern",
    location: "Bengaluru",
    jobType: "Internship",
    appliedDate: "Nov 20, 2026",
    status: "Interview",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Software Development Engineer",
    location: "Hyderabad",
    jobType: "Full-time",
    appliedDate: "Nov 18, 2026",
    status: "Applied",
  },
  {
    id: 3,
    company: "Amazon",
    role: "SDE Intern",
    location: "Bengaluru",
    jobType: "Internship",
    appliedDate: "Nov 15, 2026",
    status: "Assessment",
  },
  {
    id: 4,
    company: "TCS",
    role: "Assistant System Engineer",
    location: "Mumbai",
    jobType: "Full-time",
    appliedDate: "Nov 12, 2026",
    status: "Rejected",
  },
  {
    id: 5,
    company: "Flipkart",
    role: "Software Development Intern",
    location: "Bengaluru",
    jobType: "Internship",
    appliedDate: "Nov 10, 2026",
    status: "Offer",
  },
];

function ApplicationsTable() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">

      {/* Table Header */}
      <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Recent Applications
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Track the status of your job applications
          </p>
        </div>

        <span className="text-sm text-slate-500">
          {applications.length} applications
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">
                Company / Role
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">
                Location
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">
                Type
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">
                Applied Date
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {applications.map((application) => (
              <tr key={application.id} className="hover:bg-slate-50 transition">

                {/* Company & Role */}
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

                {/* Location */}
                <td className="px-6 py-4 text-sm text-slate-600">
                  {application.location}
                </td>

                {/* Job Type */}
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600">
                    {application.jobType}
                  </span>
                </td>

                {/* Applied Date */}
                <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                  {application.appliedDate}
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <StatusBadge status={application.status} />
                </td>

                {/* Actions */}
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
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ApplicationsTable;