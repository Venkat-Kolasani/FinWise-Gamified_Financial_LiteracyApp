import React, { useState } from 'react';
import { bankScenarios } from '../../data/gamesData';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Building2, TrendingUp, TrendingDown, AlertTriangle, Target, RotateCcw } from 'lucide-react';

const BankTycoon: React.FC = () => {
  const [balance, setBalance] = useState(1000);
  const [savingsGoal, setSavingsGoal] = useState(5000);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [gameHistory, setGameHistory] = useState<Array<{
    scenario: string;
    action: string;
    amount: number;
    newBalance: number;
    penalty?: number;
  }>>([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [month, setMonth] = useState(1);

  const currentScenario = bankScenarios[currentScenarioIndex];
  const progressToGoal = (balance / savingsGoal) * 100;

  const handleScenarioAction = (accept: boolean) => {
    let newBalance = balance;
    let penalty = 0;
    let actionTaken = '';

    if (accept) {
      switch (currentScenario.action) {
        case 'deposit':
          newBalance += currentScenario.amount;
          actionTaken = `Deposited $${currentScenario.amount}`;
          break;
        case 'withdraw':
          if (balance >= currentScenario.amount) {
            newBalance -= currentScenario.amount;
            actionTaken = `Withdrew $${currentScenario.amount}`;
          } else {
            actionTaken = 'Withdrawal declined - insufficient funds';
          }
          break;
        case 'overdraft':
          newBalance = balance - currentScenario.amount - (currentScenario.penalty || 0);
          penalty = currentScenario.penalty || 0;
          actionTaken = `Overdraft: -$${currentScenario.amount}, Penalty: -$${penalty}`;
          break;
        case 'interest':
          newBalance += currentScenario.amount;
          actionTaken = `Interest earned: +$${currentScenario.amount}`;
          break;
      }
    } else {
      switch (currentScenario.action) {
        case 'withdraw':
          actionTaken = 'Decided not to withdraw money';
          break;
        case 'overdraft':
          actionTaken = 'Avoided overdraft by declining purchase';
          break;
        default:
          actionTaken = 'Declined action';
      }
    }

    setBalance(newBalance);
    setGameHistory(prev => [...prev, {
      scenario: currentScenario.title,
      action: actionTaken,
      amount: accept ? currentScenario.amount : 0,
      newBalance,
      penalty
    }]);

    // Move to next scenario or complete game
    if (currentScenarioIndex < bankScenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setMonth(prev => prev + 1);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setBalance(1000);
    setSavingsGoal(5000);
    setCurrentScenarioIndex(0);
    setGameHistory([]);
    setGameComplete(false);
    setMonth(1);
  };

  const getBalanceColor = () => {
    if (balance < 0) return 'text-red-600';
    if (balance < 500) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getFinalScore = () => {
    let score = 0;
    
    // Base score from final balance
    score += Math.max(0, balance);
    
    // Bonus for reaching savings goal
    if (balance >= savingsGoal) score += 1000;
    
    // Penalty for overdrafts
    const overdraftPenalties = gameHistory.reduce((sum, entry) => sum + (entry.penalty || 0), 0);
    score -= overdraftPenalties * 2;
    
    return Math.max(0, score);
  };

  if (gameComplete) {
    return (
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bank Tycoon Complete! 🏦</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className={`text-2xl font-bold ${getBalanceColor()}`}>${balance.toLocaleString()}</div>
              <div className="text-sm text-blue-700">Final Balance</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{progressToGoal.toFixed(1)}%</div>
              <div className="text-sm text-green-700">Goal Progress</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{getFinalScore()}</div>
              <div className="text-sm text-purple-700">Final Score</div>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-2">
              {balance >= savingsGoal 
                ? "Congratulations! You reached your savings goal! 🎯"
                : balance > 0
                ? "Good job managing your account! Keep working toward your goal. 💪"
                : "Oops! You went into debt. Remember to avoid overdrafts! 📚"
              }
            </p>
          </div>

          {/* Game History */}
          <div className="text-left mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction History</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {gameHistory.map((entry, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">{entry.action}</span>
                  <span className={`text-sm font-medium ${entry.newBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${entry.newBalance.toLocaleString()}
                  </span>
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

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Bank Tycoon</h2>
            <p className="text-gray-600">Manage your bank account wisely</p>
          </div>
        </div>

        {/* Account Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Account Balance</span>
            </div>
            <div className={`text-2xl font-bold ${getBalanceColor()}`}>
              ${balance.toLocaleString()}
            </div>
            {balance < 0 && (
              <div className="text-xs text-red-600 mt-1">Overdraft!</div>
            )}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">Savings Goal</span>
            </div>
            <div className="text-2xl font-bold text-green-600">
              ${savingsGoal.toLocaleString()}
            </div>
            <div className="text-xs text-green-600 mt-1">
              {progressToGoal.toFixed(1)}% complete
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Month</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {month}
            </div>
            <div className="text-xs text-purple-600 mt-1">
              Scenario {currentScenarioIndex + 1}/{bankScenarios.length}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress to Savings Goal</span>
            <span className="text-sm text-gray-600">{progressToGoal.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, progressToGoal)}%` }}
            />
          </div>
        </div>

        {/* Current Scenario */}
        <div className="mb-8">
          <div className={`p-6 rounded-lg border-2 ${
            currentScenario.impact === 'positive' ? 'border-green-200 bg-green-50' :
            currentScenario.impact === 'negative' ? 'border-red-200 bg-red-50' :
            'border-blue-200 bg-blue-50'
          }`}>
            <div className="flex items-start space-x-3">
              {currentScenario.impact === 'positive' && <TrendingUp className="w-6 h-6 text-green-600 mt-1" />}
              {currentScenario.impact === 'negative' && <TrendingDown className="w-6 h-6 text-red-600 mt-1" />}
              {currentScenario.impact === 'neutral' && <AlertTriangle className="w-6 h-6 text-blue-600 mt-1" />}
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentScenario.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {currentScenario.description}
                </p>
                
                {currentScenario.action === 'overdraft' && (
                  <div className="bg-red-100 border border-red-300 p-3 rounded-lg mb-4">
                    <p className="text-red-700 text-sm">
                      ⚠️ Warning: This will result in a ${currentScenario.penalty} overdraft fee!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          {currentScenario.action === 'deposit' || currentScenario.action === 'interest' ? (
            <Button
              onClick={() => handleScenarioAction(true)}
              size="lg"
              className="px-8"
            >
              Accept
            </Button>
          ) : (
            <>
              <Button
                onClick={() => handleScenarioAction(true)}
                variant={currentScenario.impact === 'negative' ? 'outline' : 'primary'}
                size="lg"
                className="px-8"
              >
                {currentScenario.action === 'withdraw' ? 'Withdraw' : 
                 currentScenario.action === 'overdraft' ? 'Proceed Anyway' : 'Accept'}
              </Button>
              <Button
                onClick={() => handleScenarioAction(false)}
                variant={currentScenario.impact === 'negative' ? 'primary' : 'outline'}
                size="lg"
                className="px-8"
              >
                {currentScenario.action === 'withdraw' ? 'Keep Money' : 
                 currentScenario.action === 'overdraft' ? 'Decline Purchase' : 'Decline'}
              </Button>
            </>
          )}
        </div>

        {/* Tips */}
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">💡 Banking Tips:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Keep track of your balance to avoid overdraft fees</li>
            <li>• Set up automatic transfers to build savings consistently</li>
            <li>• Emergency funds should cover 3-6 months of expenses</li>
            <li>• Interest compounds over time - start saving early!</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default BankTycoon;