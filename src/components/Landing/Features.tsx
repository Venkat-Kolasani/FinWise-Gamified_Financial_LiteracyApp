import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, BookOpen, Gamepad2, TrendingUp, PieChart, CreditCard, PiggyBank as Piggybank } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Features: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'Interactive Quizzes',
      description: 'Test your knowledge across 4 financial topics with instant feedback and explanations.',
      color: 'from-emerald-400 to-teal-500',
      action: () => navigate('/quiz')
    },
    {
      icon: BookOpen,
      title: 'Daily Tips',
      description: 'Discover bite-sized financial wisdom to improve your money management skills.',
      color: 'from-blue-400 to-indigo-500',
      action: () => navigate('/tips')
    },
    {
      icon: Gamepad2,
      title: 'Mini Games',
      description: 'Learn through play with engaging games that make financial concepts stick.',
      color: 'from-purple-400 to-pink-500',
      action: () => navigate('/games')
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Visualize your learning journey with achievements, streaks, and detailed progress.',
      color: 'from-orange-400 to-red-500',
      action: () => navigate('/progress')
    }
  ];

  const topics = [
    {
      icon: PieChart,
      title: 'Budgeting Basics',
      description: 'Master the 50/30/20 rule and learn to track your spending effectively.'
    },
    {
      icon: Piggybank,
      title: 'Saving & Banking',
      description: 'Understand compound interest, emergency funds, and banking basics.'
    },
    {
      icon: CreditCard,
      title: 'Credit & Loans',
      description: 'Build credit history and understand borrowing responsibly.'
    },
    {
      icon: TrendingUp,
      title: 'Investing Basics',
      description: 'Start your wealth-building journey with investment fundamentals.'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose FinWise?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make financial literacy fun, interactive, and accessible for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover gradient className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button
                  onClick={feature.action}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Explore
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Topics Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What You'll Learn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial education across four essential topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card key={index} hover className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-primary-400 to-primary-600 p-3 rounded-xl flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="p-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are already mastering their money
            </p>
            <Button
              onClick={() => navigate('/quiz')}
              className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4"
              size="lg"
            >
              Begin Learning Now
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;