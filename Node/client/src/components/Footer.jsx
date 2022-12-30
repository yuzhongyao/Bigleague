import React from 'react';

const Footer = () =>{

    return (<div className="footer__container">
    <div className="footer__links">
      <div className="footer__link--wrapper">
      
        <div className="footer__link--items">
          <h2>Contact Us</h2>
          <a href="https://instagram.com/torontobigleague">Instagram</a> 
          <a href="https://www.youtube.com/channel/UCBdt8Q5pscCyb-1FwigGiSw">Youtube</a> 
          <a href='mailto:torontobigleague@gmail.com'>Email</a>
        </div>
      </div>
    </div>
    <section className="social__media">
      <div className="social__media--wrap">
        <div className="footer__logo">
          <a href="/" id="footer__logo"><i className="fas fa-gem"></i>Big League</a>
        </div>
        <p className="website__rights">© Spookaz Elite. All rights reserved</p>
        <div className="social__icons">
          
          <a
            className="social__icon--link"
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