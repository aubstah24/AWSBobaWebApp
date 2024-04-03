import {CardGroup, Grid, GridColumn, GridRow, Header} from "semantic-ui-react";
import React from "react";
import products from "../data/items.json";
import {PRODUCTS} from "../data/products";
import {DrinkItem} from "../data/DrinkItem";


export function OnlineOrderingPage() {

    return (
        <div>
            <div>
                <Header as="h1" textAlign="center">ORDER ONLINE HERE</Header>
            </div>
            <div>
                {PRODUCTS.map((product) => ( <DrinkItem data={product}/>))}
            </div>
        </div>
    )

}
