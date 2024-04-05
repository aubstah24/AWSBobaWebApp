import React, {useContext} from 'react';
import {Button, Grid, GridRow, Header} from "semantic-ui-react";
import {CartContext} from "./CartContext";

const CartTotalRow = () => {

    const { getTotalCost} = useContext(CartContext);

    const totalCost = getTotalCost();
    const tax = totalCost * 0.047;

    return (
        <div className="totalrow">
            {totalCost > 0 ? (
            <Grid>
                <GridRow>
                        Subtotal: ${totalCost.toFixed(2)}
                </GridRow>
                <GridRow>
                    Tax: ${tax.toFixed(2)}
                </GridRow>
                <GridRow>
                    Total: ${(totalCost+tax).toFixed(2)}
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