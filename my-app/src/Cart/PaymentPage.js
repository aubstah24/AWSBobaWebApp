import {Col, Row} from "react-bootstrap";
import {useContext} from "react";
import {CartContext} from "./CartContext";
import {CheckoutForm, Payment} from "./checkout";
import {Header} from "semantic-ui-react";


export const PaymentPage = () => {
    const {cartItems} = useContext(CartContext);

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
            <Payment />

        </div>
)
}