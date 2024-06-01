import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar-and-footer/navbar';
import { ExploreTopBooks } from './layouts/homepage/components/explore-top-books';
import { Carousel } from './layouts/homepage/components/carsousel';
import { Heros } from './layouts/homepage/components/heros';
import { LibraryServices } from './layouts/homepage/components/library-services';
import { Footer } from './layouts/navbar-and-footer/footer';
import { Homepage } from './layouts/homepage/homepage';

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
