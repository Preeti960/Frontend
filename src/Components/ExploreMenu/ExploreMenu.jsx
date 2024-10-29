import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverese menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</p>

      <div className='explore-menu-list col-12 '>
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?item.menu_name:item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
              <h3>{item.menu_name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
