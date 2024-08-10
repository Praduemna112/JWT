import React from 'react';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      {/* You can add JobBanner or other components here */}
      <Footer />
    </div>
  );
}

export default HomePage;
