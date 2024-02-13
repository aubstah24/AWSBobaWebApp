import {Card, Container, Header, Image} from "semantic-ui-react";
import filler from "../images/BobaFiller.jpeg";
import coffee from "../images/coffee.jpg";
import milk from "../images/milk.jpg";
import React from "react";

export const OnlineOrderingPage = () => {
    return (
        <Container className='menupage'  style={{width: '100%'}}>
            <Header className='pageheader' as='h1'>ORDER HERE</Header>
            <p>Order ahead and skip the line!  Please specify the date and time you would like to pick-up.  When you get to the store, please go to the "Pick-Up Order" window. </p>
            <Card.Group>
                <Card fluid>
                    <Image floated="left" src={filler} size='small' alt="Filler"/>
                    <Card.Content>
                        <Card.Header>BOBA DRINK EXAMPLE 1</Card.Header>
                        <p>Here is a description of the boba like what flavors are in this and that it has syrups or extra sauces inside.</p>
                    </Card.Content>
                </Card>
            </Card.Group>

            <Card.Group>
                <Card fluid>
                    <Image floated="left" src={coffee} size='small' alt="Filler"/>
                    <Card.Content>
                        <Card.Header>COFFEE DRINK EXAMPLE 2</Card.Header>
                        <p>Here is a description of the boba like what flavors are in this and that it has syrups or extra sauces inside.</p>
                    </Card.Content>
                </Card>
            </Card.Group>

            <Card.Group>
                <Card fluid>
                    <Image floated="left" src={milk} size='small' alt="Filler"/>
                    <Card.Content>
                        <Card.Header>SUBSTITUTES FOR MILK</Card.Header>
                        <p>Here is a description of the boba like what flavors are in this and that it has syrups or extra sauces inside.</p>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Container>
    )

}