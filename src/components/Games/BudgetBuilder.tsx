import React, { useState } from 'react';
import { budgetCategories } from '../../data/gamesData';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Calculator, CheckCircle, AlertTriangle, RotateCcw } from 'lucide-react';
import * as Icons from 'lucide-react';

const BudgetBuilder: React.FC = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(4000);
  const [allocations, setAllocations] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const totalAllocated = Object.values(allocations).reduce((sum, amount) => sum + amount, 0);
  const remaining = monthlyIncome - totalAllocated;

  const handleAllocationChange = (categoryId: string, amount: number) => {
    setAllocations(prev => ({
      ...prev,
      [categoryId]: Math.max(0, amount)
    }));
  };

  const calculateCategoryTotals = () => {
    const needs = budgetCategories
      .filter(cat => cat.type === 'need')
      .reduce((sum, cat) => sum + (allocations[cat.id] || 0), 0);
    
    const wants = budgetCategories
      .filter(cat => cat.type === 'want')
      .reduce((sum, cat) => sum + (allocations[cat.id] || 0), 0);
    
    const savings = budgetCategories
      .filter(cat => cat.type === 'savings')
      .reduce((sum, cat) => sum + (allocations[cat.id] || 0), 0);

    return {
      needs: (needs / monthlyIncome) * 100,
      wants: (wants / monthlyIncome) * 100,
      savings: (savings / monthlyIncome) * 100
    };
  };

  const getFeedback = () => {
    const { needs, wants, savings } = calculateCategoryTotals();
    const feedback = [];

    if (needs > 55) {
      feedback.push({ type: 'warning', message: 'Your needs are taking up too much of your budget. Look for ways to reduce housing or transportation costs.' });
    } else if (needs < 45) {
      feedback.push({ type: 'success', message: 'Great job keeping your needs budget reasonable!' });
    }

    if (wants > 35) {
      feedback.push({ type: 'warning', message: 'You\'re spending too much on wants. Try to reduce entertainment and dining out expenses.' });
    } else if (wants < 25) {
      feedback.push({ type: 'success', message: 'You\'re doing well controlling your discretionary spending!' });
    }

    if (savings < 15) {
      feedback.push({ type: 'error', message: 'Your savings rate is too low! Aim for at least 20% of your income.' });
    } else if (savings >= 20) {
      feedback.push({ type: 'success', message: 'Excellent savings rate! You\'re building a strong financial future.' });
    }

    if (remaining < 0) {
      feedback.push({ type: 'error', message: 'You\'re overspending! Your allocations exceed your income.' });
    } else if (remaining > monthlyIncome * 0.05) {
      feedback.push({ type: 'warning', message: 'You have unallocated money. Make sure to assign it to a category.' });
    }

    return feedback;
  };

  const resetBudget = () => {
    setAllocations({});
    setShowResults(false);
  };

  const autoFill5030020 = () => {
    const newAllocations: Record<string, number> = {};
    budgetCategories.forEach(category => {
      newAllocations[category.id] = Math.round((monthlyIncome * category.recommended) / 100);
    });
    setAllocations(newAllocations);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Budget Builder</h2>
            <p className="text-gray-600">Allocate your monthly income using the 50/30/20 rule</p>
          </div>
        </div>

        {/* Income Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Income
          </label>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">$</span>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Math.max(0, parseInt(e.target.value) || 0))}
              className="text-2xl font-bold border-2 border-gray-300 rounded-lg px-4 py-2 w-40 focus:border-primary-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Quick Fill Button */}
        <div className="mb-6">
          <Button
            onClick={autoFill5030020}
            variant="outline"
            size="sm"
          >
            Auto-fill 50/30/20 Budget
          </Button>
        </div>

        {/* Budget Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {budgetCategories.map((category) => {
            const Icon = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            const allocation = allocations[category.id] || 0;
            const percentage = monthlyIncome > 0 ? (allocation / monthlyIncome) * 100 : 0;
            
            const typeColors = {
              need: 'border-red-200 bg-red-50',
              want: 'border-yellow-200 bg-yellow-50',
              savings: 'border-green-200 bg-green-50'
            };

            return (
              <div key={category.id} className={`p-4 rounded-lg border-2 ${typeColors[category.type]}`}>
                <div className="flex items-center space-x-2 mb-3">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <h3 className="font-medium text-gray-900 text-sm">{category.name}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">$</span>
                    <input
                      type="number"
                      value={allocation}
                      onChange={(e) => handleAllocationChange(category.id, parseInt(e.target.value) || 0)}
                      className="w-full border border-gray-300 rounded px-2 py-1 text-center focus:border-primary-500 focus:outline-none"
                      placeholder="0"
                    />
                  </div>
                  
                  <div className="text-xs text-gray-600 text-center">
                    {percentage.toFixed(1)}% (Recommended: {category.recommended}%)
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">${totalAllocated.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Allocated</div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${remaining.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Remaining</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {monthlyIncome > 0 ? ((totalAllocated / monthlyIncome) * 100).toFixed(1) : 0}%
              </div>
              <div className="text-sm text-gray-600">Budget Used</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {calculateCategoryTotals().savings.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">Savings Rate</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <Button
            onClick={() => setShowResults(true)}
            disabled={totalAllocated === 0}
          >
            Get Feedback
          </Button>
          <Button
            onClick={resetBudget}
            variant="outline"
            icon={RotateCcw}
          >
            Reset
          </Button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget Analysis</h3>
            
            {/* 50/30/20 Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Needs', percentage: calculateCategoryTotals().needs, target: 50, color: 'red' },
                { label: 'Wants', percentage: calculateCategoryTotals().wants, target: 30, color: 'yellow' },
                { label: 'Savings', percentage: calculateCategoryTotals().savings, target: 20, color: 'green' }
              ].map((item) => (
                <div key={item.label} className="text-center p-4 bg-white rounded-lg border">
                  <div className={`text-2xl font-bold text-${item.color}-600 mb-1`}>
                    {item.percentage.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{item.label}</div>
                  <div className="text-xs text-gray-500">Target: {item.target}%</div>
                  <div className={`w-full bg-gray-200 rounded-full h-2 mt-2`}>
                    <div
                      className={`bg-${item.color}-500 h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${Math.min(100, (item.percentage / item.target) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Feedback */}
            <div className="space-y-3">
              {getFeedback().map((item, index) => {
                const icons = {
                  success: CheckCircle,
                  warning: AlertTriangle,
                  error: AlertTriangle
                };
                const colors = {
                  success: 'text-green-600 bg-green-50 border-green-200',
                  warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
                  error: 'text-red-600 bg-red-50 border-red-200'
                };
                const Icon = icons[item.type as keyof typeof icons];

                return (
                  <div key={index} className={`p-4 rounded-lg border ${colors[item.type as keyof typeof colors]}`}>
                    <div className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 mt-0.5" />
                      <p className="text-sm">{item.message}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default BudgetBuilder;