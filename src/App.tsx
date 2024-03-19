import React, { useState } from 'react';
import Form from './FormComponent';
import GifList from './GifListComponent';
import Header from './HeaderComponent';

import { GifResult } from './types';

const App: React.FC = () => {
  const [results, setResults] = useState<GifResult[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${import.meta.env.VITE_GIPHY_API_KEY}&limit=10`);
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Form onSearch={handleSearch} />
      <GifList results={results} />
    </div>
  );
};

export default App;
