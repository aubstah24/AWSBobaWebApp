import {useState} from "react";
import {Button, Container, Form, FormField, Header, Radio} from "semantic-ui-react";
import {FormControl, FormLabel} from "react-bootstrap";
import { supabase } from "../supabase_client";


export function CreateDrinkItem() {

    const [id, setID] = useState();
    const [drink, setDrink] = useState('');
    const [price, setPrice] = useState();
    const [imgUrl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [defaultAtr, setDefaultAtr] = useState('');
    const [caffeine, setCaffeine] = useState('');
    const [includesDairy, setIncludesDairy] = useState('');


    async function addItem() {
            const {data, error} = await supabase
                .from('DrinkList')
                .insert([
                    {
                        id: id,
                        drink: drink,
                        price: price,
                        img: imgUrl,
                        description: description,
                        category: category,
                        defaultAtr: defaultAtr,
                        caffeine: caffeine,
                        includesDairy: includesDairy
                    },
                ])

            if (error) {
                console.error('Error updating data:', error.message);
                alert('Error Creating item');
                return (<p>{error.message}</p>);
            } else {
                console.log('Data updated successfully:', data);
                window.location.reload();
                alert('New Item created successfully');

            }
    }

    return (
        <Container>
            <Form className='create-item-supabase'>
                <FormLabel>DRINK ID (check the table on the bottom of page to get the next number)</FormLabel>
                <FormControl
                    id='id'
                    type='number'
                    value={id}
                    onChange={(e) => setID(Number(e.target.value))}
                    className='form-control-id'
                />
                <FormLabel>DRINK NAME</FormLabel>

                <FormControl
                    type='text'
                    id='drink'
                    value={drink}
                    onChange={(e) => setDrink(e.target.value)}
                />
                <FormLabel>DRINK PRICE</FormLabel>
                <FormControl
                    type='text'
                    id='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <FormLabel>IMAGE URL FOR DRINK (e.g. /img/data/picture.png)</FormLabel>
                <FormControl
                    type='text'
                    id='img'
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                />
                <FormLabel>DRINK DESCRIPTION</FormLabel>
                <FormControl
                    type='text'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <FormLabel>CATEGORY</FormLabel>
                <FormField>
                    <Radio
                        label='Coffee'
                        name='category'
                        value={category}
                        onChange={(e) => setCategory("Coffee")}
                    />
                    <Radio
                        label='Tea'
                        name='category'
                        value={category}
                        onChange={(e) => setCategory("Tea")}
                    />
                    <Radio
                        label='Latte'
                        name='category'
                        value={category}
                        onChange={(e) => setCategory("Latte")}
                    />
                    <Radio
                        label='Milk Tea'
                        name='category'
                        value={category}
                        onChange={(e) => setCategory("Milk Tea")}
                    />
                    <Radio
                        label='Fruit Tea'
                        name='category'
                        value={category}
                        onChange={(e) => setCategory("Fruit Tea")}
                    />
                </FormField>

                <FormLabel>DEFAULT DRINK ADDON</FormLabel>
                <FormControl
                    type='text'
                    id='defaultAtr'
                    value={defaultAtr}
                    onChange={(e) => setDefaultAtr(e.target.value)}
                />
                <FormLabel>INCLUDES CAFFEINE?</FormLabel>
                <FormField>
                    <Radio
                        label='TRUE'
                        name='caffeine'
                        value='TRUE'
                        onChange={(e) => setCaffeine("TRUE")}
                    />
                    <Radio
                        label='FALSE'
                        name='caffeine'
                        value='FALSE'
                        onChange={(e) => setCaffeine("FALSE")}
                    />
                </FormField>
                <FormLabel>INCLUDES DAIRY?</FormLabel>
                <FormField>
                    <Radio
                        label='TRUE'
                        name='dairy'
                        value='TRUE'
                        onChange={(e) => setIncludesDairy("TRUE")}
                    />
                    <Radio
                        label='FALSE'
                        name='dairy'
                        value='FALSE'
                        onChange={(e) => setIncludesDairy("FALSE")}
                    />
                </FormField>
                <Button type='submit' onClick={addItem} primary>ADD DRINK ITEM</Button>
            </Form>

            <Header as='h3'>The following item is being created:</Header>
            <Header as='h4'>{id}</Header>
            <Header as='h4'>{drink}</Header>
            <Header as='h4'>{price}</Header>
            <Header as='h4'>{imgUrl}</Header>
            <Header as='h4'>{description}</Header>
            <Header as='h4'>{category}</Header>
            <Header as='h4'>{defaultAtr}</Header>
            <Header as='h4'>{caffeine}</Header>
            <Header as='h4'>{includesDairy}</Header>
        </Container>

)
}

