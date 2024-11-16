import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import SearchHistory from '../components/SearchHistory';
import { API_BASE_URL } from '../contants';

const Home = () => {
  const [results, setResults] = useState([]);
  const [histories, setHistories] = useState([]);

  const fetchHistory = async () => {
    const response = await fetch(`${API_BASE_URL}/histories`);
    if (response.ok) {
      const { histories } = await response.json();
      setHistories(histories);
    } else {
      const errors = await response.json();
      console.error('errors', errors);
    }
  }

  useEffect(() => {
    if (histories.length === 0) {
      fetchHistory();
    }
  }, []);

  const handleSearch = async (query) => {
    const selectedHistory = histories.find((item) => item.query === query);
    if (selectedHistory) {
      setResults(JSON.parse(selectedHistory.results));
    } else {
      const response = await fetch(`${API_BASE_URL}/search?query=${query}`);
      if (response.ok) {
        const { results } = await response.json();
        setResults(results);
        fetchHistory();
      } else {
        const errors = await response.json();
        console.error('errors', errors);
      }
    }
  };

  const handleSelect = (id) => {
    const selectedHistory = histories.find((item) => item.id === id);
    setResults(JSON.parse(selectedHistory.results));
  }

  const handleClearResults = () => {
    setResults([]);
  }

  const handleDelete = async (id) => {
    console.log('delete', id);
    const response = await fetch(`${API_BASE_URL}/histories/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      setHistories(histories.filter(h => h.id !== id));
    } else {
      const errors = await response.json();
      console.error('errors', errors);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mt-6 mb-4" align="center">Wiki Search</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="w-full flex">
        <div className="w-1/4 border-r">
          <SearchHistory histories={histories} onSelect={handleSelect} onDelete={handleDelete} />
        </div>
        <div className="w-3/4">
          <SearchResult results={results} clearResults={handleClearResults} />
        </div>
      </div>
    </div>
  );
};

export default Home;
