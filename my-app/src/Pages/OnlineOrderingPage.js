import {Card, Container, Grid, GridColumn, GridRow, Header, Image} from "semantic-ui-react";
import React from "react";
import menuItems from "../data/items.json";
import {DrinkItem} from "../data/DrinkItem";

export function OnlineOrderingPage() {
    return (
        <>
            <Header as="h1">Online Ordering</Header>
            <Grid>
                <GridRow>
                    {menuItems.map((item, id) => (
                        <GridColumn key={id}>
                            <DrinkItem {...item}/>
                        </GridColumn>
                    ))}
                </GridRow>
            </Grid>
        </>
    )

}
