import React, {useEffect} from "react";
import {DrinkListTable} from "./DrinkListTable";
import {Button, Container, Divider, Header, List, ListItem} from "semantic-ui-react";
import {OrderDashboard} from "./OrderDashboard";
import {CreateDrinkItem} from "./CreateDrinkItem";
import {DeleteDrinkItem} from "./DeleteDrinkItem";
import {UpdateDrinkItem} from "./UpdateDrinkItem";
import {UploadImage} from "./UploadImage";
import {MilkTable} from "./MilkTable";
import {TeaFlavors} from "./TeaFlavors";
import {supabase} from "../supabase_client";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@supabase/auth-ui-react'


export const AdminPage = () => {

    const [session, setSession] = React.useState(null);

    async function logout() {
        supabase.auth.signOut();
    }
    useEffect(() => {
        supabase.auth.getSession().then(({ data: {session} }) => {
            setSession(session);
        })

        const {
            data: {subscription},
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })

        return () => subscription.unsubscribe()
    }, []);

    if (!session) {
        return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme='dark' showLinks={false}/>)
    } else {

        return (
            <div style={{marginTop:'30px'}}>
                <Button onClick={logout} color='red'>LOGOUT</Button>
                {/*Show admin page after login */}
                <Header as="h1" textAlign="center">WELCOME TO THE ADMIN PAGE</Header>
                <Header as="h3" textAlign="center">All edits here will be automatically updated to the website. It uses
                    Supabase to submit changes on the database side.
                    Only Aubrie has access to the database, so if any issues come up, contact her.
                    The only thing you cannot edit here is the boba toppings.  Aubrie has to manually edit that.
                </Header>
                {/*Upload image to the drinkImagesStorage bucket in supabase*/}
                <Header as='h2'>Upload Menu Images Here:</Header>
                <Container>
                    <UploadImage/>
                </Container>


                <Header as="h2">Create New Menu Item:</Header>
                <p>To create a new menu item, follow the directions below exactly as follows.</p>
                <Container>
                    <List ordered>
                        <ListItem>
                            <b>Upload the item image</b> to supabase storage above. Make sure the photo is
                            a 1:1 ratio size (square).
                        </ListItem>
                        <ListItem>
                            <b>DRINK ID:</b> Use the table at the bottom of the page to get the next number in the order.
                        </ListItem>
                        <ListItem>
                            <b>DRINK NAME: </b>Use proper capitalization and double check for typos.
                        </ListItem>
                        <ListItem>
                            <b>DRINK PRICE: </b>Do NOT put $ in front of it.  Just put the numbers. --> 6.99 / 3
                        </ListItem>
                        <ListItem>
                            <b>IMAGE FILE NAME: </b> Ensure the image is uploaded first.  Type in the filename exactly how it is displayed in the database. --> exampleImage.png
                        </ListItem>
                        <ListItem>
                            <b>DRINK DESCRIPTION: </b> Use proper capitalization.  Short summary with 2 sentences max.
                        </ListItem>
                        <ListItem>
                            <b>CATEGORY: </b> Choose from the categories listed. If its something that doesn't include milk by default and includes coffee --> it is Coffee. If you want to create a new category please let Aubrie know.
                        </ListItem>
                        <ListItem>
                            <b>DEFAULT ATTR: </b> This is an extra.  Used to say "Boba is included by default" or "Sweeteners available at pick-up."
                        </ListItem>
                        <ListItem>
                            <b>CAFFEINE: </b> Allows for customers to see options they have for non-caffeine. Used for labeling.
                        </ListItem>
                        <ListItem>
                            <b>DAIRY: </b> Allows for customers to see options they have for dairy-free. Used for labeling.
                        </ListItem>
                    </List>
                </Container>

                <CreateDrinkItem/>
                <Divider/>

                <Header as="h2">Remove Menu Item:</Header>
                <p>To remove a menu item, please select the item from below and sign your name and date. Once you
                    delete, there is no undo. </p>
                <DeleteDrinkItem/>
                <Divider/>

                <Header as="h2">Make Edits To A Menu Item:</Header>
                <p>To edit a menu item, please select the item from below and sign your name and date.
                    Change what needs to be changed and press save.</p>
                <UpdateDrinkItem/>

                {/*See Drink List from supabse */}
                <DrinkListTable/>
                <Divider/>

                {/*Make edits to Milk options*/}
                <MilkTable/>
                <Divider/>

                {/*Make edits to Tea List via supabase*/}
                <TeaFlavors/>

                <Divider/>

                {/*See dashboard of orders -- simple table of overall orders with date filters*/}
                <OrderDashboard/>
            </div>
        );
    }

}