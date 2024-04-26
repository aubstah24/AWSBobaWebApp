import { useState} from "react";
import {Button, Header, Input} from "semantic-ui-react";
import { supabase } from "../supabase_client";


export function DeleteDrinkItem() {

    const [item, setItem] = useState();

    async function deleteDrinkItem(id) {
        const {data, error} = await supabase
            .from('DrinkList')
            .delete()
            .eq('id', id)

        if (error) {
            console.error('Error updating data:', error.message);
            return (<p>{error.message}</p>);
        } else {
            console.log('Data removed successfully:', data, id);
            window.location.reload();
        }
    }


    return (
        <div>
            <Header as='h3'>Type in the ID number of the drink you want to remove.</Header>
            <Input type='number' onChange={(e) => setItem(e.target.value)} />
            <Button type='submit' onClick={(e) => {deleteDrinkItem(item)}} color='red'>DELETE ITEM</Button>
        </div>
    )
}

