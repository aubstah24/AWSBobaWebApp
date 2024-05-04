import React, { useState} from "react";
import {Button, Container, Header, Input} from "semantic-ui-react";
import { supabase } from "../supabase_client";


export function DeleteDrinkItem() {

    const [item, setItem] = useState();
    const [showConfirm, setShowConfirm] = useState(false);


    async function deleteDrinkItem() {
        const {data, error} = await supabase
            .from('DrinkList')
            .delete()
            .eq('id', item)

        if (error) {
            console.error('Error updating data:', error.message);
            alert('Error deleting item');
            return (<p>{error.message}</p>);
        } else {
            console.log('Data removed successfully:', data, item);
            window.location.reload();
            alert('New Item created successfully');

        }
    }

    const handleDelete = () => {
        setShowConfirm(true);
    };

    const cancelDelete = () => {
        setShowConfirm(false);
    };


    return (
        <Container>
            <Header as='h3'>Type in the ID number of the drink you want to remove.</Header>
            <Input type='number' onChange={(e) => setItem(e.target.value)} />

            {showConfirm && (
                <div className="popup-content">
                    <p>Are you sure you want to delete this item?</p>
                    <button onClick={deleteDrinkItem}>Yes</button>
                    <button onClick={cancelDelete}>No</button>
                </div>
            )}

            <Button type='submit' onClick={handleDelete} color='red'>DELETE ITEM</Button>
        </Container>
    )
}

