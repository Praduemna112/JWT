import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <h1>Find your dream job now</h1>
      <p>5 lakh+ jobs for you to explore</p>
      <div className="search-inputs">
        <input type="text" placeholder="Enter skills / designations / companies" />
        <input type="text" placeholder="Select experience" />
        <input type="text" placeholder="Enter location" />
        <button className="btn-search">Search</button>
      </div>
      <div className="suggested-tags">
        <button>james bond</button>
        <button>james bod</button>
        <button>java developer</button>
      </div>
    </div>
  );
}

export default SearchBar;
