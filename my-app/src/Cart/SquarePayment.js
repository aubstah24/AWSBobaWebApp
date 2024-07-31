// try {
//     const response = await client.paymentsApi.createPayment({
//         sourceId: 'ccof:GaJGNaZa8x4OgDJn4GB',
//         idempotencyKey: '7b0f3ec5-086a-4871-8f13-3c81b3875218',
//         amountMoney: {
//             amount: 1000,
//             currency: 'USD'
//         },
//         appFeeMoney: {
//             amount: 10,
//             currency: 'USD'
//         },
//         autocomplete: true,
//         customerId: 'W92WH6P11H4Z77CTET0RNTGFW8',
//         locationId: 'L88917AVBK2S5',
//         referenceId: '123456',
//         note: 'Brief description'
//     });
//
//     console.log(response.result);
// } catch(error) {
//     console.log(error);
// }

import React, { useEffect } from 'react';
import { Payments } from '@square/web-sdk';

export const SquarePayments = () => {
    useEffect(() => {
        async function initializeSquare() {
            const payments = Payments('YOUR_SQUARE_APPLICATION_ID', 'sandbox'); // use 'production' for live

            const card = await payments.card();
            await card.attach('#card-container');

            document.getElementById('card-button').addEventListener('click', async () => {
                const result = await card.tokenize();
                if (result.status === 'OK') {
                    const response = await fetch('/process-payment', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ nonce: result.token })
                    });

                    if (response.ok) {
                        alert('Payment successful!');
                    } else {
                        alert('Payment failed!');
                    }
                } else {
                    alert('Tokenization failed with status: ' + result.status);
                }
            });
        }

        initializeSquare();
    }, []);

    return (
        <div>
            <div id="card-container"></div>
            <button id="card-button">Pay</button>
        </div>
    );
}


const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const accessToken = 'YOUR_SQUARE_ACCESS_TOKEN';

app.post('/process-payment', async (req, res) => {
    const { nonce } = req.body;
    const requestBody = {
        source_id: nonce,
        idempotency_key: new Date().getTime().toString(), // unique key for idempotency
        amount_money: {
            amount: 100, // Amount in cents
            currency: 'USD'
        }
    };

    try {
        const response = await axios.post('https://connect.squareup.com/v2/payments', requestBody, {
            headers: {
                'Square-Version': '2023-07-12',
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});