import React, { useState } from "react";
import "../index.css"; // Ensure this is imported to apply styles

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="search-bar-input"
      />
      <button type="submit" className="search-bar-button">Search</button>
    </form>
  );
}

export default SearchBar;
