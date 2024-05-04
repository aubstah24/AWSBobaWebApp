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


export const Coffee = (props) => {
    const {id, drink, price, img, description, caffeine, includesDairy, defaultAtr} = props.data;
    const {addToCart} = useContext(CartContext);
    const myUuid = uuidv4();
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
                <Button onClick={() => addToCart([{id}, {drink}, {price}, {img}, {}, {}, {}, [], {uid: myUuid}, imageURL])}
                        color='black'>
                    Add To Cart
                </Button>
            </Card>
        </div>
    );
}