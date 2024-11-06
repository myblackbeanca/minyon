import React from 'react';
import { Video, Users, MessageSquare, Calendar } from 'lucide-react';

export const VirtualEventDashboard: React.FC = () => {
  const stats = {
    attendees: '3.2K',
    questions: '456',
    engagement: '89%',
    sessions: '12',
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Virtual Fan Meet</h2>
            <p className="text-gray-500 mt-1">Live Q&A and Digital Meet-and-Greet</p>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <span className="text-lg font-semibold text-purple-600">March 15, 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Attendees</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.attendees}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Questions</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.questions}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Video className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Sessions</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.sessions}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Engagement</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.engagement}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">Event Schedule</h3>
            <div className="space-y-4">
              {[
                { time: '2:00 PM', event: 'Welcome & Introduction', duration: '15m' },
                { time: '2:15 PM', event: 'Q&A Session', duration: '45m' },
                { time: '3:00 PM', event: 'Live Performance', duration: '30m' },
                { time: '3:30 PM', event: 'Meet & Greet', duration: '60m' },
              ].map((session) => (
                <div key={session.time} className="flex items-center space-x-4">
                  <div className="w-20 text-sm font-medium text-gray-500">{session.time}</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{session.event}</div>
                    <div className="text-sm text-gray-500">{session.duration}</div>
                  </div>
                  <button className="px-3 py-1 text-sm text-purple-600 border border-purple-200 rounded-full hover:bg-purple-50">
                    Remind me
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">Top Questions</h3>
            <div className="space-y-4">
              {[
                { question: 'What inspired your latest album?', votes: 234 },
                { question: 'Will there be a world tour?', votes: 189 },
                { question: 'Favorite song to perform live?', votes: 156 },
              ].map((item) => (
                <div key={item.question} className="flex items-start space-x-3">
                  <button className="px-2 py-1 text-sm bg-purple-100 text-purple-600 rounded-lg">
                    {item.votes}
                  </button>
                  <div>
                    <div className="text-gray-900">{item.question}</div>
                    <div className="mt-1 flex items-center space-x-2">
                      <button className="text-sm text-purple-600 hover:text-purple-700">
                        Upvote
                      </button>
                      <span className="text-gray-300">•</span>
                      <button className="text-sm text-gray-500 hover:text-gray-600">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};