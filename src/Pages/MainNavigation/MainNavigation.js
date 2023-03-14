import { NavLink } from "react-router-dom"
import './MainNavigation.scss'
import logo from '../../Components/Images/logo.png'

const MainNavigation = () => {
    return (
        <div className="navigation-content-wrapper">
            <div className="navigation-wrapper">
                <div className="navigation-logo-wrapper">
                    <img className="navigation-logo" src={logo} alt='page logo'></img>
                </div>
                <ul className='main-navigation'>
                    <li className="main-navigation-item">
                        <NavLink className='item-link' to='/homePage'>Home page</NavLink>
                    </li>
                    <li className="main-navigation-item">
                        <NavLink className='item-link' to='/reviews'>Reviews page</NavLink>
                    </li>
                    <li className="main-navigation-item">
                        <NavLink className='item-link' to='/books'>Books List page</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainNavigation