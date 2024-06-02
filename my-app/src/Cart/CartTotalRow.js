import React, {useContext} from 'react';
import {Button, Form, Grid, GridRow, Header, TextArea} from "semantic-ui-react";
import {CartContext} from "./CartContext";
import {Link, Navigate} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {CheckoutForm, Payment} from "./checkout";
import {Elements} from "@stripe/react-stripe-js";
import StripeProvider from "./StripeProvider";
import {PaymentPage} from "./PaymentPage";

const CartTotalRow = () => {

    const { getTotalCost} = useContext(CartContext);

    const totalCost = getTotalCost();
    const tax = totalCost * 0.047;


    return (
        <div className="totalrow">
            {totalCost > 0 ? (
            <Grid style={{margin: "20px"}}>
                <GridRow>
                    <Form>
                        <TextArea placeholder="Additional Requests" />
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
                    <Link to="/checkout"><Button>Checkout</Button></Link>
                </GridRow>
            </Grid>)
                : (<Header>Your Cart is Empty</Header>
                )}
        </div>
    );
}

export default CartTotalRow;