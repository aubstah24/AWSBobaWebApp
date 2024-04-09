import React, {useContext} from 'react';
import CartProductRow from './CartProductRow';
import {Container, Header} from "semantic-ui-react";
import {PRODUCTS} from "../data/products";
import {CartContext} from "./CartContext";

export const CartProductList = (props) => {
    const {cartItems} = useContext(CartContext);

    return (
        <div>
            <Header as='h1'>
                Your Cart Items
            </Header>
            <Container>
                {cartItems.map((idx1, idx2) => (
                    //cartItems[idx1][idx2]:: [[{id: 1}, {drink: Tea}, {price: 3}, {img: ./img/img.png}, {milk: null}, {sweet: null}, {flavor: teaflavor}, {topping: null}]]
                    <CartProductRow idx1={idx1} idx2={idx2}
                                    drink={cartItems[idx1][idx2].drink}
                                    price={cartItems[idx1][idx2].price}
                                    img={cartItems[idx1][idx2].img}
                                    milk={cartItems[idx1][idx2].milk}
                                    sweet={cartItems[idx1][idx2].sweet}
                                    flavor={cartItems[idx1][idx2].flavor}
                                    topping={cartItems[idx1][idx2].topping}
                                    />
                ))}


            </Container>
        </div>
    )
}

