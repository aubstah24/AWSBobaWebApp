import React, { useState, setShowLogin, showLogin} from 'react';
import {Link , useMatch, useResolvedPath} from "react-router-dom";
import {Container, Header, Menu, Image, Button, Icon} from 'semantic-ui-react';
import AuthComponent from './AuthComponent';
import cart from './images/boba-cart.png';



export default class TopMenu extends React.Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name})


  render() {

    const { activeItem } = this.state;

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
                    <Link to="/cart"><Image style={{width:"3rem", height:"auto"}} src={cart}/></Link>
                    <Container className="circular" style={{borderRadius: "50%" , backgroundColor: "black",justifyContent:"center", display: "flex", alignItems: "center", width: ".5rem", height: ".5rem", position: "absolute", color:"white", bottom:0, right:0, transform: "translate(25%,25%)"}}>
                       3
                    </Container>
                </Button>
            </Menu.Item>

        </Menu>
        </div>
    );
  }
}

