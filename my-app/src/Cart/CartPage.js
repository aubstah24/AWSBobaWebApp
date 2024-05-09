import {Container, Header} from 'semantic-ui-react';
import React, {useContext} from "react";
import CartTotalRow from "./CartTotalRow";
import {CartProductList} from "./CartProductList";
import {CartContext} from "./CartContext";
import {Col, Row} from "react-bootstrap";


export const CartPage = () => {
    const cartTotal = GetCartTotal();

    if (cartTotal > 0) {
        return (
            <div>
                <Row>
                    <Col md={8}>
                        <div className="productContainer" style={{backgroundColor: "white"}}>
                            <CartProductList/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="productContainer" style={{backgroundColor: "tan"}}>
                            <CartTotalRow/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    return (
        <Container className="productContainer">
            <Header as="h1" textAlign="center">Your cart is empty.</Header>
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