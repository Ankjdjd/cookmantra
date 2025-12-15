import React from 'react';
import DashboardLayout from './components/DashboardLayout';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex justify-center p-0 md:p-8 overflow-hidden bg-gray-50">
      {/* Decorative Background Elements (Desktop Only) */}
      <div className="hidden xl:block absolute top-0 left-0 w-[300px] h-full bg-[#f59e4c]/10"></div>
      
      {/* Decorative Hanger Shape */}
      <div className="hidden xl:block absolute top-[120px] left-[100px] z-0">
        <div className="w-[40px] h-[80px] bg-[#f59e4c] rounded-b-[20px]"></div>
        <div className="absolute top-0 left-[20px] w-[8px] h-[8px] bg-[#f59e4c] rounded-full -translate-x-1/2 -translate-y-4"></div>
        <div className="absolute top-[90px] left-0 w-[40px] h-[8px] bg-[#f59e4c] rounded"></div>
      </div>

      {/* Main App Container */}
      <div className="relative z-10 w-full max-w-[1400px] bg-white md:rounded-2xl shadow-2xl overflow-hidden flex flex-col min-h-[800px]">
        <DashboardLayout />
      </div>
    </div>
  );
};

export default App;