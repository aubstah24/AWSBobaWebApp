import React, {useContext} from 'react';
import {Form, Grid, GridRow, Header, TextArea} from "semantic-ui-react";
import {CartContext} from "./CartContext";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import {CheckoutForm} from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const CartTotalRow = () => {

    const { getTotalCost} = useContext(CartContext);

    const totalCost = getTotalCost();
    const tax = totalCost * 0.047;

    const options = {
        mode: 'payment',
        amount: (totalCost+tax).toFixed(2),
        currency: 'usd',
        appearance: {

        },
    };

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
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm />
                    </Elements>
                </GridRow>
            </Grid>)
                : (<Header>Your Cart is Empty</Header>
                )}
        </div>
    );
}

export default CartTotalRow;