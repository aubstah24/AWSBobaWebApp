import React, {useEffect, useState} from "react";
import {Header, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "semantic-ui-react";
import { supabase } from "../supabase_client";


export function DrinkListTable() {

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data } = await supabase.from("DrinkList").select().order('id', {ascending: true});
        setDrinks(data);
    }



    return (
        <div>
            <Header as="h1" textAlign="center">Current Drink List</Header>
            <Table celled padded>
                <TableHeader>
                    <TableRow textAlign="center">
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>DRINK NAME</TableHeaderCell>
                        <TableHeaderCell>PRICE</TableHeaderCell>
                        <TableHeaderCell>IMG PATH</TableHeaderCell>
                        <TableHeaderCell>DESCRIPTION</TableHeaderCell>
                        <TableHeaderCell>CATEGORY</TableHeaderCell>
                        <TableHeaderCell>DEFAULT</TableHeaderCell>
                        <TableHeaderCell>CAFFEINE</TableHeaderCell>
                        <TableHeaderCell>DAIRY</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {drinks.map((item) => {
                        return (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.drink}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell>{item.img}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.defaultAtr}</TableCell>
                                    <TableCell>{item.caffeine === true ? "TRUE" : "FALSE"}</TableCell>
                                    <TableCell>{item.includesDairy === true ? "TRUE": "FALSE"}</TableCell>
                                </TableRow>
                    )})}
                </TableBody>
            </Table>
        </div>
    )
}