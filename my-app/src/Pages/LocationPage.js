import {
    Container,
    Grid, GridColumn,
    GridRow,
    Header,
    Image
} from "semantic-ui-react";
import React from "react";
import location from "../images/location_filler.png";

export const LocationPage = () => {
    return (
        <Container className='menupage' style={{width: '100%'}}>
            <Grid className="location">
                <GridRow columns={2}>
                    <GridColumn width={6}>
                        <div>
                            <Header as="h2">LOCATION</Header>
                            <p>We are located at the intersection of Pensacola and King Street. Our Parking entrance is
                                on Pensacola which is a one way. </p>
                        </div>

                        <div style={{padding: '20px'}}>
                            <p>1234 Pensacola Ave</p>
                            <p>Honolulu, HI 96815</p>
                        </div>

                        <Header as="h4">STORE HOURS:</Header>
                        <ul>
                            <li>Sunday: 11am - 3pm</li>
                            <li>Monday: 7am - 3pm</li>
                            <li>Tuesday: 7am - 3pm</li>
                            <li>Wednesday: 7am - 3pm</li>
                            <li>Thursday: 7am - 3pm</li>
                            <li>Friday: 7am - 3pm</li>
                            <li>Saturday: 11am - 3pm</li>
                        </ul>
                    </GridColumn>
                    <GridColumn width={10}>
                        <Image src={location} size="huge" alt={location}/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    )

}