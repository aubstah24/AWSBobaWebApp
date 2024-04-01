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


            <ListGroup>
                {
                    cart.map((products) => (
                        <ListGroup.Item key={products.id}>
                            <GridRow>
                                <GridColumn>
                                    <Image src={products.img} fluid rounded size="small"/>
                                </GridColumn>
                                <GridColumn>
                                    <span>{products.drink}</span>
                                </GridColumn>
                                <GridColumn>
                                    $ {products.price}
                                </GridColumn>
                                <GridColumn>
                                    <Button>-</Button>
                                    <span style={{padding: "10px"}}>5</span>
                                    <Button>+</Button>
                                </GridColumn>
                            </GridRow>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>

            <div className="summary">
                <span>Subtotal ({cart.length}) items</span>
                <span> Total: $ {cart.length * cart.items.price} </span>
            </div>
            <Button disabled={cart.length === 0}>
                Proceed to Checkout
            </Button>
        </Container>

    )
}