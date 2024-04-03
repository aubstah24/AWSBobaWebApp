import { Header} from "semantic-ui-react";
import React from "react";
import {PRODUCTS} from "../data/products";
import {DrinkItem} from "../data/DrinkItem";


export function OnlineOrderingPage() {

    return (
        <div className="onlineorderingpage">
            <Header as="h1" textAlign="center">ORDER ONLINE HERE</Header>
            {PRODUCTS.map((product, key) => ( <DrinkItem data={product} key={product.id}/>))}
        </div>
    )

}
