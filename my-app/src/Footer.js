import {Container, Grid, GridColumn} from 'semantic-ui-react'
import React from "react"


export default function Footer() {

    return (
        <Container className='footer'>
            <Grid>
                <GridColumn>
                    <p>AWS Boba Website Mock</p>
                    <p>Email us at bobawebsite@gmail.com</p>
                    <p>Instagram: @bobashop </p>
                </GridColumn>
            </Grid>
        </Container>
    )
}