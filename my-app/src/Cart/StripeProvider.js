import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51MgbgpC97Gt3R1MtTFDilDrEzr1AXA8QHVyXfcESZKgKxrAi8jPeLBFBL462jKWJK4OAaMHJDvrHa1aK7fHSfXaV00WXaphyfn");

const StripeProvider = ({ children }) => {
    return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;