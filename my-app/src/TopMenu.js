import React from 'react';
import {Link , useMatch, useResolvedPath} from "react-router-dom";
import {Container, Header, Menu, Icon, Dropdown, Image} from 'semantic-ui-react';

export default class TopMenu extends React.Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name})



  render() {

  const { activeItem } = this.state

    return (
    <div className="navcontainer">
        <Header as="h1"><Link to="/" className="site-title">Usui Boba Shop</Link></Header>
        <Menu borderless pointing secondary className="nav">
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
            <Menu.Item fitted position="right"><Link to="/login"><Icon name="user circle" size="big"/></Link></Menu.Item>
            <Menu.Item fitted><Link to="/cart"><Icon name="shop" size="big"/></Link></Menu.Item>

        </Menu>
        </div>
    );
  }
}
