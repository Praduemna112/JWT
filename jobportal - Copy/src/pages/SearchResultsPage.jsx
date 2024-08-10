import React from 'react';


import Footer from './components/Footer';
import JobList from '../JobList';
import Navbar from '../Navbar';

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
