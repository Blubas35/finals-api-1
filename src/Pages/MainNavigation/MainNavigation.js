import { NavLink } from "react-router-dom"
import Container from "../../Components/container/Container"

const MainNavigation = () => {
    return (
        <Container>
            <ul className='main-navigation'>
                <li>
                    <NavLink to='/reviews'>Reviews page</NavLink>
                </li>
                <li>
                    <NavLink to='/books'>Books List page</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Home page</NavLink>
                </li>
            </ul>
        </Container>
    )
}

export default MainNavigation