import React from 'react';
import {Grid, GridColumn, GridRow} from "semantic-ui-react";

const CartTotalRow = ({ cart }) => {
    return (
        <Grid>
            <GridRow>
                <GridColumn>
                    Total: {cart.subtotal.formatted_with_symbol}
                </GridColumn>
            </GridRow>
        </Grid>
    );
}

export default CartTotalRow;