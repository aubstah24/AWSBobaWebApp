import React, {useContext} from 'react';
import CartProductRow from './CartProductRow';
import {Button, Container, Grid, GridColumn, GridRow, Header, Image, Input} from "semantic-ui-react";
import {PRODUCTS} from "../data/products";
import {CartContext} from "./CartContext";

export const CartProductList = (props) => {
    const {cartItems, removeFromCart} = useContext(CartContext);

    return (
        <div>
            <Header as='h1'>
                Your Cart Items
            </Header>
            <Container>
                {cartItems.map((item, index) => (
       //cartItems[idx1][idx2]:: [[{id: 1}, {drink: Tea}, {price: 3}, {img: ./img/img.png}, {milk: null}, {sweet: null}, {flavor: teaflavor}, {topping: null}]]
                    <Grid>
                        <GridRow columns={4}>
                            <GridColumn>
                                <Image src={item[3].img} fluid/>
                            </GridColumn>
                            <GridColumn>
                                <Header as="h3">1x</Header>
                                <Header as='h2'>{item[1].drink}</Header>
                                {(!item[6].teaFlavor) ? (<p>Toppings: {item[7].topping} $1</p>) : (<p>Tea: {item[6].teaFlavor}</p>)}
                                {(!item[5].sweet) ? null : (<p>{item[5].sweet } sweet</p>)}
                                {(!item[4].milk) ? null : (<p>Milk Substitute: {item[4].milk}</p>)}
                            </GridColumn>
                            <GridColumn>
                                <Header as="h3" textAlign="right">${item[2].price.toFixed(2)}</Header>
                            </GridColumn>
                            <GridColumn style={{ justifyContent: "space-between" }}>
                                <Button style={{padding: "15px"}} onClick={() => removeFromCart(index)} color="red">Remove from cart
                                </Button>

                            </GridColumn>
                        </GridRow>
                    </Grid>

                ))}


            </Container>
        </div>
    )
}

