import React from 'react';
import { GraduationCap, Users, Target, BookOpen, Award, Lightbulb } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const About: React.FC = () => {
  const stats = [
    { number: '80%', text: 'of students never learn about budgeting in school' },
    { number: '64%', text: 'of Americans can\'t cover a $400 emergency expense' },
    { number: '21%', text: 'is the average credit card interest rate' },
    { number: '7%', text: 'average annual stock market return over time' }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Four essential topics covering budgeting, saving, credit, and investing basics'
    },
    {
      icon: Target,
      title: 'Gamified Learning',
      description: 'Interactive quizzes, mini-games, and achievement system to keep you engaged'
    },
    {
      icon: Award,
      title: 'Progress Tracking',
      description: 'Visual progress indicators and achievements to celebrate your learning milestones'
    },
    {
      icon: Lightbulb,
      title: 'Practical Tips',
      description: 'Daily bite-sized financial wisdom you can apply immediately in real life'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About FinWise
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're on a mission to make financial literacy accessible, engaging, and fun for everyone. 
          Built by students, for students, FinWise transforms complex financial concepts into 
          interactive learning experiences.
        </p>
      </div>

      {/* Problem Statement */}
      <div className="mb-16">
        <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            The Financial Literacy Crisis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 text-sm">{stat.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 italic">
            "The lack of financial education is a crisis that affects millions of people worldwide."
          </p>
        </Card>
      </div>

      {/* Our Solution */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FinWise makes financial education engaging through gamification, interactive content, 
            and personalized learning paths that adapt to your progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Our Mission */}
      <Card className="p-8 mb-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            To empower the next generation with essential financial knowledge through innovative, 
            accessible, and engaging educational experiences that transform how people learn about money.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">🎯 Accessible</h3>
              <p className="opacity-90 text-sm">Free, web-based platform available to everyone</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">🎮 Engaging</h3>
              <p className="opacity-90 text-sm">Gamified learning keeps you motivated and interested</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">📚 Comprehensive</h3>
              <p className="opacity-90 text-sm">Covers all essential financial topics in depth</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Why It Matters */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Financial Literacy Matters</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Impact</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Make informed decisions about spending and saving</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Avoid costly financial mistakes and debt traps</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Build wealth through smart investing strategies</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Achieve financial independence and security</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Societal Impact</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Reduce economic inequality and poverty</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Create more stable financial systems</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Empower communities to make better choices</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Build a financially literate next generation</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <Card className="p-8 mb-16 bg-gradient-to-r from-gray-50 to-primary-50">
        <div className="text-center">
          <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Made for Students, by Students</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            FinWise was created by a team of passionate students who recognized the gap in financial 
            education. We understand the challenges students face because we've been there too. 
            Our platform is designed with real student needs in mind.
          </p>
        </div>
      </Card>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Start Your Financial Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of students who are already building their financial future. 
          Start learning today with our interactive quizzes and games.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.location.href = '/quiz'}
            size="lg"
            className="px-8"
          >
            Start Learning
          </Button>
          <Button
            onClick={() => window.location.href = '/games'}
            variant="outline"
            size="lg"
            className="px-8"
          >
            Explore Games
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;