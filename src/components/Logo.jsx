import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width="60" height="80" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Arch Shape */}
        <path 
          d="M10 150V60C10 32.3858 32.3858 10 60 10C87.6142 10 110 32.3858 110 60V150" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        
        {/* Globe Wireframe Wirelines */}
        <g stroke="currentColor" strokeWidth="0.5" opacity="0.6">
          <circle cx="60" cy="70" r="40" />
          {/* Vertical Arcs */}
          <ellipse cx="60" cy="70" rx="15" ry="40" />
          <ellipse cx="60" cy="70" rx="30" ry="40" />
          <line x1="60" y1="30" x2="60" y2="110" />
          {/* Horizontal Arcs */}
          <ellipse cx="60" cy="70" rx="40" ry="10" />
          <ellipse cx="60" cy="70" rx="40" ry="25" />
        </g>
        
        {/* SUN Text */}
        <text 
          x="60" 
          y="135" 
          textAnchor="middle" 
          fill="currentColor" 
          style={{ 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontWeight: 800, 
            fontSize: '28px',
            letterSpacing: '0.1em'
          }}
        >
          SUN
        </text>
      </svg>
      <span style={{ 
        fontFamily: "'JetBrains Mono', monospace", 
        fontSize: '8px', 
        letterSpacing: '0.05em', 
        marginTop: '-10px',
        color: 'currentColor'
      }}>
        Technology System
      </span>
    </div>
  );
};

export default Logo;
