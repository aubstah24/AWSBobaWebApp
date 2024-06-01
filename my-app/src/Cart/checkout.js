import {
    CardElement, Elements, useElements, useStripe
} from "@stripe/react-stripe-js";
import {useContext, useEffect, useState} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {CartContext} from "./CartContext";
import {Col, Row} from "react-bootstrap";

const stripePromise = loadStripe("pk_test_c3VpdGVkLXdhcnRob2ctNzAuY2xlcmsuYWNjb3VudHMuZGV2JA");

const CheckoutForm = () => {
    const {cartItems, getTotalCost} = useContext(CartContext);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const totalCost = getTotalCost();
    const tax = totalCost * 0.047;
    const amt = (totalCost+tax)*100;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('http://localhost:3000/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amt }), // Amount in cents
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPaymentProcessing(true);

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            setError(error.message);
            setPaymentProcessing(false);
        } else if (paymentIntent.status === 'succeeded') {
            setSuccess(true);
            setPaymentProcessing(false);
        }
    };

    return (
        <div id="checkout" className="checkout-page">
            <form onSubmit={handleSubmit}>
                <div>
                    <Row md={3}>
                        <Col>
                            ITEM
                        </Col>
                        <Col>
                            Quantity
                        </Col>
                        <Col>
                            Price
                        </Col>
                    </Row>
                    <Row md={3}>
                        {cartItems.forEach((item) => {
                            return (
                                <div key={item[0].id}>
                                    <Col>{item[1].drink}</Col>
                                    <Col><p>1</p></Col>
                                    <Col>{item[2].price}</Col>
                                </div>
                            )
                        })}
                    </Row>
                </div>

                <CardElement />
                <br/>
                <button type="submit" className="btn btn-primary" disabled={!stripe || paymentProcessing}>
                    Pay Now
                </button>
                {error && <div>{error}</div>}
                {success && <div>Payment succeeded!</div>}
            </form>
        </div>
    )
}

export const Return = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
    );
}

