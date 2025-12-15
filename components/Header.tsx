import React from 'react';
import { Menu, Moon, RefreshCw, DollarSign, Bell } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  hideMenuBtn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, hideMenuBtn = false }) => {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-gray-200 bg-white select-none sticky top-0 z-30">
      <div className="flex items-center space-x-3">
        {!hideMenuBtn && (
          <button
            onClick={onMenuClick}
            className="p-1 text-gray-700 hover:bg-gray-100 rounded-md md:hidden"
          >
            <Menu size={24} />
          </button>
        )}
        <div className="flex items-center space-x-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center border border-yellow-300">
            <i className="fas fa-hat-chef text-yellow-600 text-sm"></i> 
            {/* Fallback to simple circle if icon missing */}
            <span className="sr-only">Logo</span>
          </div>
          <span className="font-extrabold text-yellow-500 text-lg md:text-xl tracking-tight">
            COOXMANTRA
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-3 md:space-x-5 text-gray-500">
        <button className="hover:text-gray-900 transition-colors">
          <Moon size={18} />
        </button>
        
        <div className="hidden sm:block text-xs font-medium text-gray-400 select-all bg-gray-50 px-2 py-1 rounded">
          cookmantra.com/user/saved-recipes
        </div>

        <button className="hover:text-gray-900 transition-colors">
          <RefreshCw size={18} />
        </button>
        <button className="hover:text-gray-900 transition-colors">
          <DollarSign size={18} />
        </button>
        <button className="hover:text-gray-900 transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;