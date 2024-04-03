import { Container} from 'semantic-ui-react';
import React, {useContext} from "react";
import CartTotalRow from "../Cart/CartTotalRow";
import {CartProductList} from "../Cart/CartProductList";
import {CartContext} from "../Cart/CartContext";


export const CartPage = () => {
    const {cartItems} = useContext(CartContext);

    if (cartItems.length > 0) {
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