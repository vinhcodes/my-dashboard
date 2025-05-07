import { NavItemType } from '@/types/dashboard';
import Link from 'next/link';

interface NavItemProps extends NavItemType {
  active: boolean;
}

export default function NavItem({ icon, text, path, active }: NavItemProps) {
  return (
    <Link
      href={path}
      className={`flex items-center px-3 py-2 text-sm rounded-md w-full ${
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}