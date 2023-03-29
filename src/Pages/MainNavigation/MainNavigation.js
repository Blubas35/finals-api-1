import { Link } from "react-router-dom"
import './MainNavigation.scss'
import logo from '../../Components/Images/logo.png'
import TopNavBar from "../../Components/functions/TopNavBar";

const MainNavigation = () => {
    return (
        <div className="navigation-content-wrapper">
            <div className="navigation-wrapper">
                <div className="navigation-logo-wrapper">
                    <Link to='/homePage'>
                        <img className="navigation-logo" src={logo} alt='page logo'></img>
                    </Link>
                </div>
                <TopNavBar></TopNavBar>
            </div>
        </div>
    )
}

export default MainNavigation