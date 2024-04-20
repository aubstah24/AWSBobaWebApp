import React, {useContext} from 'react';
import {Button, Container, Grid, GridColumn, GridRow, Header, Image} from "semantic-ui-react";
import {TOPPINGS} from "../data/toppings";
import {sweetnessOptions} from "../data/sweetness";
import {milkoptions} from "../data/milkoptions";
import {CartContext} from "./CartContext";

export const CartProductList = () => {
    const {cartItems, removeFromCart} = useContext(CartContext);

    const getSweetness = (id) => {
        let temp = sweetnessOptions.filter((item) => item.key === id);
        return temp[0].text;
    }


    const listToppings = (array) => {
        const tempList = []
        for (let i = 0; i < array.topping.length; i++) {
            tempList.push(array.topping[i]);
        }
        return (<div>
                <p>Toppings: </p>
                {tempList.map((top) => {
                    let temp = TOPPINGS.filter((item) => item.id === top);
                        return <p>+${temp[0].price} ({temp[0].topping})</p>
                    }
                )}
        </div>);
        //toppings = [Regular Boba, Lychee Jelly, ...]
    }

    const getMilk = (id) => {
        let temp = milkoptions.filter((item) => item.key === id);
        return <p>+${temp[0].value} {temp[0].text}</p>;
    }



    return (
        <div>
            <Header as='h1'>
                Your Cart Items
            </Header>
            <Container>
                {cartItems.map((item, index) => {
                    return (
                    //cartItems[idx1][idx2]:: [[{id: 1}, {drink: Tea}, {price: 3}, {img: ./img/img.png}, {milk: null}, {sweet: null}, {flavor: teaflavor}, {topping: null}, {uid: XXX}]]
                    <Grid key={index}>
                        <GridRow columns={4}>
                            <GridColumn>
                                <Image src={item[3].img} fluid/>
                            </GridColumn>
                            <GridColumn>
                                <Header as='h2'>{item[1].drink}</Header>
                                {(!item[6].teaFlavor) ? null
                                    :
                                    (<p>Tea: {item[6].teaFlavor}</p>)}
                                {(!item[7].topping) ? null
                                    :
                                    (<p>{listToppings(item[7])}</p>)}
                                {(!item[5].sweetness) ? null
                                    :
                                    (<p>({getSweetness(item[5].sweetness)} sweet)</p>)}
                                {(!item[4].milk) ? null
                                    :
                                    (<p>{getMilk(item[4].milk)}</p>)}
                            </GridColumn>
                            <GridColumn>
                                <Header as="h3" textAlign="right">${item[2].price}</Header>
                            </GridColumn>
                            <GridColumn style={{justifyContent: "space-between"}}>
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
