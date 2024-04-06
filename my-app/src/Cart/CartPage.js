import { Container} from 'semantic-ui-react';
import React, {useContext} from "react";
import CartTotalRow from "./CartTotalRow";
import {CartProductList} from "./CartProductList";
import {CartContext} from "./CartContext";


export const CartPage = () => {
    const cartTotal = GetCartTotal();

    if (cartTotal > 0) {
        return (
            <Container className="productContainer" style={{backgroundColor: "white"}}>
                <CartProductList/>
                <CartTotalRow/>
            </Container>
        );
    }

    return (
        <Container className="productContainer" style={{backgroundColor: "white"}}>
            <p>Your cart is empty.</p>
        </Container>
    )
}

const GetCartTotal = () => {
    const {cartItems} = useContext(CartContext);

    if (cartItems.length === 0) {
        return 0;
    } else {
        return cartItems.length;
    }
}