import React from 'react';
import { Clock, ArrowUp, ArrowDown } from 'lucide-react';

export const EngagementTimeline: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = Array.from({ length: 24 }, (_, i) => i);

  // Simulated engagement data (0-100)
  const heatmapData = Array.from({ length: 7 }, () =>
    Array.from({ length: 24 }, () => Math.floor(Math.random() * 100))
  );

  const getHeatmapColor = (value: number) => {
    if (value > 75) return 'bg-purple-600';
    if (value > 50) return 'bg-purple-500';
    if (value > 25) return 'bg-purple-400';
    return 'bg-purple-200';
  };

  const peakHours = {
    highest: { time: '2:00 PM', value: '92%' },
    lowest: { time: '4:00 AM', value: '12%' }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Engagement Timeline</h2>
          <p className="text-sm text-gray-500 mt-1">MINYON activity over time</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>Last 7 days</span>
          </div>
          <div className="flex space-x-4 text-sm">
            <div className="flex items-center">
              <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
              <span>Peak: {peakHours.highest.time} ({peakHours.highest.value})</span>
            </div>
            <div className="flex items-center">
              <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
              <span>Low: {peakHours.lowest.time} ({peakHours.lowest.value})</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div className="grid grid-cols-[auto_repeat(24,minmax(20px,1fr))]">
            <div className="h-6" />
            {hours.map((hour) => (
              <div
                key={hour}
                className="text-xs text-gray-500 text-center"
              >
                {hour}h
              </div>
            ))}

            {days.map((day, dayIndex) => (
              <React.Fragment key={day}>
                <div className="h-6 flex items-center text-xs text-gray-500 pr-2">
                  {day}
                </div>
                {hours.map((hour) => (
                  <div
                    key={`${day}-${hour}`}
                    className={`h-6 m-0.5 rounded ${getHeatmapColor(
                      heatmapData[dayIndex][hour]
                    )}`}
                    title={`${day} ${hour}:00 - ${heatmapData[dayIndex][hour]}% engagement`}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end space-x-2">
        <span className="text-xs text-gray-500">Less</span>
        <div className="h-3 w-3 rounded bg-purple-200" />
        <div className="h-3 w-3 rounded bg-purple-400" />
        <div className="h-3 w-3 rounded bg-purple-500" />
        <div className="h-3 w-3 rounded bg-purple-600" />
        <span className="text-xs text-gray-500">More</span>
      </div>
    </div>
  );
};