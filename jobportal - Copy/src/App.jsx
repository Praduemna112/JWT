import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import JobBanner from './components/JobBanner';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <JobBanner />
      <Footer />
    </div>
  );
}

export default App;
