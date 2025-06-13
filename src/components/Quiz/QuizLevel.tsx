import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizLevel as QuizLevelType } from '../../types';
import { useProgress } from '../../hooks/useProgress';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ProgressBar from '../UI/ProgressBar';
import * as Icons from 'lucide-react';

interface QuizLevelProps {
  level: QuizLevelType;
}

const QuizLevel: React.FC<QuizLevelProps> = ({ level }) => {
  const navigate = useNavigate();
  const { progress } = useProgress();
  
  const Icon = Icons[level.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  
  const completedQuestions = level.questions.filter(q => 
    progress.completedQuestions.includes(q.id)
  ).length;
  
  const progressPercentage = (completedQuestions / level.questions.length) * 100;
  const isCompleted = completedQuestions === level.questions.length;

  return (
    <Card hover className="p-6">
      <div className="flex items-start space-x-4">
        <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{level.title}</h3>
            {isCompleted && (
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                Completed
              </div>
            )}
          </div>
          
          <p className="text-gray-600 mb-4">{level.description}</p>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Progress</span>
              <span className="text-sm font-medium text-gray-700">
                {completedQuestions}/{level.questions.length} questions
              </span>
            </div>
            <ProgressBar progress={progressPercentage} showPercentage />
          </div>
          
          <Button
            onClick={() => navigate(`/quiz/${level.id}`)}
            variant={isCompleted ? 'secondary' : 'primary'}
            className="w-full sm:w-auto"
          >
            {isCompleted ? 'Review Level' : completedQuestions > 0 ? 'Continue' : 'Start Level'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuizLevel;