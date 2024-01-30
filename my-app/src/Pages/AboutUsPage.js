import {Card, Container, Header, Image} from "semantic-ui-react";
import filler from "../images/BobaFiller.jpeg";
import coffee from "../images/coffee.jpg";
import milk from "../images/milk.jpg";
import React from "react";

export const AboutUsPage = () => {
    return (
        <Container className='menupage'>
            <Header className='pageheader' as='h1'>OUR STORY</Header>
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