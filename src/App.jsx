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
    </div>
  );
};

export default App;