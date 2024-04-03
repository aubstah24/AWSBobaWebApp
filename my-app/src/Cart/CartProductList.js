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
                {PRODUCTS.map((product, key ) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartProductRow data={product} key={product.id}/>;
                        }
                    }
                )}
            </Container>
        </div>
    )
}