import React from 'react';
import '../style.css';

const Footer = () =>{
  

    return ( 
      
      
      
      <div className="footer-container"> 
      
    
    <div className="footer-links">
      <div className="footer-link-wrapper">
      
     
       <div className="footer-link-items"> 
         
        </div> 
        
      </div>
    </div>
    <section className="social-media">
      <div className="social-media-wrap">
        <div className="footer-logo">
          <a href="/" id="footer-logo"><i className="fas fa-gem"></i>Big League</a>
          <p className="website-rights">  © Spookaz Elite. All rights reserved</p>
        </div>

        <p className="website-rights">  Contact Us</p>
        
        <div className="social-icons">

        

          
          <a
            className="social-icon-link"
            href="https://instagram.com/torontobigleague"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="social__icon--link"
            href="https://www.youtube.com/channel/UCBdt8Q5pscCyb-1FwigGiSw"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            className="social__icon--link"
            href="mailto:torontobigleague@gmail.com"
            target="_blank"
            aria-label="Email"
            
          >
          
            
            <i className="fab fa-google"></i>
            
          </a>
        </div>
      </div>
    </section>
  </div>);

};

export default Footer;
