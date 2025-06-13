import React, { useState } from 'react';
import { creditActions } from '../../data/gamesData';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Award, TrendingUp, TrendingDown, RotateCcw, CreditCard } from 'lucide-react';

const CreditScoreQuest: React.FC = () => {
  const [creditScore, setCreditScore] = useState(600);
  const [currentActionIndex, setCurrentActionIndex] = useState(0);
  const [gameHistory, setGameHistory] = useState<Array<{
    action: string;
    scoreChange: number;
    newScore: number;
    description: string;
  }>>([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [month, setMonth] = useState(1);

  const currentAction = creditActions[currentActionIndex];

  const getScoreRating = (score: number) => {
    if (score >= 800) return { rating: 'Excellent', color: 'text-green-600', bgColor: 'bg-green-50' };
    if (score >= 740) return { rating: 'Very Good', color: 'text-blue-600', bgColor: 'bg-blue-50' };
    if (score >= 670) return { rating: 'Good', color: 'text-yellow-600', bgColor: 'bg-yellow-50' };
    if (score >= 580) return { rating: 'Fair', color: 'text-orange-600', bgColor: 'bg-orange-50' };
    return { rating: 'Poor', color: 'text-red-600', bgColor: 'bg-red-50' };
  };

  const handleActionChoice = (takeAction: boolean) => {
    let scoreChange = 0;
    let actionTaken = '';

    if (takeAction) {
      scoreChange = currentAction.scoreChange;
      actionTaken = currentAction.action;
    } else {
      // Opposite action or no action
      switch (currentAction.category) {
        case 'payment':
          if (currentAction.scoreChange > 0) {
            scoreChange = -10; // Missing a good payment
            actionTaken = 'Missed payment opportunity';
          } else {
            scoreChange = 5; // Avoided bad payment behavior
            actionTaken = 'Avoided missing payment';
          }
          break;
        case 'utilization':
          if (currentAction.scoreChange > 0) {
            scoreChange = -5; // Didn't pay down debt
            actionTaken = 'Kept high credit utilization';
          } else {
            scoreChange = 8; // Avoided maxing out card
            actionTaken = 'Avoided maxing out credit card';
          }
          break;
        case 'accounts':
          scoreChange = 0; // No change for not opening account
          actionTaken = 'Decided not to open new account';
          break;
        case 'history':
          if (currentAction.scoreChange > 0) {
            scoreChange = -3; // Closed old account
            actionTaken = 'Closed old credit card';
          }
          break;
        case 'inquiries':
          scoreChange = 2; // Avoided hard inquiry
          actionTaken = 'Avoided unnecessary credit application';
          break;
        default:
          actionTaken = 'No action taken';
      }
    }

    const newScore = Math.max(300, Math.min(850, creditScore + scoreChange));
    setCreditScore(newScore);
    
    setGameHistory(prev => [...prev, {
      action: actionTaken,
      scoreChange,
      newScore,
      description: currentAction.description
    }]);

    // Move to next action or complete game
    if (currentActionIndex < creditActions.length - 1) {
      setCurrentActionIndex(prev => prev + 1);
      setMonth(prev => prev + 1);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCreditScore(600);
    setCurrentActionIndex(0);
    setGameHistory([]);
    setGameComplete(false);
    setMonth(1);
  };

  const getFinalGrade = () => {
    const scoreImprovement = creditScore - 600;
    if (scoreImprovement >= 150) return { grade: 'A+', message: 'Outstanding credit management!' };
    if (scoreImprovement >= 100) return { grade: 'A', message: 'Excellent credit decisions!' };
    if (scoreImprovement >= 50) return { grade: 'B', message: 'Good credit building!' };
    if (scoreImprovement >= 0) return { grade: 'C', message: 'Room for improvement.' };
    return { grade: 'D', message: 'Focus on better credit habits.' };
  };

  const getLoanEligibility = () => {
    if (creditScore >= 740) return { eligible: true, rate: '3.5%', type: 'Excellent rates' };
    if (creditScore >= 670) return { eligible: true, rate: '5.2%', type: 'Good rates' };
    if (creditScore >= 580) return { eligible: true, rate: '8.1%', type: 'Higher rates' };
    return { eligible: false, rate: 'N/A', type: 'Loan denied' };
  };

  if (gameComplete) {
    const scoreRating = getScoreRating(creditScore);
    const finalGrade = getFinalGrade();
    const loanInfo = getLoanEligibility();

    return (
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Credit Score Quest Complete! 🏆</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`p-4 rounded-lg ${scoreRating.bgColor}`}>
              <div className={`text-3xl font-bold ${scoreRating.color}`}>{creditScore}</div>
              <div className={`text-sm ${scoreRating.color}`}>{scoreRating.rating}</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">{creditScore - 600 > 0 ? '+' : ''}{creditScore - 600}</div>
              <div className="text-sm text-blue-700">Score Change</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">{finalGrade.grade}</div>
              <div className="text-sm text-purple-700">Final Grade</div>
            </div>
          </div>

          {/* Loan Simulation */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🏠 Loan Application Simulation</h3>
            <div className={`p-4 rounded-lg ${loanInfo.eligible ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CreditCard className={`w-5 h-5 ${loanInfo.eligible ? 'text-green-600' : 'text-red-600'}`} />
                <span className={`font-semibold ${loanInfo.eligible ? 'text-green-800' : 'text-red-800'}`}>
                  {loanInfo.type}
                </span>
              </div>
              {loanInfo.eligible ? (
                <p className="text-green-700">
                  Congratulations! You qualify for a loan at {loanInfo.rate} interest rate.
                </p>
              ) : (
                <p className="text-red-700">
                  Your application was denied. Work on improving your credit score.
                </p>
              )}
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-2">{finalGrade.message}</p>
          </div>

          {/* Game History */}
          <div className="text-left mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit History</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {gameHistory.map((entry, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-sm text-gray-700">{entry.action}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${entry.scoreChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {entry.scoreChange >= 0 ? '+' : ''}{entry.scoreChange}
                    </span>
                    <span className="text-sm text-gray-600">{entry.newScore}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            onClick={resetGame}
            size="lg"
            icon={RotateCcw}
          >
            Play Again
          </Button>
        </Card>
      </div>
    );
  }

  const scoreRating = getScoreRating(creditScore);

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Credit Score Quest</h2>
            <p className="text-gray-600">Build your credit score through smart decisions</p>
          </div>
        </div>

        {/* Credit Score Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-lg ${scoreRating.bgColor}`}>
            <div className="flex items-center space-x-2 mb-2">
              <Award className={`w-5 h-5 ${scoreRating.color}`} />
              <span className={`text-sm font-medium ${scoreRating.color}`}>Credit Score</span>
            </div>
            <div className={`text-3xl font-bold ${scoreRating.color}`}>
              {creditScore}
            </div>
            <div className={`text-sm ${scoreRating.color}`}>
              {scoreRating.rating}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Progress</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {creditScore - 600 > 0 ? '+' : ''}{creditScore - 600}
            </div>
            <div className="text-xs text-blue-600 mt-1">
              From starting score
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Month</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {month}
            </div>
            <div className="text-xs text-purple-600 mt-1">
              Action {currentActionIndex + 1}/{creditActions.length}
            </div>
          </div>
        </div>

        {/* Credit Score Range */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Credit Score Range</span>
            <span className="text-sm text-gray-600">{creditScore}/850</span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-4">
            <div className="absolute inset-0 flex">
              <div className="bg-red-400 h-4 rounded-l-full" style={{ width: '33.3%' }}></div>
              <div className="bg-yellow-400 h-4" style={{ width: '33.3%' }}></div>
              <div className="bg-green-400 h-4 rounded-r-full" style={{ width: '33.4%' }}></div>
            </div>
            <div
              className="absolute top-0 w-2 h-4 bg-gray-800 rounded-full transform -translate-x-1"
              style={{ left: `${((creditScore - 300) / 550) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>300 (Poor)</span>
            <span>580 (Fair)</span>
            <span>670 (Good)</span>
            <span>850 (Excellent)</span>
          </div>
        </div>

        {/* Current Scenario */}
        <div className="mb-8">
          <div className={`p-6 rounded-lg border-2 ${
            currentAction.scoreChange > 0 ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
          }`}>
            <div className="flex items-start space-x-3">
              {currentAction.scoreChange > 0 ? 
                <TrendingUp className="w-6 h-6 text-green-600 mt-1" /> :
                <TrendingDown className="w-6 h-6 text-red-600 mt-1" />
              }
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Financial Decision #{currentActionIndex + 1}
                </h3>
                <p className="text-gray-700 mb-4">
                  {currentAction.action}
                </p>
                
                <div className="bg-blue-100 border border-blue-300 p-3 rounded-lg">
                  <p className="text-blue-700 text-sm">
                    💡 {currentAction.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            onClick={() => handleActionChoice(true)}
            variant={currentAction.scoreChange > 0 ? 'primary' : 'outline'}
            size="lg"
            className="px-8"
          >
            {currentAction.scoreChange > 0 ? 'Take Action' : 'Do This'}
            <span className={`ml-2 text-sm ${currentAction.scoreChange > 0 ? 'text-green-200' : 'text-red-600'}`}>
              ({currentAction.scoreChange > 0 ? '+' : ''}{currentAction.scoreChange})
            </span>
          </Button>
          <Button
            onClick={() => handleActionChoice(false)}
            variant={currentAction.scoreChange > 0 ? 'outline' : 'primary'}
            size="lg"
            className="px-8"
          >
            {currentAction.scoreChange > 0 ? 'Skip This' : 'Avoid This'}
          </Button>
        </div>

        {/* Credit Tips */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">💳 Credit Score Factors:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
            <div>• Payment History (35%)</div>
            <div>• Credit Utilization (30%)</div>
            <div>• Length of Credit History (15%)</div>
            <div>• Credit Mix (10%)</div>
            <div>• New Credit Inquiries (10%)</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CreditScoreQuest;