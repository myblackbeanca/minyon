import React from 'react';
import { 
  Music, 
  Ticket, 
  ShoppingBag, 
  MessageCircle, 
  Heart, 
  Share2, 
  Star 
} from 'lucide-react';

export const JourneyInsights: React.FC = () => {
  const journeys = [
    {
      icon: Music,
      title: 'Music Streaming',
      metric: '1.2M',
      change: '+15%',
      isPositive: true,
    },
    {
      icon: Ticket,
      title: 'Event Attendance',
      metric: '45K',
      change: '+8%',
      isPositive: true,
    },
    {
      icon: ShoppingBag,
      title: 'Merch Sales',
      metric: '23K',
      change: '+25%',
      isPositive: true,
    },
    {
      icon: MessageCircle,
      title: 'Community Engagement',
      metric: '156K',
      change: '+12%',
      isPositive: true,
    },
    {
      icon: Heart,
      title: 'Social Interactions',
      metric: '847K',
      change: '+18%',
      isPositive: true,
    },
    {
      icon: Share2,
      title: 'Content Sharing',
      metric: '234K',
      change: '+10%',
      isPositive: true,
    },
    {
      icon: Star,
      title: 'Fan Loyalty',
      metric: '92%',
      change: '+5%',
      isPositive: true,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Fan Journey Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {journeys.map((journey) => (
          <div
            key={journey.title}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <journey.icon className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900">{journey.title}</h3>
            </div>
            <div className="flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-gray-900">
                {journey.metric}
              </p>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium ${
                  journey.isPositive
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {journey.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};