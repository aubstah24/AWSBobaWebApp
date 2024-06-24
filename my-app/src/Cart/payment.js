import React, {useState, useEffect, useContext} from 'react';
import {CartContext} from "./CartContext";
import {loadStripe} from "@stripe/stripe-js";
import {CardElement, Elements, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {Header} from "semantic-ui-react";


export const PaymentForm = () => {
    const {getTotalCost} = useContext(CartContext);
    const totalCost = getTotalCost();
    const tax = totalCost * 0.047;
    const totalAmt = totalCost + tax;
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            console.log("Stripe not loaded yet");
            return;
        }

        const {error: backendError, clientSecret} = await fetch('/create-payment-intent',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentMethodType: 'card',
                    currency: 'usd',
                    orderAmount: totalAmt,
                }),
            }
            ).then((response) => response.json());

        if (backendError) {
            console.error(backendError.message());
            setMessage(backendError.message)
            return;
        }

        console.log("Client Secret returned: ", clientSecret);

        const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                }
            }
        );

        if (stripeError) {
            console.error(stripeError.message);
            setMessage(stripeError.message);
            return;
        }
    }

    return (
        <div className="card w-100 bg-base-100 bg-gray-200 shadow-2xl rounded-lg">
            <h1 className="card-title font-bold text-2xl mb-4 justify-center" style={{ padding: '20px'}}>
                Complete your payment here!
            </h1>
            <div className="card-actions justify-center">
                <form id="payment-form" onSubmit={handleSubmit}>
                    <label>Card</label>
                    <CardElement id="card"/>

                    <div style={{textAlign: 'center', alignItems: 'center', padding: '30px'}}>
                    <button disabled={!stripe || !elements} type="submit" id="submit"
                            className="btn btn-primary rounded-xl text-white px-4 py-2 mt-6">Complete Purchase
                    </button>
                    </div>
                </form>
                {message && <div>{message}</div>}
            </div>
        </div>
    )
};
