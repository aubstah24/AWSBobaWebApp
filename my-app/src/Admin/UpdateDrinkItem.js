import { useState} from "react";
import {Button, Container, Header, Input} from "semantic-ui-react";
import { supabase } from "../supabase_client";


export function UpdateDrinkItem() {

    const [item, setItem] = useState();
    const [drinkEdit, setDrinkEdit] = useState();
    const [priceEdit, setPriceEdit] = useState();
    const [catEdit, setCatEdit] = useState();
    const [imgEdit,setImgEdit] = useState('');

    async function updateNameItem(e) {
        const {data, error} = await supabase
            .from('DrinkList')
            .update({drink: drinkEdit})
            .eq('id', item)

        if (error) {
            console.error('Error updating data:', error.message);
            return (<p>{error.message}</p>);
        } else {
            console.log('Data updated successfully:', data, item);
            window.location.reload();
        }
    }

    async function updatePriceItem(e) {
        const {data, error} = await supabase
            .from('DrinkList')
            .update({price: priceEdit})
            .eq('id', item)

        if (error) {
            console.error('Error updating data:', error.message);
            return (<p>{error.message}</p>);
        } else {
            console.log('Data updated successfully:', data, item);
            e.preventDefault()
            window.location.reload();
        }
    }

    async function updateImgItem(e) {
        const {data, error} = await supabase
            .from('DrinkList')
            .update({img: imgEdit})
            .eq('id', item)

        if (error) {
            console.error('Error updating data:', error.message);
            return (<p>{error.message}</p>);
        } else {
            console.log('Data updated successfully:', data, item);
            e.preventDefault()
            window.location.reload();
        }

    }

    async function updateCategoryItem(e) {
        const {data, error} = await supabase
            .from('DrinkList')
            .update({category: catEdit})
            .eq('id', item)

        if (error) {
            console.error('Error updating data:', error.message);
            return (<p>{error.message}</p>);
        } else {
            console.log('Data updated successfully:', data, item);
            e.preventDefault()
            window.location.reload();
        }

    }

    return (
        <div>
            <Container style={{padding: '10px'}}>
                <Input type='number' label='ID of drink to edit   ' onChange={(e) => setItem(e.target.value)} />
                <br/>
                <Input type='text' label='Type New Name for Drink   ' onChange={(e) => setDrinkEdit(e.target.value)} />
               <br/>
                <Button type='submit' onClick={updateNameItem} color='purple'>UPDATE DRINK NAME</Button>
            </Container>

            <Container style={{padding: '10px'}}>
                <Input type='number' label='ID of drink to edit   ' onChange={(e) => setItem(e.target.value)} />
                <br/>
                <Input type='text' label='Type New Price   ' onChange={(e) => setPriceEdit(e.target.value)} />
                <br/>
                <Button type='submit' onClick={updatePriceItem} color='purple'>UPDATE PRICE</Button>
            </Container>

            <Container style={{padding: '10px'}}>
                <Input type='number' label='ID of drink to edit   ' onChange={(e) => setItem(e.target.value)} />
                <br/>
                <Input type='text' label='Type New Category  ' onChange={(e) => setCatEdit(e.target.value)} />
                <br/>
                <Button type='submit' onClick={updateCategoryItem} color='purple'>UPDATE CATEGORY</Button>
            </Container>

            <Container style={{padding: '10px'}}>
                <Input type='number' label='ID of drink to edit   ' onChange={(e) => setItem(e.target.value)} />
                <br/>
                <Input type='text' label='Type New Image Filename' onChange={(e) => setImgEdit(e.target.value)} />
                <br/>
                <Button type='submit' onClick={updateCategoryItem} color='purple'>UPDATE IMG FILENAME</Button>
            </Container>
        </div>
    )
}

