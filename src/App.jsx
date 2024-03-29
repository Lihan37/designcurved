import React from 'react';
import Navbar from './Home/Navbar';
import Services from './Home/Services';
import Banner from './Home/Banner';
import Potential from './Home/Potential';
import Agency from './Home/Agency';
import Quote from './Home/Quote';
import Develop from './Home/Develop';
import Contact from './Home/Contact';
import Card from './Home/Card';
import Passion from './Home/Passion';
import Footer from './Home/Footer';

const App = () => {
  return (
    <div className='bg-white'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Potential></Potential>
      <Agency></Agency>
      <Quote></Quote>
      <Develop></Develop>
      <Contact></Contact>
      <Card></Card>
      <Passion></Passion>
      <Footer></Footer>
    </div>
  );
};

export default App;