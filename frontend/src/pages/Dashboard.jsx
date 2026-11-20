import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatsSection from "../components/dashboard/StatsSection";
import ApplicationsTable from "../components/applications/ApplicationsTable";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 min-h-screen">

        <Header />

        <div className="p-8">
          <WelcomeSection />
          <StatsSection />
          <ApplicationsTable />

          {/* Dashboard content will be added here */}
        </div>

      </main>

    </div>
  );
}

export default Dashboard;