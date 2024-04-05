import { Container} from 'semantic-ui-react';
import React, {useContext} from "react";
import CartTotalRow from "../Cart/CartTotalRow";
import {CartProductList} from "../Cart/CartProductList";
import {CartContext} from "../Cart/CartContext";


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
    let total = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            total = total + cartItems[item];
        }
    }
    if (total === 0) {
        return 0;
    } else {
        return total;
    }
}