import React from 'react';
import { DollarSign, Users, Share2, Award } from 'lucide-react';

export const FundraiserDashboard: React.FC = () => {
  const stats = {
    raised: '$45,678',
    goal: '$100,000',
    donors: '1.2K',
    shares: '3.4K',
  };

  const topDonors = [
    { name: 'Emma T.', amount: '$500', reward: 'Platinum' },
    { name: 'Michael C.', amount: '$350', reward: 'Gold' },
    { name: 'Sarah M.', amount: '$250', reward: 'Silver' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Music Education Fund</h2>
            <p className="text-gray-500 mt-1">Supporting young musicians in our community</p>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Donate Now
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-900">Progress</span>
            <span className="text-gray-500">
              {stats.raised} of {stats.goal}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-purple-600 rounded-full h-4"
              style={{ width: '45.678%' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Total Raised</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.raised}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Total Donors</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.donors}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Share2 className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Social Shares</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.shares}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">Top Donors</h3>
            <div className="space-y-4">
              {topDonors.map((donor) => (
                <div key={donor.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">
                        {donor.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{donor.name}</div>
                      <div className="text-sm text-gray-500">{donor.amount}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-600">
                      {donor.reward}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">Reward Tiers</h3>
            <div className="space-y-4">
              {[
                { tier: 'Platinum', amount: '$500+', perks: ['Signed Merch', 'VIP Event Access'] },
                { tier: 'Gold', amount: '$250+', perks: ['Limited Edition NFT', 'Digital Meet'] },
                { tier: 'Silver', amount: '$100+', perks: ['Digital Badge', 'Thank You Video'] },
              ].map((tier) => (
                <div key={tier.tier} className="p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{tier.tier}</span>
                    <span className="text-sm text-purple-600">{tier.amount}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {tier.perks.join(' • ')}
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