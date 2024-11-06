import React from 'react';
import { Ticket, Users, Music, MapPin } from 'lucide-react';

export const FestivalTicketsDashboard: React.FC = () => {
  const stats = {
    soldTickets: '8.9K',
    minyHolders: '2.3K',
    artists: '45',
    venues: '5',
  };

  const ticketTiers = [
    {
      name: 'VIP All Access',
      price: '$499',
      holderPrice: '$399',
      perks: ['Backstage Access', 'Meet & Greet', 'Exclusive Merch'],
      available: 89,
    },
    {
      name: 'Premium Package',
      price: '$299',
      holderPrice: '$249',
      perks: ['Priority Entry', 'VIP Lounge', 'Festival Kit'],
      available: 245,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Summer Music Festival</h2>
            <p className="text-gray-500 mt-1">Special pricing for MINY holders</p>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-purple-600" />
            <span className="text-lg font-semibold text-purple-600">Central Park, NY</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Ticket className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Tickets Sold</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.soldTickets}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">MINY Holders</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.minyHolders}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Music className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Artists</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.artists}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Venues</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.venues}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {ticketTiers.map((tier) => (
              <div key={tier.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{tier.name}</h3>
                    <div className="mt-1 space-y-1">
                      <div className="text-sm text-gray-500">Regular Price: {tier.price}</div>
                      <div className="text-sm font-medium text-purple-600">
                        MINY Holder Price: {tier.holderPrice}
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-sm bg-purple-100 text-purple-600 rounded-full">
                    {tier.available} left
                  </span>
                </div>
                <div className="space-y-2">
                  {tier.perks.map((perk) => (
                    <div key={perk} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">•</span>
                      {perk}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Reserve Ticket
                </button>
              </div>
            ))}
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">Festival Highlights</h3>
            <div className="space-y-4">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Festival venue"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Main Stage</h4>
                  <p className="text-sm text-gray-500">
                    Featuring headline performances and spectacular light shows
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">VIP Areas</h4>
                  <p className="text-sm text-gray-500">
                    Exclusive lounges with premium amenities and services
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Nearby Accommodations</h4>
                <div className="space-y-2">
                  {[
                    'Luxury Hotel - 0.5 miles',
                    'Boutique Inn - 1.2 miles',
                    'Festival Camping - On-site',
                  ].map((accommodation) => (
                    <div key={accommodation} className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      {accommodation}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};