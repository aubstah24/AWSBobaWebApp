import {Elements, useStripe} from "@stripe/react-stripe-js";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {PaymentPage} from "./PaymentPage";
import {loadStripe} from "@stripe/stripe-js";
import {CartContext} from "./CartContext";
const stripePromise = await loadStripe('pk_test_51MgbgpC97Gt3R1MtTFDilDrEzr1AXA8QHVyXfcESZKgKxrAi8jPeLBFBL462jKWJK4OAaMHJDvrHa1aK7fHSfXaV00WXaphyfn');


function MakePayment () {
    const {getTotalCost} = useContext(CartContext);

    const totalCost = getTotalCost();
    const tax = totalCost * 0.047;
    const paymentTotal = (totalCost+tax)*100;
    const [secret, setClientSecret] = useState(null);

    (async () => {
        const response = await fetch('/secret', {
        });
        const {client_secret: clientSecret} = await response.json();

        setClientSecret(clientSecret)
    })();

    return (
        <>
        {secret && stripePromise && (
            <Elements stripe={stripePromise} options={{secret}}>
                <PaymentPage/>
            </Elements>
        )}
        </>
    )
}
export default MakePayment;

