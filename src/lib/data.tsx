import { NavItemType, FileItem } from '../types/dashboard';
import {  FolderIcon, ShieldCheck, Users, Mail, Settings } from 'lucide-react';

export const navigationItems: NavItemType[] = [
  { icon: <FolderIcon size={18} />, text: 'Library', path: '/dashboard/library' },
  { icon: <ShieldCheck size={18} />, text: 'Data rooms', path: '/dashboard/data-rooms' },
  { icon: <Users size={18} />, text: 'Visitors', path: '/dashboard/visitors' },
];

export const bottomNavItems: NavItemType[] = [
  { icon: <Mail size={18} />, text: 'Invite', path: '/dashboard/invite' },
  { icon: <Settings size={18} />, text: 'Settings', path: '/dashboard/settings' },
];


export const recentlyVisitedFiles: FileItem[] = [
  { id: 1, name: 'AI', type: 'folder', date: 'May 27, 2023', user: '/avatars/user1.png' },
  { id: 2, name: 'Key Account Plans', type: 'file', date: 'May 26, 2023', user: '/avatars/user1.png' },
  { id: 3, name: 'Series B', type: 'file', date: 'May 24, 2023', user: '/avatars/user1.png' },
];

export const allFiles: FileItem[] = [
  { id: 1, name: 'Media Kit', type: 'folder', date: 'May 30, 2023', user: '/avatars/user1.png' },
  { id: 2, name: 'Sales', type: 'folder', date: 'May 29, 2023', user: '/avatars/user1.png' },
  { id: 3, name: 'Investors', type: 'folder', date: 'May 28, 2023', user: '/avatars/user1.png' },
  { id: 4, name: 'Sales Playbook v3.1', type: 'file', date: 'May 25, 2023', user: '/avatars/user1.png' },
  { id: 5, name: 'AI', type: 'folder', date: 'May 27, 2023', user: '/avatars/user1.png' },
  { id: 6, name: 'Key Account Plans', type: 'file', date: 'May 26, 2023', user: '/avatars/user1.png' },
  { id: 7, name: 'Series B', type: 'file', date: 'May 24, 2023', user: '/avatars/user1.png' },
];