import React from "react";
import {DrinkListTable} from "./DrinkListTable";
import { Container, Header} from "semantic-ui-react";
import {OrderDashboard} from "./OrderDashboard";
import {createClient} from "@supabase/supabase-js";
import {CreateDrinkItem} from "./CreateDrinkItem";
import {DeleteDrinkItem} from "./DeleteDrinkItem";
import {UpdateDrinkItem} from "./UpdateDrinkItem";


const supabase = createClient('https://owbmgfexablklljwydlm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Ym1nZmV4YWJsa2xsand5ZGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MTQyOTQsImV4cCI6MjAyOTQ5MDI5NH0.iXttQ_vbqXIQd6SI7gaK7rty7kDDGM1Kvtxa5Ugq4QQ')

export const AdminPage = () => {

// update a row
// You can update specific rows using horizontal filters, e.g. eq, lt, and is.
    const updateItem = async (id) => {
        try {
            const {data, error} = await supabase
                .from('DrinkList')
                .update({description: 'NEW description available'})
                .eq('id', id)

            if (error) {
                console.error('Error updating data:', error.message);
            } else {
                console.log('Data updated successfully:', data);
                // Optionally, you can access the inserted data here
            }

        } catch (error) {
            console.error('Error updating data:', error.message);
        }
    }



    return (
        <div style={{marginTop: '30px'}}>
            {/*Show admin page after login */}
            <Header as="h1" textAlign="center">WELCOME TO THE ADMIN PAGE</Header>
            <Header as="h3" textAlign="center">All edits here will be automatically updated to the website.  It uses DynamoDB to submit changes on the database side.
            Only Aubrie has access to the AWS Console, so if any issues come up, contact her.</Header>
            {/*Make edits to Menu via DynamoDB actions - POST, GET, PUT*/}
            <div>
                <Header as="h2">Create New Menu Item:</Header>
                <p>To create a new menu item, please fill in the form below and press submit.  You should get a confirmation message following the submission.</p>
                <p>***PRICE FIELD: do not put a dollar sign $ in front of the number.  Just type out the number in the field: ( 6.99 / 3 / 4.50 )</p>
                <p>***CAFFEINE & DAIRY FIELD: only put true or false in lowercase.  It is a boolean. </p>
                <p>***IMG FIELD: upload the image to the data folder.  Path should be exactly as follows: /img/[IMAGEFILENAME.EXT] --> /img/example.png </p>
            </div>
            <br/>
            <CreateDrinkItem/>

            <Header as="h2">Remove Menu Item:</Header>
            <p>To remove a menu item, please select the item from below and sign your name and date.  Once you delete, there is no undo.  </p>
            <DeleteDrinkItem/>

            <Header as="h2">Make Edits To A Menu Item:</Header>
            <Container>
                <p>To edit a menu item, please select the item from below and sign your name and date.
                Change what needs to be changed and press save.</p>
            </Container>
            <UpdateDrinkItem/>

            {/*Make edits to Topping List via DynamoDB actions - POST, GET, PUT*/}

            {/*Make edits to Milk options via DynamoDB actions - POST, GET, PUT*/}

            {/*Make edits to Tea List via DynamoDB actions - POST, GET, PUT*/}


            {/*See dashboard of orders -- simple table of overall orders with date filters*/}
            <OrderDashboard/>
            <br/><br/>
            {/*See Drink List from dynamoDB */}
            <DrinkListTable/>
        </div>
    )
}