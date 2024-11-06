import React from 'react';
import { Music, Star } from 'lucide-react';

interface EngagementMetricsProps {
  timeFilter: '7d' | '1m' | '1y';
}

export const EngagementMetrics: React.FC<EngagementMetricsProps> = ({ timeFilter }) => {
  const mixtapes = [
    { 
      name: 'Summer Vibes 2024',
      image: 'https://images.unsplash.com/photo-1671226366569-22c4f0cd2d22?w=200&h=200&fit=crop',
      popularity: 98,
      plays: '234K'
    },
    {
      name: 'Late Night Drive',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200&h=200&fit=crop',
      popularity: 95,
      plays: '198K'
    },
    {
      name: 'Chill Beats',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop',
      popularity: 92,
      plays: '167K'
    },
    {
      name: 'Urban Mix',
      image: 'https://images.unsplash.com/photo-1671226366569-22c4f0cd2d22?w=200&h=200&fit=crop',
      popularity: 89,
      plays: '145K'
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Popular MINY Mixtapes</h2>
        <div className="flex items-center space-x-2">
          <Music className="h-5 w-5 text-purple-600" />
          <span className="text-sm text-purple-600 font-medium">Top Trending</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {mixtapes.map((mixtape) => (
          <div key={mixtape.name} className="group relative">
            <div className="relative w-full pb-[115%] overflow-hidden">
              <div className="absolute inset-0 transform rotate-0">
                <div className="absolute inset-0 overflow-hidden" style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}>
                  <img
                    src={mixtape.image}
                    alt={mixtape.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-sm font-medium text-gray-900">{mixtape.name}</h3>
              <div className="flex items-center justify-center mt-1 space-x-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-500">{mixtape.popularity}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{mixtape.plays}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};