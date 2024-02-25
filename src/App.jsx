import React from 'react';
import Navbar from './Home/Navbar';
import Services from './Home/Services';
import Banner from './Home/Banner';
import Potential from './Home/Potential';

const App = () => {
  return (
    <div className='bg-white'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Potential></Potential>
    </div>
  );
};

export default App;