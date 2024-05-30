import React, {useContext} from 'react';
import {Button, Container, Grid, GridColumn, GridRow, Header, Image} from "semantic-ui-react";
import {sweetnessOptions} from "../data/sweetness";
import {TOPPINGS} from "../data/toppings";
import {CartContext} from "./CartContext";
import * as _ from "lodash";
import {Col, Row} from "react-bootstrap";

export const CartProductList = () => {
    const {cartItems, removeFromCart} = useContext(CartContext);

    const getSweetness = (id) => {
        let temp = sweetnessOptions.filter((item) => item.key === id);
        return temp[0].text;
    }

    const listToppings = (array) => {
        const tempList = []
        for (let i = 0; i < array.topping.length; i++) {
            tempList.push(Number(array.topping[i]));
        }
        return (<div>
            <p>Toppings: </p>
            {tempList.map((top) => {
                    let temp = TOPPINGS.filter((item) => item.id === top);
                    return <p>+${temp[0].price} ({temp[0].topping})</p>
                }
            )}
        </div>);
    }



    return (
        <div>
            <Header as='h1' style={{fontFamily: 'Metro Nova Hawaiian Light', padding: '15px'}}>
                Your Cart Items
            </Header>
            <Container>
                {cartItems.map((item, index) => {
                    return (
                    //cartItems[idx1][idx2]:: [[{id: 1}, {drink: Tea}, {price: 3}, {img: ./img/img.png}, {milk: null}, {sweet: null}, {flavor: teaflavor}, {topping: null}, {uid: XXX}]]
                    <Grid key={index}>
                        <GridRow columns={4}>
                            <GridColumn width={4}>
                                <Image src={item[9]} fluid style={{borderRadius: '30%', margin: '20px'}}/>
                            </GridColumn>
                            <GridColumn width={5}>
                                <Header as='h2' style={{fontFamily: 'Metro Nova Hawaiian Light', fontSize: '20pt', margin: '20px'}}>{item[1].drink}</Header>
                                {(!item[6].teaFlavor) ? null
                                    :
                                    (<p style={{margin: '20px'}}>Tea: {item[6].teaFlavor}</p>)}
                                {(!item[7].topping) ? null
                                    :
                                    (<p style={{margin: '20px'}}>{listToppings(item[7])}</p>)}
                                {(!item[5].sweetness) ? null
                                    :
                                    (<p style={{margin: '20px'}}>({getSweetness(item[5].sweetness)} sweet)</p>)}
                                {(_.isEmpty(item[4])) ? null
                                    :
                                    (<p style={{margin: '20px'}}>+$1 ({item[4].milk})</p>)}
                            </GridColumn>
                            <GridColumn width={2} style={{margin: '20px'}}>
                                <Header as="h3" textAlign="right">${item[2].price.toFixed(2)}</Header>
                            </GridColumn>
                            <GridColumn style={{justifyContent: "space-between", margin: '10px'}} width={3}>
                                <Button style={{padding: "15px"}} onClick={() => removeFromCart(item[8].uid)} color="red">Remove
                                    from cart</Button>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                    )})}
            </Container>
        </div>
    )
}
