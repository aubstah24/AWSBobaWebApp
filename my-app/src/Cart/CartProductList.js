import React, {useContext} from 'react';
import CartProductRow from './CartProductRow';
import {Container, Header} from "semantic-ui-react";
import {PRODUCTS} from "../data/products";
import {CartContext} from "./CartContext";
import cartProductRow from "./CartProductRow";

export const CartProductList = (props) => {
    const {cartItems} = useContext(CartContext);

    return (
        <div>
            <Header as='h1'>
                Your Cart Items
            </Header>
            <Container>

                if (cartItems.length) {
                    cartItems.map((innerArray, idx1) => {
                        console.log("CARTPRODUCTLIST\n")
                        console.log(idx1)
                        console.log(innerArray)
                    return innerArray.map((product, idx2) => {
                        console.log(idx2)
                        console.log(product)
                        return (
                            <CartProductRow data={product} product={product} index={[idx1, idx2]} />
                        )
                    })
                })}

            </Container>
        </div>
    )
}