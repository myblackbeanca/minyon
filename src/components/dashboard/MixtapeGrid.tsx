import React from 'react';
import { Play } from 'lucide-react';

interface Mixtape {
  id: number;
  title: string;
  image: string;
  popularity: number;
  plays: number;
}

interface MixtapeGridProps {
  mixtapes: Mixtape[];
}

export default function MixtapeGrid({ mixtapes }: MixtapeGridProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Mixtapes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {mixtapes.map((mixtape) => (
          <div key={mixtape.id} className="relative group">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={mixtape.image}
                alt={mixtape.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900">{mixtape.title}</h3>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{mixtape.plays.toLocaleString()} plays</span>
                <span>{mixtape.popularity}% popularity</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}