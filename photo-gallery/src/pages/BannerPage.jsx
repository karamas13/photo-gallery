import { useState } from 'react';
import Banner from '../components/Banner';
import { Helmet } from 'react-helmet'; 

function App() {
  return (
    <>
      <Helmet>
        <title>Nikos Brinias Photography - Welcome to Nikos Brinias Photography</title>
        <meta name="description" content="Discover stunning photography showcasing nature, individuals, meals, and concerts. Explore my work today!" />
        <meta name="keywords" content="photography, nature, individuals, meals, concerts, landscapes, live shows, portraits, people, professional, drinks, drone, gallery, nikos, brinias, greece" />    
      </Helmet>
      <Banner />
      
    </>
  );
}

export default App;
