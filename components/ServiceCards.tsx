import React from 'react';
import { ChefHat, Wine, User, Sparkles } from 'lucide-react';

interface Service {
  title: string;
  subtitle: string;
  image: string;
  icon: React.ReactNode;
  iconColor: string;
}

const services: Service[] = [
  {
    title: "Private Chef Experience",
    subtitle: "Personalized fine dining at home",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=500",
    icon: <ChefHat size={16} />,
    iconColor: "text-red-600"
  },
  {
    title: "Elite Bartending Services",
    subtitle: "Mocktails • Cocktails • Events",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500",
    icon: <Wine size={16} />,
    iconColor: "text-yellow-600"
  },
  {
    title: "Hospitality Service Staff",
    subtitle: "Waiters • Servers • Event support",
    image: "https://images.unsplash.com/photo-1560963689-0933eae1799e?auto=format&fit=crop&q=80&w=500",
    icon: <User size={16} />,
    iconColor: "text-blue-600"
  },
  {
    title: "Event Cleanup & Sanitization",
    subtitle: "Post-event hygiene & disposal",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=500",
    icon: <Sparkles size={16} />,
    iconColor: "text-green-600"
  }
];

const ServiceCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
          <div className="h-28 overflow-hidden">
             <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className={`${service.iconColor} bg-gray-50 p-1 rounded-full`}>
                {service.icon}
              </span>
              <h4 className="font-semibold text-xs text-gray-900 leading-tight">
                {service.title}
              </h4>
            </div>
            <p className="text-[10px] text-gray-500 ml-7">
              {service.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;