import React, { useState } from 'react';
import { Play, Music, Music2, MessageCircle, Clock, Trophy, Eye, Heart, ThumbsUp, ThumbsDown } from 'lucide-react';

export const MusicLaunchDashboard: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState<'24h' | '7d' | '30d'>('24h');

  const stats = {
    totalPlays: '45.2K',
    uniqueListeners: '23.4K',
    avgPlayTime: '2:45',
    engagement: '89%',
  };

  const snippets = [
    {
      title: 'Verse 1 Teaser',
      plays: '12.3K',
      duration: '0:45',
      peakTime: '8PM EST',
      sentiment: 95,
    },
    {
      title: 'Chorus Preview',
      plays: '18.7K',
      duration: '0:30',
      peakTime: '2PM EST',
      sentiment: 98,
    },
    {
      title: 'Bridge Snippet',
      plays: '9.8K',
      duration: '0:35',
      peakTime: '6PM EST',
      sentiment: 92,
    },
  ];

  const lyricGame = {
    totalGuesses: '34.5K',
    correctGuesses: '12.3K',
    rewardsUnlocked: '2.8K',
    topPlayers: [
      { name: 'Emma T.', score: 980, rewards: 5 },
      { name: 'Michael C.', score: 850, rewards: 4 },
      { name: 'Sarah M.', score: 720, rewards: 3 },
    ],
  };

  const fanMessages = [
    {
      user: 'Emma T.',
      message: "The melody in the chorus is absolutely incredible! Can't wait for the full release!",
      sentiment: 'positive',
      time: '5m ago',
      likes: 234,
    },
    {
      user: 'Michael C.',
      message: 'Those harmonies in the bridge section are giving me chills!',
      sentiment: 'positive',
      time: '15m ago',
      likes: 189,
    },
    {
      user: 'Sarah M.',
      message: 'The production quality is amazing. This will be your best release yet!',
      sentiment: 'positive',
      time: '25m ago',
      likes: 156,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Midnight Dreams - Preview Campaign</h2>
            <p className="text-gray-500 mt-1">Track release in 7 days</p>
          </div>
          <div className="flex space-x-2">
            {(['24h', '7d', '30d'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  timeFilter === filter
                    ? 'bg-purple-100 text-purple-800'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Play className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Total Plays</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.totalPlays}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Music className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Listeners</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.uniqueListeners}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Avg. Time</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.avgPlayTime}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Engagement</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.engagement}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">Snippet Performance</h3>
            <div className="space-y-4">
              {snippets.map((snippet) => (
                <div key={snippet.title} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Music2 className="h-5 w-5 text-purple-600" />
                      <span className="font-medium text-gray-900">{snippet.title}</span>
                    </div>
                    <span className="text-sm text-purple-600">{snippet.plays} plays</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{snippet.duration}</span>
                    <span>Peak: {snippet.peakTime}</span>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 text-red-500 mr-1" />
                      <span>{snippet.sentiment}%</span>
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 rounded-full h-2"
                      style={{ width: `${snippet.sentiment}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">Lyrics Game Leaderboard</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-sm text-gray-500">Total Guesses</div>
                <div className="text-lg font-semibold text-purple-600">{lyricGame.totalGuesses}</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-sm text-gray-500">Rewards Unlocked</div>
                <div className="text-lg font-semibold text-purple-600">{lyricGame.rewardsUnlocked}</div>
              </div>
            </div>
            <div className="space-y-3">
              {lyricGame.topPlayers.map((player, index) => (
                <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <Trophy className={`h-4 w-4 ${index === 0 ? 'text-yellow-500' : 'text-purple-600'}`} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{player.name}</div>
                      <div className="text-sm text-gray-500">{player.score} points</div>
                    </div>
                  </div>
                  <div className="text-sm text-purple-600">{player.rewards} rewards</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Fan Feedback</h3>
            <div className="flex space-x-2">
              <button className="flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Positive
              </button>
              <button className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                <ThumbsDown className="h-4 w-4 mr-1" />
                Critical
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {fanMessages.map((message) => (
              <div key={message.user} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">{message.user[0]}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{message.user}</span>
                        <span className="text-sm text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-gray-600 mt-1">{message.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{message.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};