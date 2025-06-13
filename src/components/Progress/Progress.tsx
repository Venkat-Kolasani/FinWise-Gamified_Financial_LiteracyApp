import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { achievements } from '../../data/achievementsData';
import ProgressStats from './ProgressStats';
import AchievementBadge from './AchievementBadge';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Calendar, Award } from 'lucide-react';

const Progress: React.FC = () => {
  const { progress } = useProgress();

  const lastVisitDate = new Date(progress.lastVisit).toLocaleDateString();
  
  const achievementsWithStatus = achievements.map(achievement => ({
    ...achievement,
    unlocked: progress.achievements.includes(achievement.id)
  }));

  const unlockedAchievements = achievementsWithStatus.filter(a => a.unlocked);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Your Learning Progress
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Track your financial literacy journey and celebrate your achievements
        </p>
      </div>

      {/* Welcome Back */}
      <Card className="p-6 mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Calendar className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Welcome back!</h2>
            <p className="opacity-90">
              Last visit: {lastVisitDate} • Learning streak: {progress.streak} days
            </p>
          </div>
        </div>
      </Card>

      {/* Progress Stats */}
      <ProgressStats progress={progress} />

      {/* Achievements Section */}
      <div className="mt-12">
        <div className="flex items-center space-x-3 mb-8">
          <Award className="w-6 h-6 text-yellow-600" />
          <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
          <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
            {unlockedAchievements.length}/{achievements.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {achievementsWithStatus.map((achievement) => (
            <AchievementBadge
              key={achievement.id}
              achievement={achievement}
              unlocked={achievement.unlocked}
            />
          ))}
        </div>

        {/* Motivation Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary-50 to-secondary-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Keep Up the Great Work! 🌟
          </h3>
          <p className="text-gray-600 mb-6">
            {unlockedAchievements.length === 0 
              ? "Start your learning journey and unlock your first achievement!"
              : unlockedAchievements.length === achievements.length
              ? "Congratulations! You've unlocked all achievements. You're a financial literacy champion!"
              : "You're making excellent progress! Keep learning to unlock more achievements."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = '/quiz'}
              size="lg"
            >
              Continue Learning
            </Button>
            <Button
              onClick={() => window.location.href = '/games'}
              variant="outline"
              size="lg"
            >
              Play Games
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Progress;