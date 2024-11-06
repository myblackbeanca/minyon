import React from 'react';
import { Crown, Star } from 'lucide-react';

export const TopFansOverview: React.FC = () => {
  const topFans = [
    {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      score: 98,
      interactions: 234,
      purchases: 12,
    },
    {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      score: 95,
      interactions: 198,
      purchases: 8,
    },
    {
      name: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      score: 92,
      interactions: 167,
      purchases: 7,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Top Fans</h2>
        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
          View all 50
        </button>
      </div>
      <div className="space-y-4">
        {topFans.map((fan, index) => (
          <div
            key={fan.name}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="relative">
              <img
                src={fan.avatar}
                alt={fan.name}
                className="h-10 w-10 rounded-full"
              />
              {index === 0 && (
                <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
                  <Crown className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {fan.name}
                </p>
                <div className="ml-2 flex items-center">
                  <Star className="h-3 w-3 text-yellow-400" />
                  <span className="ml-1 text-xs text-gray-500">{fan.score}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                {fan.interactions} interactions • {fan.purchases} purchases
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};