
import React from 'react';
import { Apartment } from '../types';

interface ApartmentCardProps {
  apartment: Apartment;
}

const WifiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M12.98 3.98a.75.75 0 0 1 .53 1.28L4.26 14.53a.75.75 0 0 1-1.06-1.06l9.25-9.25a.75.75 0 0 1 .53-.24Zm-2.02.62a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06ZM9.74 7.4a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06ZM8.53 8.62a.75.75 0 0 1 1.06 0l8.5 8.5a.75.75 0 0 1-1.06 1.06l-8.5-8.5a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    <path d="M2.933 10.843a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.061 0l1.22 1.22-.53.53a.75.75 0 0 0-1.06 1.06l.53.53-1.28 1.28-.53-.53a.75.75 0 0 0-1.06 1.06l.53.53-1.47 1.47-.53-.531a.75.75 0 0 0-1.06 1.06l.53.53-1.28 1.28-.53-.53a.75.75 0 0 0-1.061 1.06l.531.53-1.47 1.47a.75.75 0 0 1-1.06 0l-1.409-1.41Z" />
  </svg>
);


const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold text-sky-700 mb-4">{apartment.name}</h3>
      <ul className="space-y-2 text-slate-600">
        <li><strong className="text-slate-700">Building:</strong> {apartment.building}</li>
        <li><strong className="text-slate-700">Parking:</strong> {apartment.parking}</li>
        <li><strong className="text-slate-700">Keycode:</strong> {apartment.keycode}</li>
        <li><strong className="text-slate-700">Check-in:</strong> {apartment.checkIn}</li>
        <li><strong className="text-slate-700">Check-out:</strong> {apartment.checkOut}</li>
        <li className="flex items-center">
            <WifiIcon className="w-5 h-5 mr-2 text-sky-600"/> 
            <strong className="text-slate-700">WiFi:</strong>&nbsp;{apartment.wifiName} 
            {apartment.wifiPassword && (
                <span className="ml-1 text-sm text-slate-500">(Pass: {apartment.wifiPassword})</span>
            )}
        </li>
      </ul>
    </div>
  );
};

export default ApartmentCard;
