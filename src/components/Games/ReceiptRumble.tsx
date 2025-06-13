import React, { useState } from 'react';
import { receiptData } from '../../data/gamesData';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Receipt, CheckCircle, XCircle, RotateCcw, AlertTriangle } from 'lucide-react';

const ReceiptRumble: React.FC = () => {
  const [currentReceiptIndex, setCurrentReceiptIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const currentReceipt = receiptData[currentReceiptIndex];
  const wastefulItems = currentReceipt.items.filter(item => item.wasteful);

  const handleItemSelect = (itemName: string) => {
    if (showResults) return;
    
    setSelectedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const calculateResults = () => {
    const correctSelections = selectedItems.filter(itemName => 
      wastefulItems.some(item => item.name === itemName)
    ).length;
    
    const incorrectSelections = selectedItems.filter(itemName => 
      !wastefulItems.some(item => item.name === itemName)
    ).length;

    const missedWasteful = wastefulItems.filter(item => 
      !selectedItems.includes(item.name)
    ).length;

    const points = (correctSelections * 10) - (incorrectSelections * 5);
    return { correctSelections, incorrectSelections, missedWasteful, points };
  };

  const handleSubmit = () => {
    const results = calculateResults();
    setScore(prev => prev + Math.max(0, results.points));
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentReceiptIndex < receiptData.length - 1) {
      setCurrentReceiptIndex(prev => prev + 1);
      setSelectedItems([]);
      setShowResults(false);
    } else {
      resetGame();
    }
  };

  const resetGame = () => {
    setCurrentReceiptIndex(0);
    setSelectedItems([]);
    setShowResults(false);
    setScore(0);
  };

  const calculateSavings = () => {
    return wastefulItems.reduce((total, item) => {
      const savings = item.price - (parseFloat(item.alternative?.match(/\$(\d+\.?\d*)/)?.[1] || '0') || 0);
      return total + savings;
    }, 0);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-xl flex items-center justify-center">
            <Receipt className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Receipt Rumble</h2>
            <p className="text-gray-600">Spot wasteful spending and find savings</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
          <span>Receipt {currentReceiptIndex + 1} of {receiptData.length}</span>
          <span>Score: {score} points</span>
        </div>

        {/* Instructions */}
        {!showResults && (
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-800 mb-1">Instructions</h3>
                <p className="text-blue-700 text-sm">
                  Click on items that you think are wasteful spending or could be replaced with cheaper alternatives. 
                  Look for overpriced items, impulse purchases, or unnecessary expenses.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Receipt */}
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-6 font-mono">
          <div className="text-center border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-xl font-bold">{currentReceipt.store}</h3>
            <p className="text-gray-600">Receipt #{currentReceipt.id}</p>
          </div>

          <div className="space-y-2">
            {currentReceipt.items.map((item, index) => {
              const isSelected = selectedItems.includes(item.name);
              const isWasteful = item.wasteful;
              
              let itemClasses = 'flex justify-between items-center p-2 rounded cursor-pointer transition-all duration-200 ';
              
              if (!showResults) {
                itemClasses += isSelected 
                  ? 'bg-red-100 border-2 border-red-300' 
                  : 'hover:bg-gray-50 border-2 border-transparent';
              } else {
                if (isWasteful && isSelected) {
                  itemClasses += 'bg-green-100 border-2 border-green-300'; // Correct
                } else if (isWasteful && !isSelected) {
                  itemClasses += 'bg-yellow-100 border-2 border-yellow-300'; // Missed
                } else if (!isWasteful && isSelected) {
                  itemClasses += 'bg-red-100 border-2 border-red-300'; // Wrong
                } else {
                  itemClasses += 'bg-gray-50 border-2 border-gray-200'; // Correct non-selection
                }
              }

              return (
                <div
                  key={index}
                  onClick={() => handleItemSelect(item.name)}
                  className={itemClasses}
                >
                  <div className="flex items-center space-x-2">
                    <span>{item.name}</span>
                    {showResults && (
                      <>
                        {isWasteful && isSelected && <CheckCircle className="w-4 h-4 text-green-600" />}
                        {isWasteful && !isSelected && <AlertTriangle className="w-4 h-4 text-yellow-600" />}
                        {!isWasteful && isSelected && <XCircle className="w-4 h-4 text-red-600" />}
                      </>
                    )}
                  </div>
                  <span className="font-bold">${item.price.toFixed(2)}</span>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-300 pt-4 mt-4">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>TOTAL:</span>
              <span>${currentReceipt.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {!showResults ? (
          <div className="text-center">
            <Button
              onClick={handleSubmit}
              disabled={selectedItems.length === 0}
              size="lg"
            >
              Submit Analysis
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Results */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analysis Results</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{calculateResults().correctSelections}</div>
                  <div className="text-sm text-green-700">Correct Spots</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{calculateResults().incorrectSelections}</div>
                  <div className="text-sm text-red-700">Wrong Selections</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">${calculateSavings().toFixed(2)}</div>
                  <div className="text-sm text-blue-700">Potential Savings</div>
                </div>
              </div>

              <div className="text-center mb-4">
                <div className="text-lg font-semibold text-gray-900">
                  Round Score: {Math.max(0, calculateResults().points)} points
                </div>
              </div>
            </div>

            {/* Alternatives */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Money-Saving Alternatives:</h4>
              {wastefulItems.map((item, index) => (
                <div key={index} className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-red-600 ml-2">${item.price.toFixed(2)}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-medium">{item.alternative}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="text-center">
              {currentReceiptIndex < receiptData.length - 1 ? (
                <Button onClick={handleNext} size="lg">
                  Next Receipt
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="bg-primary-50 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-primary-800 mb-2">
                      Game Complete! 🎉
                    </h3>
                    <p className="text-primary-700">
                      Final Score: {score} points
                    </p>
                    <p className="text-primary-600 text-sm mt-2">
                      You could save ${receiptData.reduce((total, receipt) => 
                        total + receipt.items.filter(item => item.wasteful).reduce((sum, item) => 
                          sum + (item.price - (parseFloat(item.alternative?.match(/\$(\d+\.?\d*)/)?.[1] || '0') || 0)), 0), 0
                      ).toFixed(2)} by making smarter choices!
                    </p>
                  </div>
                  <Button
                    onClick={resetGame}
                    size="lg"
                    icon={RotateCcw}
                  >
                    Play Again
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ReceiptRumble;