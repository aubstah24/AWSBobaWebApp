import React, {useContext} from 'react';
import {Button, Form, Grid, GridRow, Header, TextArea} from "semantic-ui-react";
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
                    <Form>
                        <TextArea placeholder="Additional Requests"/>
                    </Form>
                </GridRow>
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
                    <a href="https://buy.stripe.com/test_00g00s5Zf6fXdMc9AC">
                        <Button color="black">Checkout</Button>
                    </a>
                </GridRow>
            </Grid>)
                : (<Header>Your Cart is Empty</Header>
                )}
        </div>
    );
}

export default CartTotalRow;