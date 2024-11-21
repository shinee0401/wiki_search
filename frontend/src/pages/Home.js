import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import SearchHistory from '../components/SearchHistory';
import { API_BASE_URL } from '../contants';

const Home = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/search?query=${query}`);
      if (response.ok) {
        const { results } = await response.json();
        setResults(results);
        fetchHistory();
      } else {
        const errors = await response.json();
        console.error('errors', errors);
      }
      setLoading(false);
    }
  };

  const handleSelect = (id) => {
    const selectedHistory = histories.find((item) => item.id === id);
    setResults(JSON.parse(selectedHistory.results));
    setQuery(selectedHistory.query);
  }

  const handleClearResults = () => {
    setResults([]);
  }

  const handleDelete = async (id) => {
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
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <div className="w-full flex flex-wrap">
        <div className="sm:w-1/4 w-full sm:border-r border-0">
          <SearchHistory histories={histories} onSelect={handleSelect} onDelete={handleDelete} />
        </div>
        <div className="sm:w-3/4 w-full sm:mt-0 mt-4 overflow-hidden">
          <SearchResult loading={loading} results={results} clearResults={handleClearResults} />
        </div>
      </div>
    </div>
  );
};

export default Home;
