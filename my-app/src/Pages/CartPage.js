import {Button, CardGroup, Container, GridColumn, GridRow, Image} from 'semantic-ui-react';
import {Col, ListGroup, Row, Form} from "react-bootstrap";
import React, {useContext, useEffect} from "react";
import products from "../data/items.json";
import ShoppingCartContext, {useCart} from "../ShoppingCartContext";
import CartProductList from "../Cart/CartProductList";
import CartTotalRow from "../Cart/CartTotalRow";
import CartCheckoutRow from "../Cart/CartCheckoutRow";


export const CartPage = () => {

    const { cart } = useContext(ShoppingCartContext);

    if (cart > 0) {
        return (
            <Container className="productContainer" style={{backgroundColor: "white"}}>
                <CartProductList cart={cart}/>
                <CartTotalRow cart={cart}/>
                <CartCheckoutRow/>
            </Container>
        );
    }

    return (
        <Container className="productContainer" style={{backgroundColor: "white"}}>
            <p>Your cart is empty.</p>
        </Container>
    )
}