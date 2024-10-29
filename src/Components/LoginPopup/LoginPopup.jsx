import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/frontend_assets/assets';


const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState]=useState("Login")

  return (
    <>
 <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title row'>
                <h2 className='col-10 login-name'>{currState}</h2>
                <img className='col-2 img-fluid login-cancel' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''></img>
            </div>
            <div className='login-popup-inputs row'>
            {currState==="Login"?<></>:<input className='col-12 margin_ inputs' type='text' placeholder='Your Name' required></input>}
                
                <input className='col-12 margin_ inputs' type='email' placeholder='Your Email' required></input>
                <input className='col-12 margin_ inputs' type='password' placeholder='Your Password' required></input>
            </div>
            <button className='login-btn'>{currState==="Sign Up"?"Create account":"Login"}</button>

            {currState==="Sign Up"?<div className='login-popup-condition row'>
                <input className='col-1' type='checkbox' required></input>
                <p className='col-11' style={{"font-size":"14px"}}>I agree to the terms of use & privacy policy</p>
            </div>:<></>}
            
            {currState==="Login"
            ?<p style={{"font-size":"14px"}}>Create a new account?<span className='changeBtn'  onClick={()=>setCurrState("Sign Up")} >Click Here</span></p>
            :<p style={{"font-size":"14px"}}>Already have an account?<span className='changeBtn' onClick={()=>setCurrState("Login")}>Login Here</span></p>}
            
            
        </form>
    </div>
    </>
  )
}

export default LoginPopup