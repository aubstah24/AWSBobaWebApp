import React from 'react';
import {Button, Grid, GridColumn, GridRow} from "semantic-ui-react";

const CartCheckoutRow = () => {
    return (
        <Grid>
            <GridRow>
                <Button>
                    Checkout
                </Button>
            </GridRow>
        </Grid>
    );
}

export default CartCheckoutRow;