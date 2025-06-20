
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <section className={`mb-10 md:mb-16 ${className || ''}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6 md:mb-8 pb-3 border-b border-slate-300">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
