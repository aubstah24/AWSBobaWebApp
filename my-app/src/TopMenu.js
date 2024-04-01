import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Header, Menu, Image, Button} from 'semantic-ui-react';
import AuthComponent from './AuthComponent';
import bobaicon from './images/boba-cart.png';
import {Badge} from "@aws-amplify/ui-react";
import CartContext from "./Cart/CartContext";



export default class TopMenu extends React.Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name});


  render() {

    const { activeItem } = this.state;
    const {cart} = useContext(CartContext);


    return (
    <div className="navcontainer">
        <Header as="h1"><Link to="/" className="site-title">Usui Boba Shop</Link></Header>
        <Menu borderless pointing secondary stackable className="nav">
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}>
                <Link to="/">HOME</Link>
                </Menu.Item>
            <Menu.Item
                name='menu'
                active={activeItem === 'menu'}
                onClick={this.handleItemClick}>
                <Link to="/menu">MENU</Link>
                </Menu.Item>
            <Menu.Item
                name='order'
                active={activeItem === 'order'}
                onClick={this.handleItemClick}>
                <Link to="/order">ORDER ONLINE</Link>
                </Menu.Item>
            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}>
                <Link to="/about">ABOUT US</Link>
                </Menu.Item>
            <Menu.Item
                name='location'
                active={activeItem === 'location'}
                onClick={this.handleItemClick}>
                <Link to="/location">LOCATION</Link>
                </Menu.Item>
            <Menu.Item fitted position="right">
                <AuthComponent/>
            </Menu.Item>
            <Menu.Item fitted>
                <Button circular>
                    <Link to="/cart"><Image style={{width:"2.5rem", height:"auto"}} src={bobaicon}/>
                    <Badge style={{justifyContent: "right", display: "flex"}}>{cart.length}</Badge>
                    </Link>
                </Button>
            </Menu.Item>

        </Menu>
        </div>
    );
  }
}


