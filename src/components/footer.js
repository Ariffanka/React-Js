import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Company Name</h3>
            <p>123 Street, City</p>
            <p>Country</p>
          </div>
          {/* <div className="footer-right">
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul> */}
            <div className="footer-social">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        {/* </div> */}
      </footer>
    );
  }

export default Footer;