import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false, 
  gradient = false,
  onClick 
}) => {
  const baseClasses = 'rounded-xl shadow-lg transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-white to-gray-50' : 'bg-white';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${clickableClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;