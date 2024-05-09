import React, {useEffect, useState} from "react";
import {supabase} from "../supabase_client";
import {
    Button, Container,
    Divider,
    Form,
    Header,
    Input,
    Table, TableBody, TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow
} from "semantic-ui-react";
import {FormControl, FormLabel} from "react-bootstrap";


export function TeaFlavors () {
    const [flav, setFlav] = useState([])
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [item, setItem] = useState();
    const [delItem, setDelItem] = useState();
    const [teaEdit, setTeaEdit] = useState();
    const [showConfirm, setShowConfirm] = useState(false);


    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data } = await supabase.from("TeaFlavors").select().order('key', {ascending: true});
        setFlav(data);
    }

    async function addItem() {
        const {data, error} = await supabase
            .from('TeaFlavors')
            .insert([
                {
                    key: key,
                    value: value,
                    text: value
                },
            ])

        if (error) {
            console.error('Error updating MilkOptions:', error.message);
            alert('Error Creating item in MilkOptions');
            return (<p>{error.message}</p>);
        } else {
            console.log('Data updated successfully:', data);
            window.location.reload();
            alert('New Milk Option created successfully');

        }
    }

    async function updateName() {
        const {data, error} = await supabase
            .from('TeaFlavors')
            .update({value: teaEdit})
            .eq('key', item)

        const {data1, error1} = await supabase
            .from('TeaFlavors')
            .update({text: teaEdit})
            .eq('key', item)

        if (error) {
            console.error('Error updating data:', error.message);
            return (<p>{error.message}</p>);
        } else if (error1) {
            console.error('Error updating data1:', error1.message);
            return (<p>{error1.message}</p>);
        } else {
            console.log('Data updated successfully:', data, item);
            console.log('Data updated successfully:', data1, item);
            window.location.reload();
            alert('Milk Option successfully updated')
        }
    }

    async function deleteItem() {

        const {data, error} = await supabase
            .from('TeaFlavors')
            .delete()
            .eq('key', delItem)

        if (error) {
            console.error('Error updating data:', error.message);
            alert('Error deleting item');
            return (<p>{error.message}</p>);
        } else {
            console.log('Data removed successfully:', data , delItem);
            window.location.reload();
            alert('Item removed successfully');

        }
    }

    const handleDelete = () => {
        setShowConfirm(true);
    };

    const cancelDelete = () => {
        setShowConfirm(false);
    };


    return (
        <div>
            <Header as="h1" textAlign="center">Current Tea Flavors</Header>
            <Table celled padded>
                <TableHeader>
                    <TableRow textAlign="center">
                        <TableHeaderCell>KEY</TableHeaderCell>
                        <TableHeaderCell>TEA FLAVOR</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {flav.map((item) => {
                        return (
                            <TableRow key={item.key} textAlign='center'>
                                <TableCell>{item.key}</TableCell>
                                <TableCell>{item.value}</TableCell>
                            </TableRow>
                        )})}
                </TableBody>
            </Table>



            <Divider/>
            <Header as='h2'>ADD FLAVOR</Header>
            <p>To add a milk option, fill out the form below.</p>

            <Container>
                <Form>
                    <FormLabel>KEY (check the table above to get the following number)</FormLabel>
                    <FormControl
                        id='key'
                        type='number'
                        value={key}
                        onChange={(e) => setKey(Number(e.target.value))}
                        className='form-control-id'
                    />
                    <FormLabel>OPTION NAME</FormLabel>

                    <FormControl
                        type='text'
                        id='value'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <br/>
                    <Button type='submit' onClick={addItem} primary>ADD FLAVOR</Button>
                </Form>
            </Container>

            <Header as='h2'>UPDATE FLAVOR NAME:</Header>
            <p>To make edits to the name, enter the KEY of the item and type in your new name.</p>
            <Container>
                <Input type='number' label='KEY of item:' onChange={(e) => setItem(e.target.value)} />
                <br/><br/>
                <Input type='text' label='New Name:' onChange={(e) => setTeaEdit(e.target.value)}/>
                <br/><br/>
                <Button type='submit' onClick={updateName} color='purple'>UPDATE NAME</Button>
            </Container>

            <Header as='h2'>DELETE FLAVOR OPTION:</Header>
            <p>To delete an item, use the KEY from the table above.  CONFIRM YOU WANT TO DELETE IT.</p>
            <Container>
                <Header as='h3'>Type in the KEY of the drink you want to remove.</Header>
                <Input type='number' onChange={(e) => setDelItem(e.target.value)} />
                {showConfirm && (
                    <div className="popup-content">
                        <p>Are you sure you want to delete this item?</p>
                        <button onClick={deleteItem}>Yes</button>
                        <button onClick={cancelDelete}>No</button>
                    </div>
                )}
                <Button type='submit' onClick={handleDelete} color='red'>DELETE ITEM</Button>
            </Container>
        </div>
    )}