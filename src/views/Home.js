import * as React from 'react';

import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

import Products from '../components/Products'
import About from '../components/About'

function Home () {
  return (
    <div>
    
      <Navbar />
      <Products/>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
