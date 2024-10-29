import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../../Components/FoodItem/FoodItem";
import CartTotal from "../../Components/CartTotal/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowCart }) => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate =useNavigate();
  return (
    <div className="container cart" style={{"padding":"0px 10px"}}>
      <div className="row cart-items">
        <div className="cart-items-title">
          <p className="col-3">Items</p>
          <p className="col-2">Title</p>
          <p className="col-1">Price</p>
          <p className="col-1">Quantity</p>
          <p className="col-1">Total</p>
          <p className="col-1">Remove</p>
        </div>
        <br></br>
        <hr></hr>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="row cart-item-title cart-items-item">
                  <img className="col-3" src={item.image} alt=""></img>
                  <p className="col-2"> {item.name}</p>
                  <p className="col-1">${item.price}</p>
                  <p className="col-1">{cartItems[item._id]}</p>
                  <p className="col-1">${item.price * cartItems[item._id]}</p>
                  <p
                    className="col-1 cross"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr></hr>
              </div>
            );
          }
        })}
      </div>
      <div className="row" style={{"margin-top": "50px","width": "100%"}}>
      <div className="col-sm-6 col-xs-12 cart-bottom">
      <CartTotal
        buttonText="Proceed To Checkout"
        buttonAction={() => navigate('/order')}
      />
    </div>
        <div className=" col-sm-6 col-xs-12 promocode">
          <p>If you have a promo code,Enter it here</p>
          <div className="cart-promocode-input">
            <input className="promocode-input" type="text" placeholder="promo code"></input>
            <button className="promocode-submitBtn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
