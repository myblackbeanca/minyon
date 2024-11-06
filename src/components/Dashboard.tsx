import React, { useState } from 'react';
import { TopFans } from './TopFans';
import { EngagementTimeline } from './hero/EngagementTimeline';
import { JourneyMetrics } from './hero/JourneyMetrics';
import { RecentActivity } from './hero/RecentActivity';
import { WelcomeSection } from './WelcomeSection';
import { InsightsAndTodos } from './InsightsAndTodos';

export const Dashboard: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState<'7d' | '1m' | '1y'>('7d');

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <WelcomeSection />
      
      {/* Insights & To-dos */}
      <InsightsAndTodos />
      
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EngagementTimeline />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Journey Metrics */}
      <JourneyMetrics />

      {/* MINYONS Section */}
      <TopFans />
    </div>
  );
};