import Image from "next/image";

interface UserProfileProps {
    name: string;
    initials: string;
    avatarUrl?: string;
  }
  
  export default function UserProfile({ name, initials = 'ME', avatarUrl = '/avatar.png' }: UserProfileProps) {
    return (
      <div className="flex items-center px-3 py-2 text-sm mb-10">
       <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs mr-3 relative">
  {avatarUrl 
    ? <Image 
        src={avatarUrl} 
        alt="avatar" 
        fill 
        className="rounded-full object-cover"
        sizes="24px" 
      />
    : <span>{initials}</span>
  }
</div>
        <span className="text-gray-700">{name}</span>
      </div>
    );
  }