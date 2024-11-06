import React from 'react';
import { Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

export const InsightsAndTodos: React.FC = () => {
  const insights = [
    {
      title: 'Engagement Peak Time',
      description: 'Your MINYONS are most active at 2:00 PM. Consider scheduling your next teaser release during this time.',
      action: 'Schedule next release for 2:00 PM',
      priority: 'High'
    },
    {
      title: 'Merch Opportunity',
      description: 'Limited Edition Tour Hoodie has 98% positive feedback. Consider launching a new color variant.',
      action: 'Plan new merch variant',
      priority: 'Medium'
    },
    {
      title: 'Virtual Event Demand',
      description: 'Q&A sessions have 89% attendance rate. Schedule more virtual meet & greets.',
      action: 'Plan next virtual event',
      priority: 'High'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Lightbulb className="h-6 w-6 text-yellow-500" />
          <h2 className="text-xl font-bold text-gray-900">Insights & To-dos</h2>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{insight.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  insight.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {insight.priority}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{insight.description}</p>
              <button className="mt-3 flex items-center text-sm text-purple-600 hover:text-purple-700">
                <CheckCircle className="h-4 w-4 mr-1" />
                {insight.action}
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};