import {
    Container,
    Header, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemImage, ItemMeta
} from "semantic-ui-react"
import React from "react";
import 'semantic-ui-css/semantic.min.css';
import ItemExtra from 'semantic-ui-react/src/views/Item/ItemExtra';

export const MenuPage = () => {
    return (
        <Container>
            <Header as='h1'>OUR MENU</Header>
            <ItemGroup>
                <Item>
                    <ItemImage src='/images/BobaFiller.jpeg' size='tiny'/>

                    <ItemContent>
                        <ItemHeader as='a'>Boba Drink Example 1</ItemHeader>
                        <ItemMeta>Contains: Dairy (substitue available)</ItemMeta>
                        <ItemDescription>Here is a description of the boba like what flavors are in this and that it has syrups or extra sauces inside.</ItemDescription>
                        <ItemExtra>*Lowest sweetness level is 50%</ItemExtra>
                    </ItemContent>
                </Item>

                <Item>
                    <ItemImage src='/images/BobaFiller.jpeg' size='tiny'/>

                    <ItemContent>
                        <ItemHeader as='a'>Coffee Drink Example 1</ItemHeader>
                        <ItemMeta>Milk Options: Oat, Soy, Coconut, Skim</ItemMeta>
                        <ItemDescription>Here is a description of the coffee drink like what roast, decaf, any flavorings</ItemDescription>
                        <ItemExtra>Flavors available: Caramel, Lavender, Vanilla, Strawberry</ItemExtra>
                    </ItemContent>
                </Item>
            </ItemGroup>

        </Container>
    )

}