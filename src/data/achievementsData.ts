import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-quiz',
    title: 'Getting Started',
    description: 'Complete your first quiz question',
    icon: 'Award',
    requirement: 1,
    unlocked: false
  },
  {
    id: 'budget-boss',
    title: 'Budget Boss',
    description: 'Complete all budgeting questions',
    icon: 'Crown',
    requirement: 3,
    unlocked: false
  },
  {
    id: 'saving-star',
    title: 'Saving Star',
    description: 'Complete all saving & banking questions',
    icon: 'Star',
    requirement: 3,
    unlocked: false
  },
  {
    id: 'credit-champion',
    title: 'Credit Champion',
    description: 'Master credit and loan concepts',
    icon: 'Trophy',
    requirement: 3,
    unlocked: false
  },
  {
    id: 'investment-guru',
    title: 'Investment Guru',
    description: 'Complete all investing questions',
    icon: 'Target',
    requirement: 3,
    unlocked: false
  },
  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description: 'Get 100% on any quiz level',
    icon: 'Medal',
    requirement: 1,
    unlocked: false
  },
  {
    id: 'streak-master',
    title: 'Streak Master',
    description: 'Visit FinWise for 7 days in a row',
    icon: 'Flame',
    requirement: 7,
    unlocked: false
  }
];