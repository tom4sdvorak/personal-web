import React, { type ReactNode } from 'react';
import './Rectangle.css';

function Rectangle ({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <section className={`rectangle-container ${className}`}>
      {children}
    </section>
  );
};

export default Rectangle;