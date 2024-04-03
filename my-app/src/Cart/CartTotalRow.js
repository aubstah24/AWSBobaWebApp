import React, {useContext} from 'react';
import {Button, Grid, GridColumn, GridRow, Header} from "semantic-ui-react";
import {CartContext} from "./CartContext";

const CartTotalRow = (props) => {

    const {cartItems, getTotalCost} = useContext(CartContext);

    const totalCost = getTotalCost();
    const tax = {totalCost} * 0.0047;

    return (
        <div>
            {totalCost > 0 ? (
            <Grid>
                <GridRow>
                        Subtotal: ${totalCost}
                </GridRow>
                <GridRow>
                    Tax: ${tax}
                </GridRow>
                <GridRow>
                    Total: ${totalCost+tax}
                </GridRow>
                <GridRow>
                        <Button>
                            Checkout
                        </Button>
                </GridRow>
            </Grid>)
                : (<Header>Your Cart is Empty</Header>
            )}
        </div>
    );
}

export default CartTotalRow;