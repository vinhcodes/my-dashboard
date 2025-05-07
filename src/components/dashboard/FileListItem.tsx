import React from "react";
import { FileItem } from "@/types/dashboard";
import { FolderIcon, FileText } from "lucide-react";
import Image from "next/image";


interface FileListItemProps {
  item: FileItem;
  onSelect?: (id: number, isSelected: boolean) => void;
}

export default function FileListItem({ item, onSelect }: FileListItemProps) {
  const [isSelected, setIsSelected] = React.useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedState = e.target.checked;
    setIsSelected(newSelectedState);
    if (onSelect) {
      onSelect(item.id, newSelectedState);
    }
  };

  return (
    <div 
      className={`flex items-center justify-between p-3 hover:bg-gray-100 border-b border-gray-200 rounded-md ${
        isSelected ? "bg-blue-50" : ""
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
          className="w-4 h-4 mr-3 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />

        {item.type === "folder" ? (
          <div className="text-blue-500 mr-3">
            <FolderIcon size={20} />
          </div>
        ) : (
          <div className="text-gray-500 mr-3">
            <FileText size={20} />
          </div>
        )}
        <span className="text-lg text-gray-900">{item.name}</span>
      </div>
      <div className="flex items-center">
        <span className="text-lg text-gray-500 mr-2">{item.date}</span>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs relative">
          <Image
            fill
            alt="Avatar"
            className="rounded-full object-cover"
            sizes="32px"
            src="/avatar.png"
          />
        </div>
      </div>
    </div>
  );
}