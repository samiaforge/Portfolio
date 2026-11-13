import React from 'react';

export const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Top Header & Hero ambient radial glow */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, #06B6D4 35%, transparent 70%)',
        }}
      />

      {/* Mid-page ambient glow (Skills & Projects) */}
      <div 
        className="absolute top-[40%] right-[-10%] w-[500px] sm:w-[700px] h-[550px] rounded-full blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #1D4ED8 0%, #06B6D4 40%, transparent 75%)',
        }}
      />

      {/* Bottom ambient glow (Contact & Footer) */}
      <div 
        className="absolute bottom-[-5%] left-[-10%] w-[600px] sm:w-[800px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #2563EB 0%, #0891B2 45%, transparent 70%)',
        }}
      />

      {/* Subtle fine tech mesh overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};
