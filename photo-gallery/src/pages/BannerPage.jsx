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
      <h1 style={{ 
  position: 'absolute', 
  width: '1px', 
  height: '1px', 
  padding: '0', 
  margin: '-1px', 
  overflow: 'hidden', 
  clip: 'rect(0, 0, 0, 0)', 
  whiteSpace: 'nowrap', 
  border: '0' 
}}>
  Nikos Brinias Photography - Professional Portfolio
</h1>
      <Banner />
      
    </>
  );
}

export default App;
