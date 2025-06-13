import React from 'react';

interface ProgressBarProps {
  progress: number;
  className?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = '',
  color = 'primary',
  size = 'md',
  showPercentage = false
}) => {
  const colorClasses = {
    primary: 'bg-gradient-to-r from-primary-400 to-primary-600',
    secondary: 'bg-gradient-to-r from-secondary-400 to-secondary-600',
    success: 'bg-gradient-to-r from-green-400 to-green-600',
    warning: 'bg-gradient-to-r from-yellow-400 to-yellow-600'
  };

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`flex-1 bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`${colorClasses[color]} ${sizeClasses[size]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showPercentage && (
        <span className="text-sm font-medium text-gray-600 min-w-[3rem] text-right">
          {Math.round(clampedProgress)}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;