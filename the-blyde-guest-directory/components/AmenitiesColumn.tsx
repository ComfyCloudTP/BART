
import React from 'react';
import { AmenityInfo } from '../types';

interface AmenitiesColumnProps {
  title: string;
  amenities: AmenityInfo[];
  iconType: 'check' | 'currency';
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

const CurrencyDollarIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}>
  <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM8.085 14.5H6.75V9.455h-.955V8H7.81L8.085 5.5H9.55L9.277 8H10.55v1.455H9.277V11.87c0 .493.244.728.605.728.21 0 .42-.045.63-.128V14.1c-.248.09-.543.145-.88.145-.733 0-1.27-.405-1.27-1.395v-2.705H6.75v3.35Z" />
  <path d="M12.195 14.5H10.86v- элементы.075c.18-.08.355-.165.525-.255.345-.185.64-.43.64-.81 0-.39-.23-.65-.72-.65-.37 0-.715.17-1.02.435V11.21c.325-.255.72-.435 1.135-.435.96 0 1.635.535 1.635 1.415 0 .61-.395 1.035-1.025 1.335v.07h1.365v1.365Z" />
</svg>

);


const AmenitiesColumn: React.FC<AmenitiesColumnProps> = ({ title, amenities, iconType }) => {
  const IconComponent = iconType === 'check' ? CheckIcon : CurrencyDollarIcon;
  const iconColor = iconType === 'check' ? 'text-green-500' : 'text-amber-500';

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-slate-700 mb-5">{title}</h3>
      <ul className="space-y-3">
        {amenities.map((amenity, index) => (
          <li key={index} className="flex items-start text-slate-700">
            <IconComponent className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${iconColor}`} />
            <span>
              {amenity.name}
              {amenity.details && <span className="text-sm text-slate-500 ml-1">{amenity.details}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmenitiesColumn;
