import React from 'react';
import { Download, Maximize } from 'lucide-react';
import { Wallpaper } from '../types/wallpaper';
import { useWallpapers } from '../hooks/useWallpapers';
import { downloadWallpaper } from '../utils/download';

interface WallpaperGridProps {
  searchQuery: string;
}

export function WallpaperGrid({ searchQuery }: WallpaperGridProps) {
  const { wallpapers, isLoading } = useWallpapers();

  const filteredWallpapers = wallpapers.filter((wallpaper) =>
    wallpaper.title.toLowerCase().includes(searchQuery) ||
    wallpaper.category.toLowerCase().includes(searchQuery)
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg" />
        ))}
      </div>
    );
  }

  if (filteredWallpapers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No wallpapers found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredWallpapers.map((wallpaper) => (
        <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
      ))}
    </div>
  );
}

function WallpaperCard({ wallpaper }: { wallpaper: Wallpaper }) {
  const handleDownload = () => {
    downloadWallpaper(wallpaper.url, wallpaper.title);
  };

  return (
    <div className="group relative rounded-lg overflow-hidden">
      <img
        src={wallpaper.thumbnail}
        alt={wallpaper.title}
        className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-medium truncate">{wallpaper.title}</h3>
          <p className="text-gray-200 text-sm">{wallpaper.resolution}</p>
          
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span className="text-sm">Download</span>
            </button>
            <button className="p-1 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Maximize className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}