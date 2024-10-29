import React from 'react';
import "./Header.css";


const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents row'>
            <h2 className='col col-sm-8 col-xs-12'>Order your Favourite food here</h2>
            <span className='col col-sm-4'></span>
            
            <p className='col-10 col-sm-8 col-xs-10 '>Choose from a diverese menu featuring a delectable array of dishes <span className='d-none d-sm-block'>crafted with the finest ingredients and culinary expertise.Our mission to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</span></p>
            <span className='col-sm-4'></span>
            <button className='col-3 col-sm-2 header-btn'>View Menu</button>
            
        </div>
        
    </div>
  )
}

export default Header