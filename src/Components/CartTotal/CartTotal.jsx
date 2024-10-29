import React, { useContext } from 'react';
import './CartTotal.css';
import { StoreContext } from '../../Context/StoreContext';

const CartTotal = ({ buttonText, buttonAction }) => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="row place-order-right">
      <div className="col-sm-12 cart-total">
        <h2>Cart Totals</h2>
        <div className="col-sm-12 cart-total-details">
          <p className='col-sm-6'>Subtotal</p>
          <div className='col-sm-3'></div>
          <p className='col-sm-3'>${getTotalCartAmount()}</p>
        </div>
        <div className="col-sm-12 cart-total-details">
          <p className='col-sm-6'>Delivery Fee</p>
          <div className='col-sm-3'></div>
          <p className='col-sm-3'>${getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>
        <div className="col-sm-12 cart-total-details">
          <p className='col-sm-6'>Total</p>
          <div className='col-sm-3'></div>
          <p className='col-sm-3'>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
        </div>
      </div>
      <button onClick={buttonAction} className="proceedPaymentBtn">
        {buttonText}
      </button>
    </div>
  );
};

export default CartTotal;
