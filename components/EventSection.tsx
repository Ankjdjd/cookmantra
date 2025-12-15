import React from 'react';
import { Calendar } from 'lucide-react';

const EventSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
      
      {/* Event Card 1 */}
      <div className="flex items-center gap-3 border border-gray-100 rounded-lg p-3 flex-1 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
        <div className="bg-white p-2 rounded shadow-sm text-gray-600">
           <Calendar size={24} />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xs text-gray-800">Celebrate Your Birthday</span>
          <span className="text-[10px] text-gray-500 mb-1">Nearest venue to visit Gen 005...</span>
          <span className="bg-[#d9480f] text-white text-[9px] px-2 py-0.5 rounded-full font-bold w-fit">
            Best Offer
          </span>
        </div>
      </div>

      {/* Event Card 2 */}
      <div className="flex items-center gap-3 border border-gray-100 rounded-lg p-3 flex-1 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
         <div className="flex -space-x-2">
           <img 
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100" 
            alt="Dish 1" 
           />
           <img 
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=100" 
            alt="Dish 2" 
           />
         </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xs text-gray-800">Elite United States</span>
          <span className="text-[10px] text-gray-500 mb-1">Save on Visa Menus</span>
          <span className="bg-[#d9480f] text-white text-[9px] px-2 py-0.5 rounded-full font-bold w-fit">
            Learn More
          </span>
        </div>
      </div>

      {/* Horizontal Scroll Items */}
      <div className="flex-1 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-6 min-w-max px-2">
           {['Indian', 'Chinese', 'Italian', 'Thai', 'Mexican'].map((cuisine, i) => (
             <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 group-hover:border-orange-500 transition-colors mb-1">
                   <img 
                    src={`https://source.unsplash.com/random/100x100?food,${cuisine}`} 
                    alt={cuisine} 
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=Food'; }}
                   />
                </div>
                <span className="text-[10px] font-medium text-gray-600 group-hover:text-orange-600">{cuisine}</span>
             </div>
           ))}
        </div>
      </div>

    </div>
  );
};

export default EventSection;