
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ApartmentCard from './components/ApartmentCard';
import AmenitiesColumn from './components/AmenitiesColumn';
import PlayIcon from './components/PlayIcon';
import { Apartment, AmenityInfo, OfficeHour, NoiseRuleInfo, ContactDetails } from './types';

const apartmentsData: Apartment[] = [
  {
    id: "apt629",
    name: "3-Bedroom Apartment (629)",
    building: "64",
    parking: "629 x 2",
    keycode: "1225",
    checkIn: "3:00 PM",
    checkOut: "10:00 AM",
    wifiName: "TP-Link_E086",
    wifiPassword: "15886606",
  },
  {
    id: "apt639",
    name: "1-Bedroom Apartment (639)",
    building: "64",
    parking: "639",
    keycode: "4738",
    checkIn: "3:00 PM",
    checkOut: "10:00 AM",
    wifiName: "DIR-825-07FE",
    wifiPassword: "60826862",
  },
];

const freeAmenitiesData: AmenityInfo[] = [
  { name: "Lagoon Swimming" },
  { name: "Inflatable Water Park" },
  { name: "Kids' Playground" },
  { name: "Table Tennis" },
  { name: "Geppeto's Play Area" },
  { name: "Vista Restaurant", details: "(walk-ins welcome)" },
];

const paidServicesData: AmenityInfo[] = [
  { name: "CSpa & Wellness", details: "(bookings required)" },
  { name: "Canoeing" },
  { name: "Gym Access" },
  { name: "Cinema Room" },
  { name: "5-a-side Soccer" },
  { name: "Eco-friendly Car Wash" },
];

const officeHoursData: OfficeHour[] = [
    { days: "Mon-Thu", hours: "8:00 AM - 5:00 PM"},
    { days: "Fri", hours: "8:00 AM - 8:00 PM"},
    { days: "Sat-Sun", hours: "8:00 AM - 6:00 PM"},
];

const noiseRulesData: NoiseRuleInfo[] = [
    { category: "Weekdays", timeInfo: "Quiet after 10:00 PM" },
    { category: "Weekends", timeInfo: "Quiet after 12:00 AM" },
    { category: "Fines", timeInfo: "R500 + R250 admin fee" }
];

const checkInRequirementsData: string[] = [
    "Full names of all guests",
    "Photocopy of ID/Passport (required for biometrics)",
    "Number of adults/children",
    "Vehicle details (type, model, color, registration)",
    "Contact numbers",
];

const lockboxInstructionsData: string[] = [
    "Enter code provided in your booking details",
    "Retrieve key from box",
    "Return key and scramble code when leaving",
];

const contactInfoData: ContactDetails = {
    name: "CSpa Wellness",
    phoneNumbers: ["010 541 0564", "066 323 3283"],
    email: "theblyde@camelotwellness.co.za"
};

const App: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 text-slate-800">
      <Header />

      <main>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {apartmentsData.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>

        <Section title="Amenities">
          <div className="grid md:grid-cols-2 gap-8">
            <AmenitiesColumn title="Free Amenities" amenities={freeAmenitiesData} iconType="check"/>
            <AmenitiesColumn title="Paid Services" amenities={paidServicesData} iconType="currency"/>
          </div>
        </Section>

        <Section title="Important Information">
          <ul className="space-y-3 text-slate-700">
            <li>
              <strong className="font-semibold text-slate-800">Check-in:</strong> 3:00 PM | <strong className="font-semibold text-slate-800">Check-out:</strong> 10:00 AM
            </li>
            <li>
              <strong className="font-semibold text-slate-800">Biometrics Required:</strong> Visit office next to security gate (left side)
              <ul className="list-disc list-inside pl-5 mt-1 space-y-1 text-slate-600">
                {officeHoursData.map(oh => <li key={oh.days}>{oh.days}: {oh.hours}</li>)}
              </ul>
            </li>
            <li>
              <strong className="font-semibold text-slate-800">Noise Rules:</strong>
              <ul className="list-disc list-inside pl-5 mt-1 space-y-1 text-slate-600">
                {noiseRulesData.map(nr => <li key={nr.category}>{nr.category}: {nr.timeInfo} {nr.fineDetails || ''}</li>)}
              </ul>
            </li>
            <li><strong className="font-semibold text-slate-800">No lagoon access on check-out day</strong></li>
            <li><strong className="font-semibold text-slate-800">No day visitors</strong></li>
          </ul>
        </Section>

        <Section title="Check-in Requirements">
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            {checkInRequirementsData.map((req, index) => <li key={index}>{req}</li>)}
          </ul>
        </Section>

        <Section title="Lockbox Instructions">
          <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6">
            {lockboxInstructionsData.map((instr, index) => <li key={index}>{instr}</li>)}
          </ol>
          <a 
            href="https://youtu.be/zbm1Bq0eVOU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out no-underline"
          >
            <PlayIcon className="w-5 h-5 mr-2" />
            Watch Video Tutorial
          </a>
        </Section>

        <Section title="Contact Information">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-sky-700 mb-2">{contactInfoData.name}</h3>
            <p className="text-slate-700">
              {contactInfoData.phoneNumbers.join(" | ")}
            </p>
            <a href={`mailto:${contactInfoData.email}`} className="text-sky-500 hover:text-sky-600 underline">
              {contactInfoData.email}
            </a>
          </div>
        </Section>
      </main>

      <footer className="text-center mt-12 py-6 border-t border-slate-300">
        <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} The Blyde Lifestyle Estate. All information subject to change.</p>
      </footer>
    </div>
  );
};

export default App;
