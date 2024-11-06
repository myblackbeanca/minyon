import React from 'react';
import { Play, Music2, MessageCircle, BarChart3 } from 'lucide-react';

interface EngagementStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

const MusicTeasersDashboard: React.FC = () => {
  const stats: EngagementStat[] = [
    {
      label: 'Total Plays',
      value: '24.5K',
      change: '+12%',
      trend: 'up'
    },
    {
      label: 'Unique Listeners',
      value: '8.2K',
      change: '+8%',
      trend: 'up'
    },
    {
      label: 'Correct Lyric Guesses',
      value: '3.1K',
      change: '+15%',
      trend: 'up'
    },
    {
      label: 'Fan Messages',
      value: '942',
      change: '+5%',
      trend: 'up'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Music Teasers Dashboard</h1>
        <p className="text-gray-600">Track engagement with unreleased music and fan interactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {index === 0 && <Play className="h-5 w-5 text-indigo-600 mr-2" />}
                {index === 1 && <Music2 className="h-5 w-5 text-indigo-600 mr-2" />}
                {index === 2 && <BarChart3 className="h-5 w-5 text-indigo-600 mr-2" />}
                {index === 3 && <MessageCircle className="h-5 w-5 text-indigo-600 mr-2" />}
                <span className="font-medium text-gray-900">{stat.label}</span>
              </div>
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <span className={`ml-2 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Latest Snippet Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Music2 className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Teaser {item}</p>
                    <p className="text-sm text-gray-500">Released 2 days ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">2.4K plays</p>
                  <p className="text-sm text-green-600">+125 today</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Fan Feedback</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <MessageCircle className="h-5 w-5 text-indigo-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Fan {item}</p>
                  <p className="text-sm text-gray-600">This is going to be your best release yet! Can't wait for the full track.</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicTeasersDashboard;