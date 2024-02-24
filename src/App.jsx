import React from 'react';
import Navbar from './Home/Navbar';
import Services from './Home/Services';
import Banner from './Home/Banner';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default App;