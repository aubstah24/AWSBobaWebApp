import {
    CardElement, Elements, useElements, useStripe
} from "@stripe/react-stripe-js";
import {useContext, useEffect, useState} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {CartContext} from "./CartContext";
import {Col, Row} from "react-bootstrap";
import {Header} from "semantic-ui-react";

const stripePromise = loadStripe("pk_test_c3VpdGVkLXdhcnRob2ctNzAuY2xlcmsuYWNjb3VudHMuZGV2JA");

export const CheckoutForm = () => {
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

    const handleClick = async (event) => {
        // Create a Checkout Session.
        const response = await fetch('http://localhost:3001/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });

        const session = await response.json();

        // Redirect to Stripe Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error(result.error.message);
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

                <br/>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>
                    Pay Now
                </button>
                {error && <div>{error}</div>}
                {success && <div>Payment succeeded!</div>}
            </form>
        </div>
    )
}

export const Return = () => {
    return <Header as='h1' textAlign="center">Payment Successful!</Header>
}

export const Cancel = () => {
    return <Header as="h2" textAlign="center">Cancelled</Header>
}

