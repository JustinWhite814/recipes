import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
 
  console.log('linked')
  return (
    <div>
      
      <h1 id='home'>Welcome to Recipe Corner click if you dare</h1>
      <Link to='/search'>
      <button id='home'>CLICK ME</button>
      </Link>
    </div>
  );
}

export default Home;