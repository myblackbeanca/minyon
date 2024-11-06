import React from 'react';
import { Calendar, MapPin, Users, MessageSquare, Music, Map } from 'lucide-react';

export const EventDashboard: React.FC = () => {
  const eventStats = {
    date: 'March 25, 2024',
    location: 'Madison Square Garden, NY',
    rsvpCount: '12.5K',
    messageCount: '3.2K',
    pollParticipants: '8.7K',
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Summer Vibes Tour</h2>
            <div className="flex items-center space-x-4 mt-2">
              <span className="flex items-center text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {eventStats.date}
              </span>
              <span className="flex items-center text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                {eventStats.location}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-600">23:15:45</div>
            <div className="text-sm text-gray-500">until event starts</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">RSVPs</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{eventStats.rsvpCount}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Messages</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{eventStats.messageCount}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Music className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Poll Votes</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{eventStats.pollParticipants}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">Top Requested Songs</h3>
            <div className="space-y-3">
              {['Shape of You', 'Perfect', 'Bad Habits'].map((song, index) => (
                <div key={song} className="flex items-center justify-between">
                  <span className="text-gray-600">{song}</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 rounded-full h-2"
                      style={{ width: `${85 - index * 15}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">Virtual Tour</h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Map className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};