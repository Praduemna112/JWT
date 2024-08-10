import React from 'react';
import Navbar from '../Navbar';
import JobList from '../JobList';
import Footer from '../Footer';

function SearchResultsPage() {
  return (
    <div>
      <Navbar />
      <h2>Search Results</h2>
      <JobList />
      <Footer />
    </div>
  );
}

export default SearchResultsPage;
