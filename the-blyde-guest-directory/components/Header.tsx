
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 md:py-12 border-b-2 border-sky-500 mb-10 md:mb-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-sky-700 mb-2 tracking-tight">
        The Blyde Lifestyle Estate
      </h1>
      <p className="text-xl sm:text-2xl text-slate-600">Guest Directory</p>
    </header>
  );
};

export default Header;
