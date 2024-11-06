import React from 'react';
import { Users, Music2, Heart } from 'lucide-react';

interface EngagementMetricsProps {
  totalFans: number;
  engagement: number;
  monthlyListens: number;
}

export default function EngagementMetrics({ 
  totalFans, 
  engagement, 
  monthlyListens 
}: EngagementMetricsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Engagement Metrics</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="w-5 h-5 text-purple-600 mr-2" />
            <span>Total Fans</span>
          </div>
          <span className="font-medium">{totalFans.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Heart className="w-5 h-5 text-purple-600 mr-2" />
            <span>Engagement Rate</span>
          </div>
          <span className="font-medium">{engagement}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Music2 className="w-5 h-5 text-purple-600 mr-2" />
            <span>Monthly Listens</span>
          </div>
          <span className="font-medium">{monthlyListens.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}