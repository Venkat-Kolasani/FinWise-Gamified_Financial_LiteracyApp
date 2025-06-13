import React, { useState, useEffect } from 'react';
import { rapidFireQuestions } from '../../data/gamesData';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Zap, Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const RapidFire: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameState, setGameState] = useState<'playing' | 'finished'>('playing');
  const [answers, setAnswers] = useState<Array<{ correct: boolean; timeUsed: number }>>([]);

  const currentQuestion = rapidFireQuestions[currentQuestionIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimeout();
    }

    return () => clearTimeout(timer);
  }, [timeLeft, gameState]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (gameState !== 'playing') return;
    
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correct;
    const timeUsed = 10 - timeLeft;
    
    if (isCorrect) {
      const points = Math.max(1, 10 - timeUsed); // More points for faster answers
      setScore(prev => prev + points);
    }
    
    setAnswers(prev => [...prev, { correct: isCorrect, timeUsed }]);
    
    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const handleTimeout = () => {
    setAnswers(prev => [...prev, { correct: false, timeUsed: 10 }]);
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < rapidFireQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(10);
    } else {
      setGameState('finished');
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(10);
    setGameState('playing');
    setAnswers([]);
  };

  const correctAnswers = answers.filter(a => a.correct).length;
  const averageTime = answers.length > 0 
    ? answers.reduce((sum, a) => sum + a.timeUsed, 0) / answers.length 
    : 0;

  if (gameState === 'finished') {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Game Complete! 🎉</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">{score}</div>
              <div className="text-sm text-primary-700">Total Points</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{correctAnswers}/{rapidFireQuestions.length}</div>
              <div className="text-sm text-green-700">Correct Answers</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{averageTime.toFixed(1)}s</div>
              <div className="text-sm text-blue-700">Avg. Time per Q</div>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-2">
              Accuracy: {Math.round((correctAnswers / rapidFireQuestions.length) * 100)}%
            </p>
            <p className="text-gray-600">
              {correctAnswers === rapidFireQuestions.length 
                ? "Perfect score! You're a financial literacy champion! 🏆"
                : correctAnswers >= rapidFireQuestions.length * 0.8
                ? "Excellent work! You really know your stuff! 🌟"
                : correctAnswers >= rapidFireQuestions.length * 0.6
                ? "Good job! A few more practice sessions and you'll be a pro! 📚"
                : "Keep learning! Practice makes perfect! 💪"
              }
            </p>
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
    <div className="max-w-2xl mx-auto">
      <Card className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Rapid Fire</h2>
              <p className="text-gray-600">Quick financial questions</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-500">Score</div>
              <div className="text-xl font-bold text-gray-900">{score}</div>
            </div>
            <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
              timeLeft <= 3 ? 'border-red-500 bg-red-50' : 'border-primary-500 bg-primary-50'
            }`}>
              <div className="text-center">
                <Clock className={`w-4 h-4 mx-auto mb-1 ${timeLeft <= 3 ? 'text-red-600' : 'text-primary-600'}`} />
                <div className={`text-lg font-bold ${timeLeft <= 3 ? 'text-red-600' : 'text-primary-600'}`}>
                  {timeLeft}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
          <span>Question {currentQuestionIndex + 1} of {rapidFireQuestions.length}</span>
          <div className="w-48 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex) / rapidFireQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let buttonClasses = 'w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ';
              
              if (selectedAnswer === null) {
                buttonClasses += 'border-gray-200 hover:border-primary-300 hover:bg-primary-50 cursor-pointer';
              } else {
                if (index === currentQuestion.correct) {
                  buttonClasses += 'border-green-500 bg-green-50';
                } else if (selectedAnswer === index) {
                  buttonClasses += 'border-red-500 bg-red-50';
                } else {
                  buttonClasses += 'border-gray-200 bg-gray-50 opacity-60';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClasses}
                  disabled={selectedAnswer !== null}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                      {selectedAnswer !== null && index === currentQuestion.correct && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {selectedAnswer === index && index !== currentQuestion.correct && (
                        <XCircle className="w-4 h-4" />
                      )}
                      {selectedAnswer === null && (
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
        </div>

        {/* Time up message */}
        {timeLeft === 0 && selectedAnswer === null && (
          <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 font-medium">Time's up! ⏰</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default RapidFire;