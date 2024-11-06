import React from 'react';
import { Music, Ticket, ShoppingBag, Video } from 'lucide-react';

export const JourneyMetrics: React.FC = () => {
  const journeys = [
    {
      icon: Music,
      name: 'Music Launch',
      engagement: 85,
      trend: '+12%',
    },
    {
      icon: Ticket,
      name: 'Event Access',
      engagement: 78,
      trend: '+8%',
    },
    {
      icon: ShoppingBag,
      name: 'Merch Store',
      engagement: 92,
      trend: '+15%',
    },
    {
      icon: Video,
      name: 'Virtual Meet',
      engagement: 88,
      trend: '+10%',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Journey Performance</h2>
      <div className="space-y-4">
        {journeys.map((journey) => {
          const Icon = journey.icon;
          return (
            <div key={journey.name} className="flex items-center space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Icon className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{journey.name}</p>
                  <span className="text-sm text-green-500">{journey.trend}</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 rounded-full h-2"
                    style={{ width: `${journey.engagement}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};