import React from 'react';
import { Users, Heart, Share2, MessageCircle, ShoppingBag } from 'lucide-react';

interface MetricsOverviewProps {
  timeFilter: '7d' | '1m' | '1y';
  setTimeFilter: (filter: '7d' | '1m' | '1y') => void;
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ timeFilter, setTimeFilter }) => {
  const metrics = [
    { icon: Users, label: 'Total Views', value: '2.4M' },
    { icon: Heart, label: 'Likes', value: '847K' },
    { icon: Share2, label: 'Shares', value: '234K' },
    { icon: MessageCircle, label: 'Comments', value: '156K' },
    { icon: ShoppingBag, label: 'Purchases', value: '23K' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Key Metrics</h2>
        <div className="flex space-x-2">
          {(['7d', '1m', '1y'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setTimeFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                timeFilter === filter
                  ? 'bg-purple-100 text-purple-800'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {filter === '7d' ? '7 days' : filter === '1m' ? '1 month' : '1 year'}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {metrics.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Icon className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-xl font-semibold text-gray-900">{value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};