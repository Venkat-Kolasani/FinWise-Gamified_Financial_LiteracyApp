import React, { useState } from 'react';
import { inflationData } from '../../data/gamesData';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { TrendingUp, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const InflationExplorer: React.FC = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const currentItem = inflationData[currentItemIndex];
  const tolerance = currentItem.pastPrice * 0.3; // 30% tolerance
  const isCorrect = showResult && Math.abs(parseFloat(userGuess) - currentItem.pastPrice) <= tolerance;

  const handleSubmitGuess = () => {
    if (!userGuess || isNaN(parseFloat(userGuess))) return;
    
    setShowResult(true);
    setAttempts(prev => prev + 1);
    
    if (Math.abs(parseFloat(userGuess) - currentItem.pastPrice) <= tolerance) {
      setScore(prev => prev + 10);
    }
  };

  const handleNextItem = () => {
    if (currentItemIndex < inflationData.length - 1) {
      setCurrentItemIndex(prev => prev + 1);
      setUserGuess('');
      setShowResult(false);
    } else {
      // Game completed
      resetGame();
    }
  };

  const resetGame = () => {
    setCurrentItemIndex(0);
    setUserGuess('');
    setShowResult(false);
    setScore(0);
    setAttempts(0);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Inflation Explorer</h2>
            <p className="text-gray-600">Guess past prices and learn about inflation</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
          <span>Item {currentItemIndex + 1} of {inflationData.length}</span>
          <span>Score: {score} points</span>
        </div>

        {/* Game Content */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            A {currentItem.item} costs ${currentItem.currentPrice} today.
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            What do you think it cost in {currentItem.year}?
          </p>

          {!showResult ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">$</span>
                <input
                  type="number"
                  step="0.01"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  className="text-2xl font-bold text-center border-2 border-gray-300 rounded-lg px-4 py-2 w-32 focus:border-primary-500 focus:outline-none"
                  placeholder="0.00"
                />
              </div>
              <Button
                onClick={handleSubmitGuess}
                disabled={!userGuess || isNaN(parseFloat(userGuess))}
                size="lg"
              >
                Submit Guess
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Result */}
              <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className="text-lg font-semibold text-green-800">Great guess!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-6 h-6 text-red-600" />
                      <span className="text-lg font-semibold text-red-800">Not quite!</span>
                    </>
                  )}
                </div>
                <p className={`text-center ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  The actual price in {currentItem.year} was <strong>${currentItem.pastPrice}</strong>
                </p>
              </div>

              {/* Explanation */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-center">{currentItem.explanation}</p>
              </div>

              {/* Next Button */}
              <div className="flex justify-center space-x-4">
                {currentItemIndex < inflationData.length - 1 ? (
                  <Button onClick={handleNextItem} size="lg">
                    Next Item
                  </Button>
                ) : (
                  <Button
                    onClick={resetGame}
                    size="lg"
                    icon={RotateCcw}
                  >
                    Play Again
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Final Score */}
        {showResult && currentItemIndex === inflationData.length - 1 && (
          <div className="bg-primary-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-primary-800 mb-2">
              Game Complete! 🎉
            </h3>
            <p className="text-primary-700">
              Final Score: {score} out of {inflationData.length * 10} points
            </p>
            <p className="text-primary-600 text-sm mt-2">
              You completed {attempts} attempts with a {Math.round((score / (inflationData.length * 10)) * 100)}% accuracy rate
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default InflationExplorer;