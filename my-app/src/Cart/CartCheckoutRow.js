import React from 'react';
import {Button, Grid, GridColumn, GridRow} from "semantic-ui-react";

const CartCheckoutRow = () => {
    return (
        <Grid>
            <GridRow>
                <GridColumn>
                    <Button>
                        Checkout
                    </Button>
                </GridColumn>
            </GridRow>
        </Grid>
    );
}

export default CartCheckoutRow;