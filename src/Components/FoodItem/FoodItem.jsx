import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import {StoreContext} from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);



  return (
    <div className="food-item padding_zero col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="food-item-cont-padd shadow">
        
    
        <div className="food-item-img-container padding_zero">
          <img className="food-item-image img-fluid" src={image} alt={name}></img>
          {!cartItems[id]?
          <img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
          :
          <div className="food-item-counter">
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""></img>
          <p>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""></img>

          </div>
          }
        </div>
        
       
        <div className="food-item-name-rating padding_zero">
          <p className="food-item-name">
           {name}
          </p>
          <img className="food-item-rating" src={assets.rating_starts} alt="rating"></img>
        </div>

 
        <p className="food-item-desc padding_zero">{description}</p> {/* Optional truncation for description */}
        <p className="food-item-price padding_zero">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;





