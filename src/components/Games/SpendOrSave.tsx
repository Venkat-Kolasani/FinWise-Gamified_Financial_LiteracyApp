import React, { useState } from 'react';
import { spendOrSaveScenarios } from '../../data/gamesData';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Scale, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const SpendOrSave: React.FC = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const currentScenario = spendOrSaveScenarios[currentScenarioIndex];

  const handleOptionSelect = (optionIndex: number) => {
    if (showResult) return;
    
    setSelectedOption(optionIndex);
    setShowResult(true);
    
    if (currentScenario.options[optionIndex].isCorrect) {
      setScore(prev => prev + 10);
    }
  };

  const handleNext = () => {
    if (currentScenarioIndex < spendOrSaveScenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      resetGame();
    }
  };

  const resetGame = () => {
    setCurrentScenarioIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Spend or Save</h2>
            <p className="text-gray-600">Make smart financial decisions</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
          <span>Scenario {currentScenarioIndex + 1} of {spendOrSaveScenarios.length}</span>
          <span>Score: {score} points</span>
        </div>

        {/* Scenario */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Scenario:</h3>
            <p className="text-gray-700 leading-relaxed">{currentScenario.scenario}</p>
          </div>

          <h4 className="text-lg font-medium text-gray-900 mb-4">What would you do?</h4>
          
          <div className="space-y-3">
            {currentScenario.options.map((option, index) => {
              let buttonClasses = 'w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ';
              
              if (!showResult) {
                buttonClasses += 'border-gray-200 hover:border-primary-300 hover:bg-primary-50 cursor-pointer';
              } else {
                if (option.isCorrect) {
                  buttonClasses += 'border-green-500 bg-green-50';
                } else if (selectedOption === index) {
                  buttonClasses += 'border-red-500 bg-red-50';
                } else {
                  buttonClasses += 'border-gray-200 bg-gray-50 opacity-60';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={buttonClasses}
                  disabled={showResult}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                      showResult && option.isCorrect ? 'border-green-500 bg-green-500' :
                      showResult && selectedOption === index && !option.isCorrect ? 'border-red-500 bg-red-500' :
                      'border-gray-300'
                    }`}>
                      {showResult && option.isCorrect && <CheckCircle className="w-4 h-4 text-white" />}
                      {showResult && selectedOption === index && !option.isCorrect && <XCircle className="w-4 h-4 text-white" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{option.text}</p>
                      {showResult && selectedOption === index && (
                        <p className={`mt-2 text-sm ${option.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {option.feedback}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        {showResult && (
          <div className="text-center">
            {currentScenarioIndex < spendOrSaveScenarios.length - 1 ? (
              <Button onClick={handleNext} size="lg">
                Next Scenario
              </Button>
            ) : (
              <div className="space-y-4">
                <div className="bg-primary-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">
                    Game Complete! 🎉
                  </h3>
                  <p className="text-primary-700">
                    Final Score: {score} out of {spendOrSaveScenarios.length * 10} points
                  </p>
                  <p className="text-primary-600 text-sm mt-2">
                    You made smart financial decisions {Math.round((score / (spendOrSaveScenarios.length * 10)) * 100)}% of the time!
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
        )}
      </Card>
    </div>
  );
};

export default SpendOrSave;