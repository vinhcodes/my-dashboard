import Dashboard from "../../components/dashboard/Dashboard";
import { recentlyVisitedFiles, allFiles } from "../../lib/data";

export default async function DashboardPage() {
  //   I will implemnt api call to get the data here

  return (
    <Dashboard
      recentlyVisitedFiles={recentlyVisitedFiles}
      allFiles={allFiles}
    />
  );
}
