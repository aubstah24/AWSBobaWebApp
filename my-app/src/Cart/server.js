// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cors = require('cors');
const app = express();
const env = require('dotenv').config({ path: './.env' });

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/config', (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    })
})

app.post('/create-payment-intent', async (req, res) => {
    const {paymentMethodType, currency, orderAmount} = req.body;
    let params = {
        payment_method_type: paymentMethodType,
        amount: orderAmount,
        currency: currency,
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create(params);

        res.send({
            clientSecret: paymentIntent.client_secret,
            nextAction: paymentIntent.next_action,
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            }
        })
    }
})

app.get('/payment/next', async (req, res) => {
    const intent = await stripe.paymentIntents.retrieve(
        req.query.payment_intent,
        {
            expand: ['payment_method']
        }
    );

    res.redirect(`/success?payment_intent_client_secret=${intent.client_secret}`);
});

app.post('/webhook', async (req, res) => {
    let data, eventType;

    if (process.env.STRIPE_WEBHOOK_SECRET) {
        let event
        let signature = req.headers['stripe-signature'];

        try {
            event = stripe.webhooks.constructEvent(
                req.body,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            )
        } catch (e) {
            console.log("Webhook signature verification failed", e);
            return res.sendStatus(400)
        }

        data = event.data;
        eventType = event.type;
    } else {
        data = req.body.data;
        eventType = req.body.type;
    }

    if (eventType === 'payment_intent.succeeded') {
        console.log("Payment successful");
    } else if (eventType === 'payment_intent.payment_failed') {
        console.log("Payment failed");
    }

    res.sendStatus(200);
 });

app.listen(3000, () => console.log(`Server started on port 3000`));









