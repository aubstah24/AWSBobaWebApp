import React, {useEffect, useState} from "react";
import {supabase} from "../supabase_client";
import {Header, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "semantic-ui-react";

export const OrderDashboard = (props) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data } = await supabase.from("OrdersTable").select().order('id', {ascending: true});
        setOrders(data);
    }



    return (
        <div>
            <Header as="h1" textAlign="center">Order History</Header>
            <Table celled padded>
                <TableHeader>
                    <TableRow textAlign="center">
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>ORDER DATE</TableHeaderCell>
                        <TableHeaderCell>CUSTOMER</TableHeaderCell>
                        <TableHeaderCell>EMAIL</TableHeaderCell>
                        <TableHeaderCell>ORDER ID</TableHeaderCell>
                        <TableHeaderCell>ORDER TOTAL</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((item) => {
                        return (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.created_at}</TableCell>
                                <TableCell>{item.customer_name}</TableCell>
                                <TableCell>{item.customer_email}</TableCell>
                                <TableCell>{item.order_uuid}</TableCell>
                                <TableCell>{item.order_total}</TableCell>
                            </TableRow>
                        )})}
                </TableBody>
            </Table>
        </div>
    )
}