import React, {useContext} from 'react';
import {Button, Container, Form, Grid, GridRow, Header, TextArea} from "semantic-ui-react";
import {CartContext} from "./CartContext";
import {supabase} from "../supabase_client";

const CartTotalRow = () => {

    const { getTotalCost} = useContext(CartContext);

    const totalCost = getTotalCost();
    const tax = totalCost * 0.047;


    return (
        <div>
            {totalCost > 0 ? (
                <Container className='totalrow'>
            <Grid>
                <GridRow>
                    <div className='totalcost'>
                        Subtotal: ${totalCost.toFixed(2)}
                    </div>
                </GridRow>
                <GridRow>
                    <div className='totalcost'>
                        Tax: ${tax.toFixed(2)}
                    </div>
                </GridRow>
                <GridRow>
                    <div className='totalcost'>
                        Total: ${(totalCost + tax).toFixed(2)}
                    </div>
                </GridRow>
                <GridRow>
                    <div className='totalcost'>
                        <Form>
                            <TextArea placeholder="Additional Requests"/>
                        </Form>
                    </div>
                </GridRow>
                <GridRow>
                    <a href="https://buy.stripe.com/test_00g00s5Zf6fXdMc9AC">
                        <Button color="black">Checkout</Button>
                    </a>
                </GridRow>
            </Grid>
                </Container>)
                : (<Header>Your Cart is Empty</Header>
                )}
        </div>
    );
}

export default CartTotalRow;