export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
  level: number;
}

export interface QuizLevel {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

export interface UserProgress {
  completedQuestions: string[];
  currentLevel: string;
  score: number;
  achievements: string[];
  streak: number;
  lastVisit: Date;
}

export interface DailyTip {
  id: string;
  title: string;
  content: string;
  category: string;
  icon: string;
}

export interface MiniGame {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: number;
  unlocked: boolean;
}