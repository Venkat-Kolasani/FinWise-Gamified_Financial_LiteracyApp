import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Sparkles, TrendingUp } from 'lucide-react';
import Button from '../UI/Button';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 text-white">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Made for students, by students</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Master Your Money
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Through Play
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Learn saving, budgeting, investing, and more — one question at a time!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => navigate('/quiz')}
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 px-8 py-4 text-lg font-semibold"
              icon={Play}
            >
              Start Quiz
            </Button>
            <Button
              onClick={() => navigate('/about')}
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-white/80">Learning Levels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-white/80">Mini Games</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V120z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;