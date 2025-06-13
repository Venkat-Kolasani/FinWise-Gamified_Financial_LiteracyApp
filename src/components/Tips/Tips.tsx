import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { dailyTips } from '../../data/tipsData';
import TipCard from './TipCard';
import Button from '../UI/Button';

const Tips: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Saving', 'Budgeting', 'Credit', 'Investing'];
  
  const filteredTips = selectedCategory === 'All' 
    ? dailyTips 
    : dailyTips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Daily Financial Tips
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bite-sized wisdom to improve your financial literacy, one tip at a time
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-2 bg-white rounded-lg shadow-sm border p-1">
          <Filter className="w-5 h-5 text-gray-400 ml-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredTips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>

      {/* No results */}
      {filteredTips.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No tips found for this category.</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Test Your Knowledge?
          </h2>
          <p className="text-gray-600 mb-6">
            Take our interactive quiz to see how much you've learned from these tips!
          </p>
          <Button
            onClick={() => window.location.href = '/quiz'}
            size="lg"
            className="px-8"
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tips;