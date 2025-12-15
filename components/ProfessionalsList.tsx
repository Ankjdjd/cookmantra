import React from 'react';

interface Professional {
  name: string;
  role: string;
  experience: string;
  rating: number;
  image: string;
}

const professionals: Professional[] = [
  { name: "Prem", role: "Multi Cuisine Chef", experience: "20 Years", rating: 4.6, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200" },
  { name: "Mahesh", role: "Bartender", experience: "5 Years", rating: 4.8, image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=200" },
  { name: "Rajesh", role: "Bartender", experience: "9 Years", rating: 4.7, image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200" },
  { name: "Mukesh", role: "Bartender", experience: "4 Years", rating: 4.8, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200" },
  { name: "Suresh", role: "Chef", experience: "12 Years", rating: 4.9, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200" },
];

const ProfessionalsList: React.FC = () => {
  return (
    <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide">
      {professionals.map((prof, index) => (
        <div key={index} className="flex-shrink-0 flex flex-col items-center text-center w-28 group cursor-pointer">
          <div className="relative">
            <img 
              alt={prof.name} 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-gray-800 group-hover:border-yellow-400 transition-colors"
              src={prof.image} 
            />
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
              {prof.rating} ★
            </span>
          </div>
          <h3 className="mt-4 font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">
            {prof.name}
          </h3>
          <p className="text-[10px] text-gray-400 leading-tight mt-1">
            {prof.role}
            <br />
            {prof.experience}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalsList;