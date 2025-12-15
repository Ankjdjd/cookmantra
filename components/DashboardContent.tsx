import React from 'react';
import HeroSlider from './HeroSlider';
import ServiceCards from './ServiceCards';
import CuisineGrid from './CuisineGrid';
import ProfessionalsList from './ProfessionalsList';
import EventSection from './EventSection';

const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-8 max-w-[1000px] mx-auto pb-10">
      {/* Hero Section */}
      <section>
        <HeroSlider />
      </section>

      {/* Services Section */}
      <section>
        <h3 className="font-bold text-gray-900 text-lg mb-4">Home Services</h3>
        <ServiceCards />
      </section>

      {/* Events Section */}
      <section>
         <h3 className="font-bold text-gray-900 text-lg mb-4">Life’s Special Moments Events</h3>
         <EventSection />
      </section>

      {/* Cuisines Section */}
      <section className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
        <div className="mb-6">
          <h2 className="font-bold text-xl text-gray-900">Worldwide Cuisines</h2>
          <p className="text-sm text-gray-500 mt-1">
            Choose from <span className="text-blue-600 cursor-pointer hover:underline">15+ cuisines</span> and <span className="text-blue-600 cursor-pointer hover:underline">500+ dishes</span>.
          </p>
        </div>
        <CuisineGrid />
        <div className="mt-6">
           <button className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 transition">
             View Full Menu
           </button>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="bg-black text-white rounded-xl p-6 md:p-8">
        <div className="mb-6">
          <h2 className="font-bold text-xl">Top Rated Professionals</h2>
          <p className="text-sm text-gray-400 mt-1">Trained, Verified and Background Checked</p>
        </div>
        <ProfessionalsList />
        <div className="mt-6">
           <button className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-200 transition">
             View More
           </button>
        </div>
      </section>

      {/* Example Small Card */}
      <section className="flex justify-start">
         <div className="bg-white rounded-lg border border-gray-200 p-4 relative shadow-sm w-full max-w-xs hover:shadow-md transition">
            <h4 className="font-semibold text-sm text-gray-800 mb-1 pr-6 truncate">
              Tuna Salad with Pasta & Olives
            </h4>
            <p className="text-xs text-gray-500">Spaghetti Special</p>
            <button className="absolute top-4 right-4 text-[#b33a1a] hover:text-[#d9480f]">
              <i className="fas fa-bookmark"></i>
            </button>
          </div>
      </section>

      {/* Bottom Action Bar */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <button className="text-sm text-gray-600 hover:text-gray-900 font-medium hover:underline">
          View More Details
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 relative">
          Book Now
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default DashboardContent;