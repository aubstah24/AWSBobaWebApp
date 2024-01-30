import {
    Card, CardContent,
    Container, Grid, GridColumn,
    Header, Image
} from "semantic-ui-react"
import React from "react";
import 'semantic-ui-css/semantic.min.css';
import filler from '../images/BobaFiller.jpeg';
import coffee from '../images/coffee.jpg';
import milk from '../images/milk.jpg';


export const MenuPage = () => {
    return (
        <Container className='menupage'>
            <Header className='pageheader' as='h1'>OUR MENU</Header>

            <div className='sweetnesslevel'>
                <p className='sweetfull'>100% Sweet</p>

                <p className='sweet3'>75% Sweet</p>

                <p className='sweethalf'>50% Sweet</p>

                <p className='sweetquarter'>25% Sweet</p>

                <p className='unsweet'>0% Sweet</p>
            </div>
            <Card.Group>
                <Card fluid>
                    <Image floated="left" src={filler} size='small' alt="Filler"/>
                    <Card.Content>
                        <Card.Header>BOBA DRINK EXAMPLE 1</Card.Header>
                        <p>Here is a description of the boba like what flavors are in this and that it has syrups or
                            extra sauces inside.</p>
                    </Card.Content>
                </Card>
            </Card.Group>

            <Card.Group>
                <Card fluid>
                    <Image floated="left" src={coffee} size='small' alt="Filler"/>
                    <Card.Content>
                        <Card.Header>COFFEE DRINK EXAMPLE 2</Card.Header>
                        <p>Here is a description of the boba like what flavors are in this and that it has syrups or
                            extra sauces inside.</p>
                    </Card.Content>
                </Card>
            </Card.Group>

            <Card.Group>
                <Card fluid>
                    <Image floated="left" src={milk} size='small' alt="Filler"/>
                    <Card.Content>
                        <Card.Header>SUBSTITUTES FOR MILK</Card.Header>
                        <p>Here is a description of the boba like what flavors are in this and that it has syrups or
                            extra sauces inside.</p>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Container>
    )

}