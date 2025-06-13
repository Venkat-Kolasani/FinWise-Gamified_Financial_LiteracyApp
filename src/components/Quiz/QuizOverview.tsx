import React from 'react';
import { Trophy, Target, Clock, Star } from 'lucide-react';
import { quizLevels } from '../../data/quizData';
import { useProgress } from '../../hooks/useProgress';
import QuizLevel from './QuizLevel';
import Card from '../UI/Card';

const QuizOverview: React.FC = () => {
  const { progress } = useProgress();

  const totalQuestions = quizLevels.reduce((sum, level) => sum + level.questions.length, 0);
  const completedQuestions = progress.completedQuestions.length;
  const completionRate = Math.round((completedQuestions / totalQuestions) * 100);

  const stats = [
    {
      icon: Target,
      label: 'Questions Completed',
      value: `${completedQuestions}/${totalQuestions}`,
      color: 'text-primary-600'
    },
    {
      icon: Trophy,
      label: 'Current Score',
      value: progress.score.toLocaleString(),
      color: 'text-yellow-600'
    },
    {
      icon: Star,
      label: 'Achievements',
      value: progress.achievements.length,
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      label: 'Learning Streak',
      value: `${progress.streak} days`,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Financial Literacy Quiz
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Test and improve your financial knowledge across four essential topics
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6 text-center">
              <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          );
        })}
      </div>

      {/* Progress Banner */}
      {completedQuestions > 0 && (
        <Card className="p-6 mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Great Progress! 🎉</h3>
              <p className="opacity-90">
                You've completed {completionRate}% of all quiz questions. Keep going!
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{completionRate}%</div>
              <div className="text-sm opacity-90">Complete</div>
            </div>
          </div>
        </Card>
      )}

      {/* Quiz Levels */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Learning Path</h2>
        {quizLevels.map((level) => (
          <QuizLevel key={level.id} level={level} />
        ))}
      </div>
    </div>
  );
};

export default QuizOverview;