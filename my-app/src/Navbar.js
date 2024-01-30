import {Link , useMatch, useResolvedPath} from "react-router-dom";
import {Container} from "semantic-ui-react";

export default function Navbar() {
    const path = window.location.pathname
    return (
        <Container className='navcontainer'>
            <nav className="nav">
                <Link to="/" className="site-title">Usui Boba Shop</Link>
                <ul>
                    <CustomLink to="/">HOME</CustomLink>
                    <CustomLink to="/menu">MENU</CustomLink>
                    <CustomLink to="/order">ONLINE ORDER</CustomLink>
                    <CustomLink to="/about">ABOUT US</CustomLink>
                </ul>
            </nav>
        </Container>
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