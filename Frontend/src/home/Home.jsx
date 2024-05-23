import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FreeBooks from '../components/FreeBooks';



function Home() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <FreeBooks/>
      <Footer/>
    </>
  );
}

export default Home;