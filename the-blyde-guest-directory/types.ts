
export interface Apartment {
  id: string;
  name: string;
  building: string;
  parking: string;
  keycode: string;
  checkIn: string;
  checkOut: string;
  wifiName: string;
  wifiPassword?: string;
}

export interface AmenityInfo {
  name: string;
  details?: string;
}

export interface OfficeHour {
    days: string;
    hours: string;
}

export interface NoiseRuleInfo {
    category: string;
    timeInfo: string;
    fineDetails?: string; 
}

export interface ContactDetails {
    name: string;
    phoneNumbers: string[];
    email: string;
}
