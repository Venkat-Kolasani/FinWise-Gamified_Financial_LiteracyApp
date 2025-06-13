import React from 'react';
import { UserProgress } from '../../types';
import { quizLevels } from '../../data/quizData';
import Card from '../UI/Card';
import ProgressBar from '../UI/ProgressBar';
import { Target, Trophy, Star, Flame, BookOpen, TrendingUp } from 'lucide-react';

interface ProgressStatsProps {
  progress: UserProgress;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({ progress }) => {
  const totalQuestions = quizLevels.reduce((sum, level) => sum + level.questions.length, 0);
  const completedQuestions = progress.completedQuestions.length;
  const completionRate = Math.round((completedQuestions / totalQuestions) * 100);
  
  // Calculate level progress
  const levelProgress = quizLevels.map(level => {
    const levelCompleted = level.questions.filter(q => 
      progress.completedQuestions.includes(q.id)
    ).length;
    return {
      ...level,
      completed: levelCompleted,
      total: level.questions.length,
      percentage: Math.round((levelCompleted / level.questions.length) * 100)
    };
  });

  const completedLevels = levelProgress.filter(level => level.completed === level.total).length;

  const stats = [
    {
      icon: Target,
      label: 'Questions Completed',
      value: `${completedQuestions}/${totalQuestions}`,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      icon: Trophy,
      label: 'Total Score',
      value: progress.score.toLocaleString(),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Star,
      label: 'Achievements',
      value: progress.achievements.length,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Flame,
      label: 'Learning Streak',
      value: `${progress.streak} days`,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: BookOpen,
      label: 'Levels Completed',
      value: `${completedLevels}/${quizLevels.length}`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: TrendingUp,
      label: 'Overall Progress',
      value: `${completionRate}%`,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-4 text-center">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </Card>
          );
        })}
      </div>

      {/* Overall Progress */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Overall Progress</h3>
          <span className="text-sm text-gray-600">{completionRate}% Complete</span>
        </div>
        <ProgressBar progress={completionRate} size="lg" showPercentage />
        <p className="text-sm text-gray-600 mt-2">
          You've completed {completedQuestions} out of {totalQuestions} questions across all levels
        </p>
      </Card>

      {/* Level Breakdown */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Level Progress</h3>
        <div className="space-y-4">
          {levelProgress.map((level) => (
            <div key={level.id}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{level.title}</h4>
                <span className="text-sm text-gray-600">
                  {level.completed}/{level.total} questions
                </span>
              </div>
              <ProgressBar progress={level.percentage} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProgressStats;