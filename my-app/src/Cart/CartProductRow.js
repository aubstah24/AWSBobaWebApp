import React, {useContext} from 'react';
import {Button, Grid, GridColumn, GridRow, Header, Image, Input} from "semantic-ui-react";
import {CartContext} from "./CartContext";

const CartProductRow = (props) => {
    const { id, drink, price, img } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartCount} = useContext(CartContext);

    return (
        <div className="row product">
            <Grid>
                <GridRow columns={4}>
                    <GridColumn>
                        <Image src={img} size="large" fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Header as='h2'>{drink}</Header>
                    </GridColumn>
                    <GridColumn>
                        <Header as="h3">${price}</Header>
                    </GridColumn>
                    <GridColumn>
                        <Button onClick={() => removeFromCart(id)}> - </Button>
                        <Input className="cartinput" value={cartItems[id]} onChange={(e) => updateCartCount(Number(e.target.value))}/>
                        <Button onClick={() => addToCart(id)}> + </Button>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
}

export default CartProductRow;
