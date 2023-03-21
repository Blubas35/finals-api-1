import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import '../styles/BurgerButton.scss';
import 'font-awesome/css/font-awesome.min.css';

const TopNavBar = () => {

  const [isResponsive, setIsResponsive] = useState(false)

  const handleMenuClick = (e) => {
    setIsResponsive(!isResponsive)
  };

  return (

    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <Link to='/homePage' className="active">Home</Link>
      <Link to='/reviews'>Reviews</Link>
      <Link to='/books'>Book list</Link>
      <Link className="icon" onClick={() => handleMenuClick()}>
        <i className="fa fa-bars"></i>
      </Link>
    </div>
  );
}

export default TopNavBar;