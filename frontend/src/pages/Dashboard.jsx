
import { useState, useEffect } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatsSection from "../components/dashboard/StatsSection";
import ApplicationsTable from "../components/applications/ApplicationsTable";

import { getApplications } from "../services/applicationService";

function Dashboard() {
  const [applications, setApplications] = useState([]);

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

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64 min-h-screen">
        <Header />

        <div className="p-8">
          <WelcomeSection />
          <StatsSection applications={applications} />
          <ApplicationsTable applications={applications} />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
