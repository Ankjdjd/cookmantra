import React from 'react';
import { Home, BarChart2, BookOpen, Calendar, Bookmark, Settings, ClipboardList, LogOut } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-[260px] bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block
      `}
    >
      <div className="flex flex-col h-full pt-6 px-5 pb-6">
        {/* Add Recipe Button */}
        <button className="w-full bg-[#d9480f] text-white rounded-lg py-3 mb-8 text-sm font-bold shadow-md hover:bg-[#b63c0c] transition-colors flex items-center justify-center gap-2">
          <span>+</span> Add a Recipe
        </button>

        {/* Main Nav */}
        <nav className="flex flex-col space-y-1 text-gray-600 font-medium text-sm">
          <NavItem icon={<Home size={18} />} label="Home" active />
          <NavItem icon={<BarChart2 size={18} />} label="Dashboard" />
          <NavItem icon={<BookOpen size={18} />} label="Cooking Courses" />
          <NavItem icon={<Calendar size={18} />} label="Weekly Prep" />
          <NavItem icon={<Bookmark size={18} />} label="Saved Recipes" />
        </nav>

        <div className="mt-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-3">
            Settings
          </div>
          <nav className="flex flex-col space-y-1 text-gray-600 font-medium text-sm">
            <NavItem icon={<Settings size={18} />} label="Preferences" />
            <NavItem icon={<ClipboardList size={18} />} label="Your Plan" />
            <NavItem icon={<LogOut size={18} />} label="Log Out" className="text-red-600 hover:bg-red-50 hover:text-red-700" />
          </nav>
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, className }) => {
  return (
    <a
      href="#"
      className={`
        flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
        ${active ? 'bg-[#fce9d9] text-[#b35a0a]' : 'hover:bg-gray-100'}
        ${className || ''}
      `}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default Sidebar;