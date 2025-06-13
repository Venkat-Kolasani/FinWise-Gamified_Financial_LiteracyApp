import React, { useState } from 'react';
import { miniGames } from '../../data/gamesData';
import Card from '../UI/Card';
import Button from '../UI/Button';
import InflationExplorer from './InflationExplorer';
import SpendOrSave from './SpendOrSave';
import RapidFire from './RapidFire';
import BudgetBuilder from './BudgetBuilder';
import ReceiptRumble from './ReceiptRumble';
import BankTycoon from './BankTycoon';
import CreditScoreQuest from './CreditScoreQuest';
import * as Icons from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const renderGame = () => {
    switch (selectedGame) {
      case 'inflation-explorer':
        return <InflationExplorer />;
      case 'spend-or-save':
        return <SpendOrSave />;
      case 'rapid-fire':
        return <RapidFire />;
      case 'budget-builder':
        return <BudgetBuilder />;
      case 'receipt-rumble':
        return <ReceiptRumble />;
      case 'bank-tycoon':
        return <BankTycoon />;
      case 'credit-score-quest':
        return <CreditScoreQuest />;
      default:
        return null;
    }
  };

  if (selectedGame) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button
            onClick={() => setSelectedGame(null)}
            variant="ghost"
            icon={ArrowLeft}
            size="sm"
          >
            Back to Games
          </Button>
        </div>
        {renderGame()}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Financial Mini Games
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn financial concepts through fun, interactive games that make complex topics easy to understand
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
        {miniGames.map((game) => {
          const Icon = Icons[game.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
          
          return (
            <Card key={game.id} hover className="p-8 text-center">
              <div className={`w-20 h-20 bg-gradient-to-r ${game.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {game.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {game.description}
              </p>
              
              <Button
                onClick={() => setSelectedGame(game.id)}
                size="lg"
                className="w-full"
              >
                Play Game
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Benefits Section */}
      <div className="text-center">
        <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Learn Through Games?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🧠 Better Retention</h3>
              <p className="text-gray-600 text-sm">
                Interactive gameplay helps you remember financial concepts longer than traditional learning
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🎯 Practical Application</h3>
              <p className="text-gray-600 text-sm">
                Practice making financial decisions in safe, simulated environments
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">⚡ Engaging Learning</h3>
              <p className="text-gray-600 text-sm">
                Stay motivated and engaged while building essential money management skills
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Games;