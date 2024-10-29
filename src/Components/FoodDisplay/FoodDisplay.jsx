/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import "./FoodDisplay.css"
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2 >Top Dishes near you</h2>
        <div className='food-display-list row '>
       
      
            {food_list.map(function (item, index) {

              if (category === "All" || category === item.category) {
                return <FoodItem className="" key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
              }
            })}
        </div>

    </div>

  )
}

export default FoodDisplay