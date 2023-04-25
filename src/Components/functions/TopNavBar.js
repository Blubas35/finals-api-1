import React, { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import '../styles/BurgerButton.scss';
import 'font-awesome/css/font-awesome.min.css';

const TopNavBar = () => {

  const [isResponsive, setIsResponsive] = useState(false)

  const handleMenuClick = (e) => {
    setIsResponsive(!isResponsive)
  };

  return (

    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <NavLink to='/homePage' activeClassName="active">Home</NavLink>
      <NavLink to='/reviews' activeClassName="active">Reviews</NavLink>
      <NavLink to='/books' activeClassName="active">Book list</NavLink>
      <NavLink className="icon" onClick={() => handleMenuClick()}>
        <i className="fa fa-bars"></i>
      </NavLink>
    </div>
  );
}

export default TopNavBar;