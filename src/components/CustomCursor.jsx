import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);
  const vLine = useRef(null);
  const hLine = useRef(null);

  const requestRef = useRef();
  const mousePos = useRef({ x: -100, y: -100, isHovering: false });
  // Ocultar en dispositivos móviles/táctiles
  const isMobile = useRef(typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches);

  useEffect(() => {
    if (isMobile.current) return;

    const updatePosition = () => {
      const { x, y, isHovering } = mousePos.current;

      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate(${x - 2}px, ${y - 2}px)`;
      }
      if (cursorOutline.current) {
        cursorOutline.current.style.transform = `translate(${x - 10}px, ${y - 10}px) scale(${isHovering ? 2.5 : 1})`;
        cursorOutline.current.style.borderColor = isHovering ? '#FFE600' : '#fff';
      }
      if (vLine.current) {
        vLine.current.style.transform = `translate(${x}px, ${y - 15}px)`;
      }
      if (hLine.current) {
        hLine.current.style.transform = `translate(${x - 15}px, ${y}px)`;
      }

      requestRef.current = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        mousePos.current.isHovering = true;
      } else {
        mousePos.current.isHovering = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isMobile.current) return null;

  return (
    <>
      <div 
        ref={cursorOutline}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          border: '1px solid #fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          willChange: 'transform, border-color',
          transition: 'transform 0.1s ease-out, border-color 0.2s',
          mixBlendMode: 'difference',
          transform: 'translate(-100px, -100px)'
        }}
      />
      <div 
        ref={cursorDot}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          backgroundColor: '#FFE600',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          willChange: 'transform',
          mixBlendMode: 'difference',
          transform: 'translate(-100px, -100px)'
        }}
      />
      <div 
        ref={vLine}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '1px',
          height: '30px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          mixBlendMode: 'difference',
          transform: 'translate(-100px, -100px)'
        }}
      />
      <div 
        ref={hLine}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '30px',
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          mixBlendMode: 'difference',
          transform: 'translate(-100px, -100px)'
        }}
      />
    </>
  );
};

export default CustomCursor;
