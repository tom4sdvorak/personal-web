import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_POSITIONS: { [path: string]: number } = {
  '/': -10,    // Shallow
  '/projects': -30,   // Mid-Depth
  '/contact': -60,   // Deep
};

function BackgroundDiver() {
  const location = useLocation();

  useEffect(() => {
    const cursor = document.getElementById('glow-cursor');
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const cursor = document.getElementById('glow-cursor');
    const targetY = PAGE_POSITIONS[location.pathname] || 0;
    body.style.setProperty('--bg-pos-y', `${targetY}%`);
    if(cursor) cursor.style.opacity = (targetY/-200).toString();
    /*if (newBgPos !== undefined && newBgPos !== currentBgPos) {
      body.style.setProperty('--bg-start-pos', `${currentBgPos}%`);
      body.style.setProperty('--bg-end-pos', `${newBgPos}%`);
      body.classList.add('is-diving');
      if(cursor) cursor.style.opacity = (newBgPos as number)/200;
      const timeout = setTimeout(() => {
        body.classList.remove('is-diving');
        body.style.backgroundPosition = `0% ${newBgPos}%`;
        setCurrentBgPos(newBgPos);
      }, 800);
      return () => clearTimeout(timeout);
    }

    if (newBgPos !== undefined) {
        body.style.backgroundPosition = `0% ${newBgPos}%`;
        if(cursor) cursor.style.opacity = (newBgPos as number)/200;
        setCurrentBgPos(newBgPos);
    }*/
  }, [location.pathname]);

  return null;
}

export default BackgroundDiver;