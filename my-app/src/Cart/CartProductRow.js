import React, {useContext} from 'react';
import {Button, Grid, GridColumn, GridRow, Header, Image, Input} from "semantic-ui-react";
import {CartContext} from "./CartContext";

const CartProductRow = (props) => {
    const { id, drink, price, img } = props.data;
    const {cartItems, addToCart, removeFromCart, getItemCount, updateCartCount} = useContext(CartContext);

    const count = getItemCount(id);

    return (
        <div className="row product">
            <Grid>
                <GridRow>
                    <GridColumn>
                        <Image src={img} fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Header as='h2'>{drink}</Header>
                    </GridColumn>
                    <GridColumn>
                        <Header as='h5'>{count}</Header>
                    </GridColumn>
                    <GridColumn>
                        <p>${price}</p>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <Button onClick={() => removeFromCart(id)}> - </Button>
                    <Input value={cartItems[id]} onChange={(e) => updateCartCount(Number(e.target.value))}/>
                    <Button onClick={() => addToCart(id)}> + </Button>
                </GridRow>
            </Grid>
        </div>
    );
}

export default CartProductRow;