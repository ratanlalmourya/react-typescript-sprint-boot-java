import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar-and-footer/navbar';
import { ExploreTopBooks } from './layouts/homepage/explore-top-books';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
    </div>
  );
}

export default App;
