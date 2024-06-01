import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar-and-footer/navbar';
import { ExploreTopBooks } from './layouts/homepage/explore-top-books';
import { Carousel } from './layouts/homepage/carsousel';
import { Heros } from './layouts/homepage/heros';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
    </div>
  );
}

export default App;
