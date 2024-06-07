import {Col, Row} from "react-bootstrap";
import {useContext, useState} from "react";
import {CartContext} from "./CartContext";
import {Container, Form, Header, Input} from "semantic-ui-react";


//npm install react-square-web-payments-sdk
//npm install square
//https://developer.squareup.com/blog/online-payments-with-square-and-react/
//https://developer.squareup.com/reference/square/payments-api/create-payment

export const PaymentPage = () => {
    const {cartItems} = useContext(CartContext);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [cardnumber, setCardnumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");


    const SquarePaymentPortal = async () => {
        try {
            const response = await client.paymentsApi.createPayment({
                sourceId: 'cnon:card-nonce-ok',
                idempotencyKey: '70668224-7ec2-4bcc-9e6f-2d26fee04275',
                amountMoney: {
                    amount: 20,
                    currency: 'USD'
                },
                autocomplete: true,
                buyerEmailAddress: 'aubrieusui@gmail.com',
                billingAddress: {
                    addressLine1: '5323 Oio Drive',
                    sublocality: 'HI',
                    administrativeDistrictLevel1: 'Honolulu',
                    postalCode: '96821',
                    country: 'US',
                    firstName: 'Aubrie',
                    lastName: 'Usui'
                },
                customerDetails: {
                    customerInitiated: true,
                    sellerKeyedIn: true
                }
            });

            console.log(response.result);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div style={{margin: "40px"}}>
            <Row md={3}>
                <Col>
                    <Header as="h4">ITEM</Header>
                </Col>
                <Col>
                    <Header as="h4">QUANTITY</Header>
                </Col>
                <Col>
                    <Header as="h4">PRICE</Header>
                </Col>

            </Row>
                {cartItems.map((item) => {
                    return (
                        <div key={item[8].uuid}>
                            <Row>
                            <Col>{item[1].drink}</Col>
                            <Col><p>1</p></Col>
                            <Col>{item[2].price.toFixed(2)}</Col>
                            </Row>
                        </div>
                    )
                })}

            <Header as="h1" textAlign='center'>CHECKOUT</Header>
            <Container>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Input type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email" fluid/> <br/>

                    <Input type='text' onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'/>
                    <Input type='text' onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'/>
                    <br/>
                    <Header as='h4'>Billing Address</Header>
                    <br/>
                    <Input type='text' onChange={(e) => setAddress1(e.target.value)} placeholder='Address 1'/> <br/>

                    <Input type='text' onChange={(e) => setAddress2(e.target.value)} placeholder='Address 2'/> <br/>

                    <Input type='text' onChange={(e) => setCity(e.target.value)} placeholder='City'/> <br/>

                    <Input type='text' onChange={(e) => setState(e.target.value)} placeholder='State'/>
                    <Input type='number' onChange={(e) => setZip(e.target.value)} placeholder='Postal Code'/>
                    <br/>
                    <Header as="h4">Card Information</Header>
                    <br/>
                    <Input type='text' onChange={(e) => setCardnumber(e.target.value)} placeholder='0000 0000 0000'/>
                    <Input type='text' onChange={(e) => setExpiry(e.target.value)} placeholder='MM/YY'/>
                    <Input type='text' onChange={(e) => setCvc(e.target.value)} placeholder='XXX'/>

                </Form>
            </Container>
        </div>
    )
}

