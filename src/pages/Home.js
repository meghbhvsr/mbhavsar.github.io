import React from 'react';
import '../Styling/home.css';
import personal from '../images/personal1.jpg'
const Home = () => (
  <div className ='background'>
    <div className='home-container'>
      <div className='text'>
        <h1>Hello, I'm Megh.</h1>
        <h1>I am a Software Developer</h1>
        <p>On this website you will get to know everything about me, including projects, experiences, etc..</p>
      </div>
      <img src={personal} alt='personal' className='personal-img'></img>
    </div>
  </div>
  
);

export default Home;
