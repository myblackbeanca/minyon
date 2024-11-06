import React, { useState } from 'react';
import { MapPin, Music, Crown, Calendar, Heart } from 'lucide-react';

interface MINYON {
  id: number;
  name: string;
  avatar: string;
  location: string;
  lastInteraction: string;
  currentTrack: string;
  engagement: number;
  purchases: number;
  badges: string[];
}

const LOCATIONS = [
  'New York, USA', 'London, UK', 'Tokyo, Japan', 'Paris, France', 'Berlin, Germany',
  'Sydney, Australia', 'Toronto, Canada', 'Seoul, South Korea', 'Mumbai, India',
  'São Paulo, Brazil', 'Amsterdam, Netherlands', 'Dubai, UAE', 'Singapore',
  'Stockholm, Sweden', 'Barcelona, Spain'
];

const TRACKS = [
  'Summer Vibes 2024', 'Late Night Drive', 'Chill Beats', 'Urban Mix',
  'Midnight Dreams', 'Electric Soul', 'Acoustic Session', 'Remix Collection',
  'Live at Madison Square', 'Unplugged Series'
];

const BADGES = ['Early Supporter', 'VIP Member', 'Concert Veteran', 'Merch Collector', 'Top Donor'];

const generateMinyons = (count: number): MINYON[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${['Emma', 'Michael', 'Sarah', 'David', 'Lisa', 'James', 'Sophie', 'Alex', 'Maria', 'Daniel'][i % 10]} ${String.fromCharCode(65 + (i % 26))}`,
    avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
    location: LOCATIONS[i % LOCATIONS.length],
    lastInteraction: `${Math.floor(Math.random() * 24)}h ago`,
    currentTrack: TRACKS[i % TRACKS.length],
    engagement: 85 + Math.floor(Math.random() * 15),
    purchases: 5 + Math.floor(Math.random() * 20),
    badges: BADGES.slice(0, Math.floor(Math.random() * 3) + 1)
  }));
};

export const TopFans: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'engagement' | 'purchases'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const minyons = generateMinyons(40);
  
  const filteredMinyons = minyons
    .filter(minyon => 
      minyon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      minyon.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === 'engagement') return b.engagement - a.engagement;
      if (filter === 'purchases') return b.purchases - a.purchases;
      return b.engagement * b.purchases - a.engagement * a.purchases;
    });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">MINYONS</h2>
          <p className="text-gray-500 mt-1">Your most engaged supporters</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search MINYONS..."
              className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
          >
            <option value="all">All MINYONS</option>
            <option value="engagement">By Engagement</option>
            <option value="purchases">By Purchases</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMinyons.map((minyon, index) => (
          <div
            key={minyon.id}
            className="relative bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            {index === 0 && (
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                <Crown className="h-4 w-4 text-white" />
              </div>
            )}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <img
                  src={minyon.avatar}
                  alt={minyon.name}
                  className="h-20 w-20 rounded-full mb-4"
                />
                {minyon.badges.length > 0 && (
                  <div className="absolute -bottom-2 -right-2 bg-purple-100 rounded-full px-2 py-1">
                    <span className="text-xs text-purple-600">{minyon.badges[0]}</span>
                  </div>
                )}
              </div>
              
              <h3 className="font-medium text-gray-900">{minyon.name}</h3>
              
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                {minyon.location}
              </div>
              
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {minyon.lastInteraction}
              </div>

              <div className="mt-4 p-3 bg-white rounded-lg w-full">
                <div className="flex items-center text-sm text-gray-600">
                  <Music className="h-4 w-4 mr-2 text-purple-500" />
                  <span className="truncate">{minyon.currentTrack}</span>
                </div>
              </div>

              <div className="mt-4 w-full">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-500">Engagement</span>
                  <span className="text-purple-600">{minyon.engagement}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 rounded-full h-2"
                    style={{ width: `${minyon.engagement}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between w-full text-sm">
                <div className="flex items-center text-gray-500">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  <span>{minyon.purchases} purchases</span>
                </div>
                {minyon.badges.length > 1 && (
                  <span className="text-purple-600">+{minyon.badges.length - 1} badges</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};