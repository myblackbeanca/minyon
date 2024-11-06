import React from 'react';
import { MapPin, Music2 } from 'lucide-react';

interface Fan {
  id: number;
  name: string;
  location: string;
  engagement: number;
  avatar: string;
  currentTrack: string;
}

interface TopFansProps {
  fans: Fan[];
}

export default function TopFans({ fans }: TopFansProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Top Fans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fans.map((fan) => (
          <div key={fan.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <img
              src={fan.avatar}
              alt={fan.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{fan.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                {fan.location}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Music2 className="w-4 h-4 mr-1" />
                {fan.currentTrack}
              </div>
            </div>
            <div className="text-sm font-medium text-purple-600">
              {fan.engagement}% engaged
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}