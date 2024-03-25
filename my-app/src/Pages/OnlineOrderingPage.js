import {CardGroup, Grid, GridColumn, GridRow, Header} from "semantic-ui-react";
import React from "react";
import products from "../data/items.json";
import SingleItem from "../data/SingleItem";


export function OnlineOrderingPage() {

    return (
        <>
            <Grid>
                <GridRow>
                    <GridColumn>
                        <Header as="h1" textAlign="center">Online Ordering</Header>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <CardGroup>
                        {products.map((products) => {
                            return <SingleItem product={products} key={products.id}/>;
                        })}
                    </CardGroup>
                </GridRow>
            </Grid>
        </>
    )

}
