import React from 'react';
import { DailyTip } from '../../types';
import Card from '../UI/Card';
import * as Icons from 'lucide-react';

interface TipCardProps {
  tip: DailyTip;
}

const TipCard: React.FC<TipCardProps> = ({ tip }) => {
  const Icon = Icons[tip.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  const categoryColors = {
    'Saving': 'from-green-400 to-emerald-500',
    'Budgeting': 'from-blue-400 to-indigo-500',
    'Credit': 'from-purple-400 to-pink-500',
    'Investing': 'from-orange-400 to-red-500'
  };

  const color = categoryColors[tip.category as keyof typeof categoryColors] || 'from-gray-400 to-gray-500';

  return (
    <Card hover className="p-6 h-full">
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${color} text-white`}>
              {tip.category}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {tip.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            {tip.content}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TipCard;