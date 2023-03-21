import { NavLink } from "react-router-dom"
import './MainNavigation.scss'
import logo from '../../Components/Images/logo.png'
import { useState } from "react";
import TopNavBar from "../../Components/functions/TopNavBar";

const MainNavigation = () => {
    return (
        <div className="navigation-content-wrapper">
            <div className="navigation-wrapper">
                <div className="navigation-logo-wrapper">
                    <img className="navigation-logo" src={logo} alt='page logo'></img>
                </div>
                <ul className={`main-navigation`}>
                    <NavLink className='item-link' to='/homePage'> <li className="main-navigation-item">
                        Home page
                    </li> </NavLink>
                    <NavLink className='item-link' to='/reviews'> <li className="main-navigation-item">
                        Reviews page
                    </li></NavLink>
                    <NavLink className='item-link' to='/books'> <li className="main-navigation-item">
                        Books List page
                    </li> </NavLink>
                </ul>
                <TopNavBar></TopNavBar>
            </div>
        </div>
    )
}

export default MainNavigation