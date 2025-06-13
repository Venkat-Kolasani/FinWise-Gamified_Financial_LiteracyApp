import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { UserProgress } from '../types';
import { achievements } from '../data/achievementsData';

const initialProgress: UserProgress = {
  completedQuestions: [],
  currentLevel: 'budgeting',
  score: 0,
  achievements: [],
  streak: 0,
  lastVisit: new Date()
};

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<UserProgress>('finwise-progress', initialProgress);

  const updateProgress = (updates: Partial<UserProgress>) => {
    setProgress(prev => ({
      ...prev,
      ...updates,
      lastVisit: new Date()
    }));
  };

  const completeQuestion = (questionId: string, isCorrect: boolean) => {
    setProgress(prev => {
      const newCompleted = [...prev.completedQuestions];
      if (!newCompleted.includes(questionId)) {
        newCompleted.push(questionId);
      }

      const newScore = isCorrect ? prev.score + 10 : prev.score;
      
      // Check for achievements
      const newAchievements = [...prev.achievements];
      
      // First quiz achievement
      if (newCompleted.length === 1 && !newAchievements.includes('first-quiz')) {
        newAchievements.push('first-quiz');
      }

      return {
        ...prev,
        completedQuestions: newCompleted,
        score: newScore,
        achievements: newAchievements,
        lastVisit: new Date()
      };
    });
  };

  const unlockAchievement = (achievementId: string) => {
    setProgress(prev => {
      if (!prev.achievements.includes(achievementId)) {
        return {
          ...prev,
          achievements: [...prev.achievements, achievementId]
        };
      }
      return prev;
    });
  };

  // Calculate streak
  useEffect(() => {
    const today = new Date();
    const lastVisit = new Date(progress.lastVisit);
    const daysDiff = Math.floor((today.getTime() - lastVisit.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 1) {
      // Consecutive day
      updateProgress({ streak: progress.streak + 1 });
    } else if (daysDiff > 1) {
      // Streak broken
      updateProgress({ streak: 0 });
    }
  }, []);

  return {
    progress,
    updateProgress,
    completeQuestion,
    unlockAchievement
  };
}