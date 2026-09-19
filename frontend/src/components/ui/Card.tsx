import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm ${
        hoverable ? 'transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-slate-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
