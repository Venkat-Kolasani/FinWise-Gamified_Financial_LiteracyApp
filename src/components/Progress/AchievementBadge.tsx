import React from 'react';
import { Achievement } from '../../types';
import * as Icons from 'lucide-react';

interface AchievementBadgeProps {
  achievement: Achievement;
  unlocked: boolean;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement, unlocked }) => {
  const Icon = Icons[achievement.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
      unlocked 
        ? 'border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-lg' 
        : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
          unlocked 
            ? 'bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg' 
            : 'bg-gray-300'
        }`}>
          <Icon className={`w-8 h-8 ${unlocked ? 'text-white' : 'text-gray-500'}`} />
        </div>
        
        <h3 className={`font-semibold mb-1 ${unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
          {achievement.title}
        </h3>
        
        <p className={`text-sm ${unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
          {achievement.description}
        </p>
        
        {unlocked && (
          <div className="mt-2">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
              Unlocked! 🎉
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementBadge;