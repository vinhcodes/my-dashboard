import { FileItem } from '@/types/dashboard';
import FileListItem from './FileListItem';
import { Search, PlusIcon, FolderPlus } from 'lucide-react';

interface FileSectionProps {
  title: string;
  items: FileItem[];
}

export default function FileSection({ title, items }: FileSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-600">{title}</h2>
        {title === "Recently visited" && (
          <div className="flex gap-2">
            <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 bg-slate-50">
              <Search size={16} />
            </button>
            <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 bg-slate-50">
              <FolderPlus size={16} />
            </button>
            <button className="flex gap-2 rounded-xl ml-2 px-3 py-2 bg-gray-800 text-white text-sm">
              <PlusIcon size={16} className="mr-1 my-auto" />
              <span>Upload</span>
            </button>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        {items.map((item) => (
          <FileListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}