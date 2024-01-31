import {Card, Container, Header, Image, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "semantic-ui-react"
import React from "react";
import 'semantic-ui-css/semantic.min.css';
import filler from '../images/BobaFiller.jpeg';
import coffee from '../images/coffee.jpg';
import milk from '../images/milk.jpg';


export const MenuPage = () => {
    return (
        <Container className='menupage'>
            <Header className='pageheader' as='h1'>OUR MENU</Header>
            <div className='container'>
                <div className='box' id='sweetfull'>100% Sweet</div>
                <div className='box' id='sweet3'>75% Sweet</div>
                <div className='box' id='sweethalf'>50% Sweet</div>
                <div className='box' id='sweetquarter'>25% Sweet</div>
                <div className='box' id='unsweet'>0% Sweet</div>
            </div>

            <Table celled fixed singleLine>
                <TableHeader>
                    <TableRow textAlign='center'>
                        <TableHeaderCell/>
                        <TableHeaderCell>Toppings</TableHeaderCell>
                        <TableHeaderCell/>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell className='row1'>+ $0.50</TableHeaderCell>
                        <TableHeaderCell className='row2'>+ $1</TableHeaderCell>
                        <TableHeaderCell className='row3'>Free</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>Lychee Jelly</TableCell>
                        <TableCell>Coffee Jelly</TableCell>
                        <TableCell>Regular Boba</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Strawberry Jelly</TableCell>
                        <TableCell>Ube Walls</TableCell>
                        <TableCell>Large Boba</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Mango Jelly</TableCell>
                        <TableCell>Caramel Walls</TableCell>
                        <TableCell>Condensed Milk</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Passion fruit Jelly</TableCell>
                        <TableCell>Strawberry Puree</TableCell>
                        <TableCell>Extra Boba</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Orange Jelly</TableCell>
                        <TableCell>Chocolate Walls</TableCell>
                        <TableCell>Green Tea</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
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