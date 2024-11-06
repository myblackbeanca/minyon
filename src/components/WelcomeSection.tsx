import React from 'react';
import { Sparkles, TrendingUp, Users, Star } from 'lucide-react';

export const WelcomeSection: React.FC = () => {
  const quickStats = [
    { icon: Users, label: 'Total MINYONS', value: '12.5K', trend: '+15%' },
    { icon: Star, label: 'Avg. Engagement', value: '89%', trend: '+5%' },
    { icon: TrendingUp, label: 'Monthly Growth', value: '23%', trend: '+8%' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center space-x-6 mb-4 lg:mb-0">
          <img
            className="h-24 w-24 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Artist profile"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah!</h1>
            <p className="text-gray-500 mt-1">Here's what's happening with your MINYONS today</p>
            <div className="mt-4 flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                <Sparkles className="h-4 w-4 mr-1" />
                New milestone: 1M followers
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {quickStats.map(({ icon: Icon, label, value, trend }) => (
            <div key={label} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Icon className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">{label}</span>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-xl font-semibold text-gray-900">{value}</span>
                <span className="text-sm text-green-600">{trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};