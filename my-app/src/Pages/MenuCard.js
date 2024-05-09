import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import {Coffee} from "../Ordering/Coffee";
import {supabase} from "../supabase_client";
import {Button, Card, CardDescription, CardMeta, Container, GridColumn, Header, Image} from "semantic-ui-react";
import filler from "../images/BobaFiller.jpeg";



export const MenuCard = (props) => {
    const {id, drink, price, img, description, caffeine, includesDairy, defaultAtr} = props.data;
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        getURL()
    }, []);

    async function getURL() {
        const {data} = await supabase.from('DrinkList').select().eq('id', id)
        const publicURL = supabase.storage.from('drinkImagesStorage').getPublicUrl(data[0].img);

        setImageURL(publicURL.data.publicUrl)
    }

    return (
        <div className="product">
            <Card fluid>
                <Header as='h2' textAlign='center' style={{paddingTop: "15px"}}>{drink}</Header>
                <Image src={imageURL} size="large" centered={true}/>
                <CardDescription>{description}</CardDescription>
                <p>{defaultAtr}</p>
                <p>${price}</p>
                <CardMeta>
                    {caffeine ? "Contains Caffeine" : "Caffeine-Free"}
                    <br/>
                    {includesDairy ? "Contains Dairy" : "Dairy-Free"}
                </CardMeta>
            </Card>
        </div>
    )
}