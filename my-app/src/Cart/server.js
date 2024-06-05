// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MgbgpC97Gt3R1MtDEqGSfSle4Avv2s6ds62ytBOV2AWaXWjhrGixTioqeKAaBq6sYCoXAGCRjaRoqNYjezC1RLe00Hsl6Bpb6');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        customer_email: 'customer@example.com',
        billing_address_collection: 'auto',
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1PMeUmC97Gt3R1MtAGrZRand',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        automatic_tax: {enabled: true},
    });

    res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));