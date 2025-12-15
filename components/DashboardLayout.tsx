import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-full flex-col md:flex-row min-h-[800px]">
      {/* Header (Mobile & Desktop) */}
      <div className="md:hidden">
        <Header onMenuClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="hidden md:block">
          <Header onMenuClick={toggleSidebar} hideMenuBtn={true} />
        </div>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-white scrollbar-hide">
          <DashboardContent />
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;