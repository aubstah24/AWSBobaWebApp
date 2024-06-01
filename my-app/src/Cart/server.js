const express = require('express');
const {Stripe} = require("stripe");
const {useContext} = require("react");
const {CartContext} = require("./CartContext");
const stripe = Stripe('sk_test_51MgbgpC97Gt3R1MtDEqGSfSle4Avv2s6ds62ytBOV2AWaXWjhrGixTioqeKAaBq6sYCoXAGCRjaRoqNYjezC1RLe00Hsl6Bpb6');

const app = express();
app.use(express.static('public'));
const {getTotalCost} = useContext(CartContext);

const YOUR_DOMAIN = 'http://localhost:3000'

const totalCost = getTotalCost();
const tax = totalCost * 0.047;
const amt = (totalCost+tax)*100;

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: amt,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://localhost:3000/success',
        cancel_url: 'https://localhost:3000/cancel',
    });

    res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server running on port 3000'));