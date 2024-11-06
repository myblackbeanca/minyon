import React from 'react';
import { 
  Music2, 
  Users, 
  Heart, 
  Share2, 
  MessageSquare,
  ShoppingBag
} from 'lucide-react';
import TopFans from './dashboard/TopFans';
import EngagementMetrics from './dashboard/EngagementMetrics';
import MixtapeGrid from './dashboard/MixtapeGrid';
import RecentActivity from './dashboard/RecentActivity';

export function HeroDashboard() {
  const metrics = {
    totalFans: 50000,
    engagement: 78,
    monthlyListens: 250000,
    topFans: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Fan ${i + 1}`,
      location: `City ${i + 1}`,
      engagement: Math.floor(Math.random() * 100),
      avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
      currentTrack: `Track ${i + 1}`
    })),
    recentActivity: [
      {
        id: 1,
        type: 'listen',
        icon: Music2,
        user: 'John D.',
        action: 'listened to your new track',
        time: '2m ago',
        color: 'text-blue-500',
        bgColor: 'bg-blue-100'
      },
      {
        id: 2,
        type: 'like',
        icon: Heart,
        user: 'Sarah M.',
        action: 'liked your mixtape',
        time: '5m ago',
        color: 'text-red-500',
        bgColor: 'bg-red-100'
      },
      {
        id: 3,
        type: 'share',
        icon: Share2,
        user: 'Mike R.',
        action: 'shared your profile',
        time: '10m ago',
        color: 'text-green-500',
        bgColor: 'bg-green-100'
      }
    ],
    mixtapes: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      title: `Mixtape ${i + 1}`,
      image: `https://picsum.photos/200/200?random=${i}`,
      popularity: Math.floor(Math.random() * 100),
      plays: Math.floor(Math.random() * 10000)
    }))
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Artist Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2">
          <TopFans fans={metrics.topFans} />
        </div>
        
        <div className="space-y-6">
          <EngagementMetrics 
            totalFans={metrics.totalFans}
            engagement={metrics.engagement}
            monthlyListens={metrics.monthlyListens}
          />
          <RecentActivity activities={metrics.recentActivity} />
        </div>
      </div>

      <MixtapeGrid mixtapes={metrics.mixtapes} />
    </div>
  );
}