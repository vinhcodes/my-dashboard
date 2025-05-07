import { DashboardLayoutProps } from "@/types/dashboard";
import Sidebar from "./Sidebar";
import Header from "./Header";


export default function DashboardLayout({
  children,
  currentPath,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar currentPath={currentPath} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Library" />
        <div className="flex-1 overflow-auto p-12">{children}</div>
      </div>
    </div>
  );
}
