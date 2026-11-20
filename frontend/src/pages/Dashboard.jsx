
import { useState, useEffect } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatsSection from "../components/dashboard/StatsSection";
import ApplicationsTable from "../components/applications/ApplicationsTable";
import ApplicationModal from "../components/applications/ApplicationModal";

import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../services/applicationService";

function Dashboard() {
  const [applications, setApplications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getApplications();
        setApplications(data);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchApplications();
  }, []);

  const handleAddApplication = async (formData) => {
    try {
      const data = await createApplication(formData);

      setApplications((prev) => [
        data.application,
        ...prev,
      ]);

      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to create application:", error);
      alert("Failed to save application. Please try again.");
    }
  };

  const handleEditApplication = async (formData) => {
    try {
      const data = await updateApplication(
        selectedApplication._id,
        formData
      );

      setApplications((prev) =>
        prev.map((app) =>
          app._id === selectedApplication._id
            ? data.application
            : app
        )
      );

      setIsModalOpen(false);
      setSelectedApplication(null);
    } catch (error) {
      console.error("Failed to update application:", error);
      alert("Failed to update application. Please try again.");
    }
  };

  const handleDeleteApplication = async (id) => {
    const confirmed = window.confirm(
        "Are you sure you want to delete this application?"
    );

    if (!confirmed) return;

    try {
        await deleteApplication(id);

        setApplications((prev) =>
        prev.filter((app) => app._id !== id)
        );
    } catch (error) {
        console.error("Failed to delete application:", error);
        alert("Failed to delete application. Please try again.");
    }
  };

  const openAddModal = () => {
    setSelectedApplication(null);
    setIsModalOpen(true);
  };

  const openEditModal = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (formData) => {
    if (selectedApplication) {
      handleEditApplication(formData);
    } else {
      handleAddApplication(formData);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64 min-h-screen">
        <Header onAddClick={openAddModal} />

        <div className="p-8">
          <WelcomeSection />
          <StatsSection applications={applications} />

          <ApplicationsTable
            applications={applications}
            onEdit={openEditModal}
            onDelete={handleDeleteApplication}
          />
        </div>
      </main>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        application={selectedApplication}
      />
    </div>
  );
}

export default Dashboard;
