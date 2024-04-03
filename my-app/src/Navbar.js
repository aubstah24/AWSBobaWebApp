import {Link , useMatch, useResolvedPath} from "react-router-dom";
import {Dropdown, Icon, Image, Item} from "semantic-ui-react";
import icon from './images/signinIcon.png';

export default function Navbar() {
    const path = window.location.pathname
    return (
        <div className='navcontainer'>
            <nav className="nav">
                <Link to="/" className="site-title">Usui Boba Shop</Link>
                <ul>
                    <CustomLink to="/">HOME</CustomLink>
                    <CustomLink to="/menu">MENU</CustomLink>
                    <Link to="https://buy.stripe.com/test_14k7sUdrHfQx5fG145">ONLINE ORDER</Link>
                    <CustomLink to="/about">ABOUT US</CustomLink>
                    <CustomLink to="/location">LOCATION</CustomLink>
                </ul>
                <i class="fas fa-user-circle"></i>
            </nav>
        </div>
    )
}

function CustomLink({to, children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}