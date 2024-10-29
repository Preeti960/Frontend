
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { useState } from 'react';
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx';

function App() {
  const [showLogin,setShowLogin]=useState(false);
  const [showCart,setShowCart]=useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    {showCart?<Cart setShowCart={setShowCart} />
    :<></>}

   
    <div className="App container">
      <Navbar setShowCart={setShowCart} setShowLogin={setShowLogin}></Navbar>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>

      </Routes>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
