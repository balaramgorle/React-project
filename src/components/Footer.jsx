import React from 'react';



const Footer = () => {
  return (
   
    <footer className="footer">
      <div className="top">
        <div className="content">
          <a href="" className="logo">Pak<span className="yellow">Express</span></a>
          <p>
            Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
            porttitor consectetur pretium. Euismod imperdiet
          </p>
        </div>

        <div className="links">
          <div className="link">
            <h4>Contact Information</h4>
            <div>
              <img src="./images/location-cross.svg" alt="" />
              <span>122,Albert St, Port Melbourne,Vic 3207.</span>
            </div>
            <div>
              <img src="./images/sms-tracking.svg" alt="" />
              <span>PakExpress@gmail.com</span>
            </div>
          </div>

          <div className="link">
            <h4>Quick Links</h4>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Download</a>
          </div>

          <div className="link">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Term of Use</a>
            <a href="#">Conditions</a>
            <a href="#">Location</a>
          </div>

          <div className="link">
            <h4>Connect with Us</h4>
            <div>
              <img src="./images/instagram.svg" alt="" />
              <span>Instagram</span>
            </div>
            <div>
              <img src="./images/twitter.svg" alt="" />
              <span>Twitter</span>
            </div>
            <div>
              <img src="./images/facebook.svg" alt="" />
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright © 2010-2021 Deliveroo Company S.L. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer;
