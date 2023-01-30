import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { IoMdBasketball } from 'react-icons/io';




const Navbar = () => {

    return (
        <nav className="navbar">
      <div className="navbar__container">
      

      <ul className="navbar__head">
        
          <li className="navbar__head">
          
          <a href="/" class="navbar__head">BIG LEAGUE</a>
          <IoMdBasketball className='header-icon' />
          <img id="main__img" src="https://yt3.googleusercontent.com/Yn8kDo0rIfDOpBO9g-eleFQ2WwxZqgdtDbvxPUgrVSgNPOH94you8K5RJnP1WBXyAYYnXZ98Eg=s88-c-k-c0x00ffffff-no-rj" />
          </li>

      </ul>
      

      


      
        
      
      
       
     
      
       <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
          
        </div>
        <ul className="navbar__menu">
        
          <li className="navbar__item">
            <a href="Games" class="navbar__links">Games</a>
          </li>
          <li className="navbar__item">
            <a href="/teams" class="navbar__links">Teams</a>
          </li>
          <li className="navbar__item">
            <a href="/Players" className="navbar__links">Players</a>
          </li>
          <li className="navbar__item">
          <a href="Info" className="navbar__links">Info</a>
          </li>
        </ul>
      </div>
    </nav>
     );

     

};



export default Navbar;
