import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative py-20 px-4 text-center overflow-hidden">
      
      <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6 tracking-tighter relative z-10">
        <span className="text-white">Sagan</span>
        <span className="text-tech-primary">Software</span>
      </h1>
      
      <p className="text-tech-muted text-lg md:text-xl max-w-2xl mx-auto mb-8 relative z-10">
        Centralny hub aplikacji i eksperymentów w JavaScript.
      </p>
    </div>
  );
};

export default Hero;
