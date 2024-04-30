import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Grid, GridColumn, GridRow, Header, Image} from "semantic-ui-react";
import {sweetnessOptions} from "../data/sweetness";
import {TOPPINGS} from "../data/toppings";
import {CartContext} from "./CartContext";
import {supabase} from "../supabase_client";
import * as _ from "lodash";

export const CartProductList = () => {
    const {cartItems, removeFromCart} = useContext(CartContext);
    const [bobaToppings, setBobaToppings] = useState([]);

    // useEffect(() => {
    //     getToppings();
    // }, []);
    //
    //
    // async function getToppings() {
    //     const {data} = await supabase.from('BobaToppings').select();
    //     setBobaToppings(data);
    //     console.log(bobaToppings);
    // }

    async function fetchData(id) {
        const {data} = await supabase.from('BobaToppings').select().eq('id', id);
        return data[0];
    }

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


    //
    // async function getMilk(id){
    //     const {data} = await supabase.from('MilkOptions').select().eq('key', id);
    //     let milkName = '';
    //     data.map((item) => {
    //         if (item.key === id){
    //             milkName = item.text;
    //         }
    //     })
    //     console.log(milkName)
    //     return <p>+$1 ({milkName})</p>
    // }



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
                                <Image src={item[9]} fluid/>
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
                                {(_.isEmpty(item[4])) ? null
                                    :
                                    (<p>+$1 ({item[4].milk})</p>)}
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
