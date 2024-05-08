import React, { useState } from 'react';
import Hero from '../components/hero/Hero';
import ItemMenu from '../components/ItemMenu/ItemMenu';
import Main from '../components/main/Main';
const Home = () => {
  const [sor, setSor] = useState('none');
  function mySort(sortfor) {
    setSor(sortfor);
  }

  return (
    <>
      <Hero />
      <ItemMenu onsort={mySort} />
      <Main soD={sor} />
    </>
  );
};

export default Home;
