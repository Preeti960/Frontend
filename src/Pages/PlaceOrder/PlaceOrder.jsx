// import React, { useContext } from "react";
import "./PlaceOrder.css";
// import { StoreContext } from "../../Context/StoreContext";
import CartTotal from "../../Components/CartTotal/CartTotal";

const PlaceOrder = () => {
  // const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order row">
      <div className="col-xs-12 col-sm-4 place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input className="placeorder_inputprop col-xs-12 col-sm-6" type="text" placeholder="First Name"></input>
          <input className="placeorder_inputprop col-xs-12 col-sm-6" type="text" placeholder="Last Name"></input>
        </div>
        <input className="placeorder_inputprop col-xs-12 col-sm-12" type="email" placeholder="Email address"></input>
        <input className="placeorder_inputprop col-xs-12 col-sm-12" type="text" placeholder=" Street"></input>
        <div className="multi-fields" style={{"padding":"1px"}}>
          <input className="placeorder_inputprop col-xs-12 col-sm-6" type="text" placeholder="City "></input>
          <input className="placeorder_inputprop col-xs-12 col-sm-6" type="text" placeholder="State "></input>
        </div>
        <div className="multi-fields col-sm-12" style={{"padding":"0px"}}>
          <input className="placeorder_inputprop col-xs-12 col-sm-6"  type="text" placeholder=" Zip code"></input>
          <input className="placeorder_inputprop col-xs-12 col-sm-6" type="text" placeholder=" Country"></input>
        </div>
        <input className="placeorder_inputprop col-sm-12" type="text" placeholder=" Phone"></input>
      </div>
      <div className="col-sm-2"></div>

      <div className="col-sm-4 place-order-right">
      <CartTotal
        buttonText="Proceed To Payment"
        buttonAction={() => console.log('Proceeding to payment...')}
      />
    </div>
    </form>
  );
};

export default PlaceOrder;
