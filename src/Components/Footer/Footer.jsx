import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='footer ' id="footer">
        <div className='footer-content  container '>
            <div className='footer-content-left col-12 col-xs-12 col-sm-4'>
            <img src={assets.logo} alt=""></img>
            <p>This is not what we want. There are several ways to control when side effects run.
                We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
            </p>
            <div className='footer-social-icons'>
                <img className='img-fluid' src={assets.facebook_icon} alt=""></img>
                <img className='img-fluid' src={assets.twitter_icon} alt=""></img>
                <img className='img-fluid' src={assets.linkedin_icon} alt=""></img>
            </div>
            </div>
            <div className='footer-content-center col-6 col-xs-6 col-sm-4'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>
            <div className='footer-content-right col-6 col-xs-6 col-sm-4'>
            <h2>Get In Touch</h2>
                <ul>
                    <li>+23423649912387</li>
                    <li>contact@tomatio.com</li>
                </ul>
                
            </div>
        </div>
        <hr></hr>
        <p className='footer-copyright'>Copyright 2024 © Tomato.com All Right Reserved.</p>
    </div>
  )
}

export default Footer