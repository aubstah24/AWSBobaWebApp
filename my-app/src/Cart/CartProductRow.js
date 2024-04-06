import React, {useContext} from 'react';
import {Button, Grid, GridColumn, GridRow, Header, Image, Input} from "semantic-ui-react";
import {CartContext} from "./CartContext";

const CartProductRow = (props) => {

    const {cartItems, addToCart, removeFromCart, updateCartCount} = useContext(CartContext);

    return (
        <div className="row product">
            <Grid>
                <GridRow columns={4}>
                    <GridColumn>
                        <Image src={props.img} size="large" fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Header as='h2'>{props.drink}</Header>
                    </GridColumn>
                    <GridColumn>
                        <Header as="h3">${props.price}</Header>
                    </GridColumn>
                    <GridColumn>
                        <Button onClick={() => removeFromCart(props)}> - </Button>
                        <Input className="cartinput" value={cartItems[props]} onChange={(e) => updateCartCount(Number(e.target.value))}/>
                        <Button onClick={() => addToCart(props)}> + </Button>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
}

export default CartProductRow;
