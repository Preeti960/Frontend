import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="row align-items-center w-100">
            {/* Logo Section */}
            <div className="col-5 col-md-3">
              <a
                className="navbar-brand"
                href="#ghhg"
                style={{"padding-top":"14px"}}
              >
               <Link to='/'><img className="img-fluid" src={assets.logo} alt="logo-img" /></Link> 
              </a>
            </div>

            <div className="col-2 d-block d-sm-none " type="submit">
              <img src={assets.search_icon} alt="search-icon" />
            </div>
            <div className="col-3 cart-icon img-fluid d-block d-sm-none ">
            <Link to='/cart'><img src={assets.basket_icon} alt="basket-icon" /> </Link>
            </div>

            {/* Toggler button for mobile */}
            <div className="col-2 d-lg-none text-end">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            {/* Navbar Links */}
            <div
              className="col-lg-5 collapse navbar-collapse navbar_text"
              id="navbarScroll"
            >
              <ul
                className="navbar-nav navbar-menu me-auto my-2 my-lg-0 navbar-nav-scroll justify-content-center"
                style={{ padding: "0px 30px", "font-size": "18px" }}
              >
                <Link
                  to="/"
                  onClick={() => setMenu("home")}
                  className={menu === "home" ? "active" : ""}
                >
                  <a className="nav-link" href="#h">
                    Home
                  </a>
                </Link>

                <li className="nav-item">
                  <a className="nav-link" href="#explore-menu">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#app-download">
                    Mobile-app
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact-us
                  </a>
                </li>
              </ul>
            </div>

            {/* Search and icons */}
            <div className="col-lg-4 col-12">
              <form
                className="d-flex right-nav justify-content-end "
                role="search"
                style={{ gap: "15px" }}
              >
                <input
                  className="form-control me-2 d-none d-sm-block"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ fontSize: "18px" }}
                />
                <div
                  className="btn search-btn search-icon d-none d-sm-block"
                  type="submit"
                >
                  <img src={assets.search_icon} alt="search-icon" />
                </div>
                <div  className="cart-icon img-fluid d-none d-sm-block">
                <Link to='/cart'> <img src={assets.basket_icon} alt="basket-icon" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
                 
                </div>
                <div onClick={()=>setShowLogin(true)} className="signin-btn d-none d-sm-block">Sign In</div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
