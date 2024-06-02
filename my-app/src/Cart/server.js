const express = require('express');
const {Stripe} = require("stripe");
const stripe = Stripe('sk_test_51MgbgpC97Gt3R1MtDEqGSfSle4Avv2s6ds62ytBOV2AWaXWjhrGixTioqeKAaBq6sYCoXAGCRjaRoqNYjezC1RLe00Hsl6Bpb6');

const app = express();
app.use(express.json());


export async function POST(req, res) {

    const {priceId} = await req.json();
    console.log("IN SERVER")
    const session = await stripe.checkout.sessions.create({
        ui_mode: "embedded",
        mode: "payment",
        line_items: [{
            price: priceId
        }],
        return_url: `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });

    res.send({clientSecret: session.client_secret});
}

app.get('/session-status', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

    res.send({
        status: session.status,
        customer_email: session.customer_details.email
    });
});

app.listen(8000, () => console.log('Server running on port 3000'));