import React, {useContext} from 'react';
import {Button, Container, Grid, GridColumn, GridRow, Header, Image} from "semantic-ui-react";
import {TOPPINGS} from "../data/toppings";
import {sweetnessOptions} from "../data/sweetness";
import {MILKOPTIONS} from "../data/milkoptions";
import {CartContext} from "./CartContext";

export const CartProductList = (props) => {
    const {cartItems, removeFromCart} = useContext(CartContext);

    const getSweetness = (id) => {
        return sweetnessOptions.filter((item) => item.id === id);
    }

    const getToppings = (id) => {
        const top = TOPPINGS.filter((item) => item.id === id);
        return top[0].topping;
    }
    const listToppings = (array) => {
        const toppings = []
        for (let i = 0; i < array.topping.length; i++) {
            toppings.push(getToppings(array.topping[i]));
        }
        return (<div>
                <p>Toppings: </p>
                {toppings.map((top) => (
                        <p>{top}</p>
                    )
                )}
        </div>);
        //toppings = [Regular Boba, Lychee Jelly, ...]
    }

    const getMilk = (id) => {
        return MILKOPTIONS.filter((item) => item.id === id);
    }


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
                                {(!item[6].teaFlavor) ?
                                    (<p>{listToppings(item[7])}</p>)
                                    :
                                    (<p>Tea: {item[6].teaFlavor}</p>)}
                                {(!item[5].sweetness) ? null : (<p>{getSweetness(item[5].sweetness)} sweet</p>)}
                                {(!item[4].milk) ? null : (<p>Milk Substitute: {getMilk(item[4].milk)}</p>)}
                            </GridColumn>
                            <GridColumn>
                                <Header as="h3" textAlign="right">${item[2].price.toFixed(2)}</Header>
                            </GridColumn>
                            <GridColumn style={{ justifyContent: "space-between" }}>
                                <Button style={{padding: "15px"}} onClick={() => removeFromCart(index)} color="red">Remove from cart</Button>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                ))}


            </Container>
        </div>
    )
}

