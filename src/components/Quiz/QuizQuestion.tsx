import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, Home } from 'lucide-react';
import { quizLevels } from '../../data/quizData';
import { useProgress } from '../../hooks/useProgress';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ProgressBar from '../UI/ProgressBar';

const QuizQuestion: React.FC = () => {
  const { levelId, questionIndex } = useParams();
  const navigate = useNavigate();
  const { progress, completeQuestion } = useProgress();
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const level = quizLevels.find(l => l.id === levelId);
  const currentQuestionIndex = parseInt(questionIndex || '0');
  const question = level?.questions[currentQuestionIndex];

  if (!level || !question) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Question not found</h1>
        <Button onClick={() => navigate('/quiz')}>Back to Quiz</Button>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === question.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    // Update progress
    completeQuestion(question.id, correct);
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < level.questions.length) {
      navigate(`/quiz/${levelId}/${nextIndex}`);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsCorrect(false);
    } else {
      // Level completed
      navigate('/quiz');
    }
  };

  const handlePrevious = () => {
    const prevIndex = currentQuestionIndex - 1;
    if (prevIndex >= 0) {
      navigate(`/quiz/${levelId}/${prevIndex}`);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsCorrect(false);
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / level.questions.length) * 100;
  const isCompleted = progress.completedQuestions.includes(question.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={() => navigate('/quiz')}
            variant="ghost"
            icon={Home}
            size="sm"
          >
            Back to Quiz
          </Button>
          <div className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {level.questions.length}
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{level.title}</h1>
        <ProgressBar progress={progressPercentage} showPercentage />
      </div>

      {/* Question Card */}
      <Card className="p-8 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let buttonClasses = 'w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ';
            
            if (!showResult) {
              buttonClasses += selectedAnswer === index
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50';
            } else {
              if (index === question.correctAnswer) {
                buttonClasses += 'border-green-500 bg-green-50 text-green-700';
              } else if (selectedAnswer === index && !isCorrect) {
                buttonClasses += 'border-red-500 bg-red-50 text-red-700';
              } else {
                buttonClasses += 'border-gray-200 bg-gray-50 text-gray-500';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={buttonClasses}
                disabled={showResult}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                    {showResult && index === question.correctAnswer && (
                      <CheckCircle className="w-5 h-5" />
                    )}
                    {showResult && selectedAnswer === index && !isCorrect && (
                      <XCircle className="w-5 h-5" />
                    )}
                    {!showResult && (
                      <span className="text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Result Feedback */}
        {showResult && (
          <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center space-x-2 mb-2">
              {isCorrect ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-800">Incorrect</span>
                </>
              )}
            </div>
            <p className={`${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {question.explanation}
            </p>
          </div>
        )}
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          onClick={handlePrevious}
          variant="outline"
          icon={ArrowLeft}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>

        {showResult && (
          <Button
            onClick={handleNext}
            icon={ArrowRight}
            iconPosition="right"
          >
            {currentQuestionIndex + 1 === level.questions.length ? 'Finish Level' : 'Next Question'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;