import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import './SearchForm.css';

const SearchForm = () => {
  const { setSearchTerm, setView } = useGlobalContext();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempSearchTerm = input.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
    } else {
      setSearchTerm(input);
    }
    setView('bookList');
  };

  return (
    <div className="search-form">
      <div className="search-form-content">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-form-elem">
            <input
              type="text"
              className="form-control"
              placeholder="Search for books..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
