import React from 'react';
import './style.css';




const Hero = () => {

  return (
    <div className="main">
    <div className="main__container">
      <div className="main__content">
        <h1>BIG LEAGUE</h1>
        <h2>Basketball</h2>
        <p>Time to Hoop!</p>
        <button className="main__btn"><a href="#">Get Started</a></button>
      </div>

      <video className="video" src='video.mp4' autoPlay loop muted />
      
    </div>
  </div>

  );

};

export default Hero;
