import { navigationItems, bottomNavItems } from "@/lib/data";
import Logo from "./Logo";
import NavItem from "./NavItem";
import UserProfile from "./UserProfile";
import { PlusIcon } from "lucide-react";

interface SidebarProps {
  currentPath: string;
}

export default function Sidebar({ currentPath }: SidebarProps) {
  return (
    <div className="min-w-sm border-r border-gray-200 bg-slate-50 flex flex-col">
      <Logo />

      <div>
        <button className="flex gap-2 ml-3 h-12 rounded-xl py-2 px-5 bg-gray-800 text-white text-lg">
          <PlusIcon size={16} className="mr-1 my-auto" />
          <span className="my-auto">Upload</span>
        </button>
      </div>
      <nav className="flex-1 px-2 mt-6 space-y-1">
        {navigationItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            path={item.path}
            active={currentPath === item.path}
          />
        ))}
      </nav>

      <div className="mt-auto px-2 space-y-1">
        {bottomNavItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            path={item.path}
            active={currentPath === item.path}
          />
        ))}
        <UserProfile name="Mariciele Enrique" initials="ME" />
      </div>
    </div>
  );
}
