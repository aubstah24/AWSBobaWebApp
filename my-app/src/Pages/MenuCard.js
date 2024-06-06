import {Header, Image} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {supabase} from "../supabase_client";
import {Row, Col} from "react-bootstrap";
import beans from '../images/coffee-bean.png';
import dairy from '../images/dairy-milk.png';
import star from '../images/star.png';


export const MenuCard = (props) => {
    const {id, drink, description, caffeine, includesDairy, category} = props.data;
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
        <>
            <Row md={2} style={{padding:'20px', backgroundColor: 'white', justifyContent: 'space-between', borderRadius: '50px / 50px' }}>
                <Col md={3}>
                    <Image src={imageURL} size='medium' style={{borderRadius: '20%'}} />
                </Col>
                <Col md={9}>
                    <Header as='h1' style={{fontFamily: 'Elephant'}}>{drink}</Header>
                    <Header as='h3' style={{fontFamily: 'Metro Nova Hawaiian Light'}}>{description}</Header>
                    <br/>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {caffeine ? <Image src={beans} size='mini'/> : null}
                        {includesDairy ? <Image src={dairy} size='mini'/> : null}
                        {category === 'Latte' ? <Image src={star} size='mini'/> : null}
                    </div>
                </Col>
            </Row>
            <br/>
            <br/>
        </>
    );
}