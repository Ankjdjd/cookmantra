import React from 'react';

interface Cuisine {
  name: string;
  image: string;
}

const cuisines: Cuisine[] = [
  { name: "North Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356f36?w=200" },
  { name: "Chinese", image: "https://images.unsplash.com/photo-1541696490865-9810f7a90729?w=200" },
  { name: "Italian & American", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200" },
  { name: "Continental", image: "https://images.unsplash.com/photo-1608835291093-394b0c943a75?w=200" },
  { name: "Live Barbecue", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200" },
  { name: "South Indian", image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=200" },
  { name: "Thai & Mexican", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200" },
  { name: "Vrat ka Khana", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200" }
];

const CuisineGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {cuisines.map((item, index) => (
        <div key={index} className="flex flex-col items-center group cursor-pointer">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-sm border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300">
             <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Food'; }}
             />
          </div>
          <span className="mt-3 text-xs sm:text-sm font-semibold text-gray-700 text-center group-hover:text-black">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CuisineGrid;