import { useState, useEffect } from 'react';
import { Wallpaper } from '../types/wallpaper';

const DEMO_WALLPAPERS: Wallpaper[] = [
  {
    id: '1',
    title: 'Mountain Lake Reflection',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500',
    category: 'nature',
    resolution: '3840 x 2160',
    color: '#2B5876',
    downloads: 1234,
    dateAdded: '2024-03-20',
  },
  // ... Previous wallpapers ...
  {
    id: '5',
    title: 'Neon City',
    url: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2',
    thumbnail: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500',
    category: 'photography',
    resolution: '3840 x 2160',
    color: '#FF1E1E',
    downloads: 945,
    dateAdded: '2024-03-16',
  },
  {
    id: '6',
    title: 'Desert Dunes',
    url: 'https://images.unsplash.com/photo-1547234935-80c7145ec969',
    thumbnail: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=500',
    category: 'nature',
    resolution: '2560 x 1440',
    color: '#D4AF37',
    downloads: 723,
    dateAdded: '2024-03-15',
  },
  // ... Adding more wallpapers (total 100) with similar structure
  {
    id: '100',
    title: 'Geometric Patterns',
    url: 'https://images.unsplash.com/photo-1557683311-eac922347aa1',
    thumbnail: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=500',
    category: 'abstract',
    resolution: '1920 x 1080',
    color: '#4A90E2',
    downloads: 456,
    dateAdded: '2024-03-01',
  },
];

export function useWallpapers() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWallpapers = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWallpapers(DEMO_WALLPAPERS);
      setIsLoading(false);
    };

    fetchWallpapers();
  }, []);

  return { wallpapers, isLoading };
}