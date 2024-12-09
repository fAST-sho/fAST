import React from 'react';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { WallpaperGrid } from './components/WallpaperGrid';
import { useSearch } from './hooks/useSearch';

function App() {
  const { searchQuery, handleSearch } = useSearch();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header onSearch={handleSearch} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Categories />
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            {searchQuery ? 'Search Results' : 'Featured Wallpapers'}
          </h2>
          <WallpaperGrid searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
}

export default App;