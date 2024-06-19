// import {EmbeddedCheckout, EmbeddedCheckoutProvider, useStripe} from "@stripe/react-stripe-js";
// import {Header} from "semantic-ui-react";
// import StripeProvider from "./StripeProvider";
import {loadStripe} from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import {CustomCheckoutProvider, EmbeddedCheckoutProvider, useCustomCheckout} from "@stripe/react-stripe-js";
import {Button} from "semantic-ui-react";
import {Navigate} from "react-router-dom";
// import {useCallback, useContext, useEffect, useState} from "react";
// import {CartContext} from "./CartContext";
//
 const stripePromise = loadStripe("pk_test_51MgbgpC97Gt3R1MtTFDilDrEzr1AXA8QHVyXfcESZKgKxrAi8jPeLBFBL462jKWJK4OAaMHJDvrHa1aK7fHSfXaV00WXaphyfn");
//
// export const Payment = () => {

//
//     }, []);
//
//
//
//     return (
//
//     )
// }




const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function CheckoutForm() {
    const [message, setMessage] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        try {
            const fetchClientSecret = async () => {
                // Create a Checkout Session

                const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        priceId: "price_1Ooax7C97Gt3R1MtDg47hgEy"
                    })
                })
                console.log(res)
                setUrl(res.url);

            }

            fetchClientSecret();
        } catch (error) {
            console.log("ERROR FETCHING CLIENT", error)
        }
    })


        useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return message ? (
        <Message message={message} />
    ) : (
            <Navigate to={url}/>
    );
}
