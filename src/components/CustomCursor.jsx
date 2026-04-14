import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          border: `1px solid ${isHovering ? '#00f2ff' : '#fff'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${isHovering ? 2.5 : 1})`,
          transition: 'transform 0.1s ease-out, border-color 0.2s',
          mixBlendMode: 'difference'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          backgroundColor: '#00f2ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
          mixBlendMode: 'difference'
        }}
      />
      {/* Crosshair lines */}
      <div 
        style={{
          position: 'fixed',
          top: position.y - 15,
          left: position.x,
          width: '1px',
          height: '30px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x - 15,
          width: '30px',
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
};

export default CustomCursor;
