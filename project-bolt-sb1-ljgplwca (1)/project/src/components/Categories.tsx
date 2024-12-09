import React from 'react';
import { Mountain, Gamepad2, Shapes, Minimize2, Camera, Palette } from 'lucide-react';
import { Category } from '../types/wallpaper';

const categories: Category[] = [
  { id: 'nature', name: 'Nature', icon: 'Mountain' },
  { id: 'gaming', name: 'Gaming', icon: 'Gamepad2' },
  { id: 'abstract', name: 'Abstract', icon: 'Shapes' },
  { id: 'minimal', name: 'Minimal', icon: 'Minimize2' },
  { id: 'photography', name: 'Photography', icon: 'Camera' },
  { id: 'art', name: 'Art', icon: 'Palette' },
];

const iconComponents = {
  Mountain,
  Gamepad2,
  Shapes,
  Minimize2,
  Camera,
  Palette,
};

export function Categories() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => {
        const Icon = iconComponents[category.icon as keyof typeof iconComponents];
        
        return (
          <button
            key={category.id}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            <Icon className="h-4 w-4" />
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}