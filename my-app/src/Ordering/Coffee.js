import {
    Button,
    Card,
    CardDescription,
    CardMeta,
    Container,
    Header,
    Image,
} from "semantic-ui-react";
import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../Cart/CartContext";
import {v4 as uuidv4} from "uuid";
import {supabase} from "../supabase_client";


const getImageUri = async (id) => {
    const {data} = await supabase.from('DrinkList').select().eq('id', id)

    return supabase.storage.from('drinkImagesStorage').getPublicUrl('https://owbmgfexablklljwydlm.supabase.co/storage/v1/object/public/drinkImagesStorage/strawberry_matcha_latte.jpg?t=2024-04-27T00%3A03%3A10.729Z');
};

export const Coffee = (props) => {
    const {id, drink, price, img, description, caffeine, includesDairy, defaultAtr} = props.data;
    const {addToCart} = useContext(CartContext);
    const myUuid = uuidv4();


    return (
        <div className="product">
            <Card fluid>
                <Header as='h2' textAlign='center' style={{paddingTop: "15px"}}>{drink}</Header>
                <Image src={getImageUri(id)} size="large" centered={true}/>
                <Container fluid>
                    <CardDescription>{description}</CardDescription>
                    <p>{defaultAtr}</p>
                    <p>${price}</p>
                    <CardMeta>
                        {caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                        <br/>
                        {includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
                    </CardMeta>
                </Container>
                <Button onClick={() => addToCart([{id}, {drink}, {price}, {img}, {}, {}, {}, [], {uid: myUuid}])}
                        color='black'>
                    Add To Cart
                </Button>
            </Card>
        </div>
    );
}