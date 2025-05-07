import { Search } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 p-4 flex items-center justify-between">
      <h1 className="text-lg font-medium text-gray-900">{title}</h1>
      <div className="w-64 relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search in Reshare..."
          className="w-full pl-10 pr-4 py-2 bg-gray-200/60 rounded-md text-sm text-gray-900"
        />
      </div>
    </header>
  );
}
