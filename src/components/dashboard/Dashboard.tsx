"use client";

import { usePathname } from 'next/navigation';
import DashboardLayout from './DashboardLayout';
import FileSection from './FileSection';
import { FileItem } from '@/types/dashboard';

interface DashboardClientProps {
  recentlyVisitedFiles: FileItem[];
  allFiles: FileItem[];
}

export default function Dashboard({ 
  recentlyVisitedFiles, 
  allFiles 
}: DashboardClientProps) {
  const pathname = usePathname();
  
  return (
    <DashboardLayout currentPath={pathname}>
      <div className="mb-8">
        <FileSection title="Recently visited" items={recentlyVisitedFiles} />
      </div>
      <FileSection title="All" items={allFiles} />
    </DashboardLayout>
  );
}