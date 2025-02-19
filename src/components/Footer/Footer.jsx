import React from 'react'
import './Footer.css'
import logoImage from "/public/Website/meal-maven-footer.png";
import location from '/public/Website/Location.png';
import apple from '/public/Website/Mobile app store badge-two.png';
import android from '/public/Website/Mobile app store badge.png';
import arrow from '/public/Website/Arrow-sub.png';
import facebook from '/public/Website/facebook.png';
import instagram from '/public/Website/insta.png';
import twitter from '/public/Website/x.png';


const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo">
         <a href="/"> <img src={logoImage} alt="Meal Maven Logo" className="logo"/></a>
          <p>
          Meal Maven brings you authentic Indian cuisine,<br /> prepared with love by passionate home cooks and<br /> delivered straight to your door.
          </p>
        </div>

        <div className="footer-company">
          <h4>Company</h4>
          <div className="d-com">
          <ul className='d-com-first'>
            <li><a href="/">Home</a></li>
            <li><a href="#cook-with-us">Cook with us</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <ul className='d-com-second'>
            <li><a href="#why-choose-us">Why Mealee?</a></li>
            <li><a href="#app">App</a></li>
            <li><a href="/blogs">Blog</a></li>
          </ul>
          </div>
          <div className="social-box">
            <a href="https://www.instagram.com/meal.maven/"><img src={instagram} alt="" className='social-icon' /></a>
            <a href="https://www.facebook.com/people/Meal-Maven/61570908110629/"><img src={facebook} alt="" className='social-icon' /></a>
            <a href="#"><img src={twitter} alt="" className='social-icon' /></a>
          </div>
          <p><img src={location} alt=""  className='phone-tab' /> Toronto, Canada</p>
        </div>

        {/* <div className="footer-contact">
          <h4>Contact</h4>
          <a href='tel:+123 4567 8901' ><p><img src={phone} alt="" className='phone-tab' /> +123 4567 8901</p></a>
        </div> */}

        <div className="footer-get-in-touch">
          <h4>Contact Us</h4>
          <form>
            <input type="email" placeholder="Your email address" />
            <img src={arrow} alt="" /> 
          </form>
           <div className="play-store">
          <img className='app-symbol' src={apple} alt="" />
          <img className='app-symbol' src={android} alt="" />
          </div>
        </div>
        
      </div>
      <div className="footer-bottom">
        <div className="copy-rights-row">
        <p>All Rights Reserved @ <a href='https://yrmedia.in' target='blank'>yr media</a></p>
        <p><a href="#terms">Terms & Conditions</a> | <a href="#privacy">Privacy Policy</a></p>

        </div>
        
      </div>
    </>
  )
}

export default Footer