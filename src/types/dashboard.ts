export interface NavItemType {
  icon: React.ReactNode;
  text: string;
  path: string;
}

export interface FileItem {
  id: number;
  name: string;
  type: 'file' | 'folder';
  date: string;
  user: string;
}

export interface FileSection {
  title: string;
  items: FileItem[];
}

export interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  active: boolean;
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPath: string;
}
