import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {PaymentForm} from "./payment";

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

const StripeProvider = () => {
    return <Elements stripe={stripePromise}><PaymentForm/></Elements>;
};

export default StripeProvider;