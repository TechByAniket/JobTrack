
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const initialFormData = {
  company: "",
  role: "",
  location: "",
  jobType: "Full-time",
  status: "Applied",
  appliedDate: new Date().toISOString().split("T")[0],
  jobUrl: "",
};

function ApplicationModal({ isOpen, onClose, onSubmit, application }) {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (application) {
      setFormData({
        company: application.company || "",
        role: application.role || "",
        location: application.location || "",
        jobType: application.jobType || "Full-time",
        status: application.status || "Applied",
        appliedDate: application.appliedDate
          ? new Date(application.appliedDate).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0],
        jobUrl: application.jobUrl || "",
      });
    } else {
      setFormData({
        ...initialFormData,
        appliedDate: new Date().toISOString().split("T")[0],
      });
    }
  }, [application, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {application ? "Edit Application" : "Add Application"}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {application
                ? "Update your application details."
                : "Enter the details of your job application."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Company *
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="e.g. Google"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Job Role *
            </label>
            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              placeholder="e.g. Software Engineer Intern"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Location
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Mumbai"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Job Type
              </label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-orange-500"
              >
                <option>Full-time</option>
                <option>Internship</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-orange-500"
              >
                <option>Applied</option>
                <option>Assessment</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Applied Date
              </label>
              <input
                type="date"
                name="appliedDate"
                value={formData.appliedDate}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Job URL
            </label>
            <input
              type="url"
              name="jobUrl"
              value={formData.jobUrl}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-orange-500"
            />
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-orange-700"
            >
              {application ? "Update Application" : "Save Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicationModal;
