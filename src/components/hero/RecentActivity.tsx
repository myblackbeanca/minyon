import React from 'react';
import { ShoppingBag, MessageCircle, Heart, Music, Ticket } from 'lucide-react';

export const RecentActivity: React.FC = () => {
  const activities = [
    {
      icon: ShoppingBag,
      user: 'Emma T.',
      action: 'purchased Limited Edition Hoodie',
      time: '2m ago',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: MessageCircle,
      user: 'Michael C.',
      action: 'commented on your latest release',
      time: '5m ago',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Heart,
      user: 'Sarah M.',
      action: 'liked your event announcement',
      time: '12m ago',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
    },
    {
      icon: Music,
      user: 'David R.',
      action: 'pre-saved your upcoming release',
      time: '15m ago',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Ticket,
      user: 'Lisa K.',
      action: "RSVP'ed to your virtual meet",
      time: '18m ago',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div
              key={index}
              className="flex items-start space-x-3"
            >
              <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                <Icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span>{' '}
                  {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};