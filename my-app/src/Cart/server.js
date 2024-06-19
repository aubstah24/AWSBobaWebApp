// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MgbgpC97Gt3R1MtDEqGSfSle4Avv2s6ds62ytBOV2AWaXWjhrGixTioqeKAaBq6sYCoXAGCRjaRoqNYjezC1RLe00Hsl6Bpb6');
const express = require('express');
const app = express();

const YOUR_DOMAIN = 'http://localhost:3000';

app.get('/create-payment-intent', async (req, res) => {
    const {products} = req.body;

    const lineItems = products.map((product) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: product[1].drink,
            },
            unit_amount: Math.round(product[2].price * 100),
        },
        quantity: 1
    }));
});

app.get('/secret', async (req, res) => {

    const {amt} = req.body;

    const intent = await stripe.paymentIntents.create({
        amount: amt.amount,
        currency: 'usd',
        payment_method_types: ['card'],
    });
        res.json({client_secret: intent.client_secret});
});

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys

const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    payment_method_types: ['card'],
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});

app.post('/webhook', async (req, res) => {
    let data, eventType;

    // Check if webhook signing is configured.
    if ("whsec_552c97fba5dad7c9cc7239e7bca39fbf9ed2054ea9383184d10d61ba51d8859d") {
        // Retrieve the event by verifying the signature using the raw body and secret.
        let event;
        let signature = req.headers['stripe-signature'];
        try {
            event = stripe.webhooks.constructEvent(
                req.rawBody,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            );
        } catch (err) {
            console.log(`⚠️  Webhook signature verification failed.`);
            return res.sendStatus(400);
        }
        data = event.data;
        eventType = event.type;
    } else {
        // Webhook signing is recommended, but if the secret is not configured in `config.js`,
        // we can retrieve the event data directly from the request body.
        data = req.body.data;
        eventType = req.body.type;
    }

    if (eventType === 'payment_intent.succeeded') {
        // Funds have been captured
        // Fulfill any orders, e-mail receipts, etc
        // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
        console.log('💰 Payment captured!');
    } else if (eventType === 'payment_intent.payment_failed') {
        console.log('❌ Payment failed.');
    }
    res.sendStatus(200);
});

app.listen(3000, () =>
    console.log(`Node server listening at http://localhost:3000`)
);