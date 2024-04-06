import React, {useContext} from 'react';
import CartProductRow from './CartProductRow';
import {Container, Header} from "semantic-ui-react";
import {PRODUCTS} from "../data/products";
import {CartContext} from "./CartContext";
import cartProductRow from "./CartProductRow";

export const CartProductList = (props) => {
    const {cartItems} = useContext(CartContext);
    let cartLength = GetCartTotal;

    return (
        <div>
            <Header as='h1'>
                Your Cart Items
            </Header>
            <Container>
                {cartItems.map((product) => {
                    return <CartProductRow data={cartItems[product]}/>;
                    }
                )}
            </Container>
        </div>
    )
}
function GetCartTotal(){
    const {cartItems} = useContext(CartContext);

    if (cartItems.length === 0) {
        return 0;
    } else {
        return cartItems.length;
    }
}