import {EmbeddedCheckout, EmbeddedCheckoutProvider, useStripe} from "@stripe/react-stripe-js";
import {Header} from "semantic-ui-react";
import StripeProvider from "./StripeProvider";
import {loadStripe} from "@stripe/stripe-js";
import {useCallback, useContext, useEffect, useState} from "react";
import {CartContext} from "./CartContext";

const stripePromise = loadStripe("pk_test_51MgbgpC97Gt3R1MtTFDilDrEzr1AXA8QHVyXfcESZKgKxrAi8jPeLBFBL462jKWJK4OAaMHJDvrHa1aK7fHSfXaV00WXaphyfn");

export const Payment = () => {
    const {cartItems} = useContext(CartContext);
    const [clientSecret, setClientSecret] = useState("");



    useEffect(() => {
        try {
            const fetchClientSecret = async () => {
                // Create a Checkout Session

                const res = await fetch("/create-checkout-session", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({priceId: "price_1Ooax7C97Gt3R1MtDg47hgEy"
                    })
                })

                const responseBody = await res.json();
                setClientSecret(responseBody.clientSecret)

            }

            fetchClientSecret();
        } catch (error ){
            console.log("ERROR FETCHING CLIENT", error)
        }


    }, []);



    return (
            <div id="checkout">

                    <EmbeddedCheckoutProvider
                        stripe={stripePromise}
                        options={{clientSecret: clientSecret}}
                    >
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>

            </div>
    )
}

export const Success = () => {
    return <Header as='h1' textAlign="center">Payment Successful!</Header>
}

export const Cancel = () => {
    return <Header as="h2" textAlign="center">Cancelled</Header>
}

export const CheckoutForm = () => {
    return (
        <StripeProvider>
            <div>
                <Payment />
            </div>
        </StripeProvider>
    )
}
