import { useState, useCallback } from 'react';

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query.toLowerCase().trim());
  }, []);

  return {
    searchQuery,
    handleSearch,
  };
}