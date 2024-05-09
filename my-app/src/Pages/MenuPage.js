import {
    Header,
    Image,
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow
} from "semantic-ui-react"
import React, {useEffect} from "react";
import 'semantic-ui-css/semantic.min.css';
import milk from '../images/milk.png';
import oat from '../images/oatmilk.png';
import soy from '../images/soymilk.png';
import coco from '../images/cocomilk.png';
import almond from '../images/almond-milk.png';
import {MenuCard} from "./MenuCard";
import {supabase} from "../supabase_client";
import beans from '../images/coffee-bean.png';
import dairy from '../images/dairy-milk.png';
import star from '../images/star.png';


export const MenuPage = () => {
    const [drinks, setDrinks] = React.useState([]);
    const [milks, setMilks] = React.useState([]);
    const [tops, setTops] = React.useState([]);

    useEffect( () => {
    fetchData();
    fetchMilk();
    fetchTops();
    }, []);

    async function fetchData() {
        const {data} = await supabase.from("DrinkList").select();
        setDrinks(data);
    }

    async function fetchMilk() {
        const {data} = await supabase.from('MilkOptions').select();
        setMilks(data);
    }

    async function fetchTops() {
        const {data} = await supabase.from('BobaToppings').select();
        setTops(data);

    }

    
    return (
        <div className='menupage' >

            <div style={{paddingTop:'30px'}}>
                <Header as='h1' style={{padding: '20px', textAlign: 'center', fontFamily: 'Elephant'}}>OUR MENU</Header>

                <Table celled fixed singleLine>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell colSpan={5} textAlign='center'>MILK ALTERNATIVES</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow textAlign='center'>
                            {milks.map((option) => {
                                return (<TableCell key={option.key}>{option.text}</TableCell>)
                            })}
                        </TableRow>
                        <TableRow>
                            <TableCell><Image src={coco} size='small' centered/></TableCell>
                            <TableCell><Image src={soy} size='small' centered/></TableCell>
                            <TableCell><Image src={almond} size='small' centered/></TableCell>
                            <TableCell><Image src={oat} size='small' centered/></TableCell>
                            <TableCell><Image src={milk} size='small' centered/></TableCell>

                        </TableRow>

                    </TableBody>
                </Table>
            </div>


            <div style={{paddingTop:'30px'}}>
                <Table celled fixed singleLine>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell colSpan={6} textAlign='center'>BOBA TOPPINGS $1</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow textAlign='center'>
                            {tops.map((option) => {
                                return (
                                        <TableCell key={option.id}>{option.topping}</TableCell>
                                )
                            })}
                        </TableRow>

                    </TableBody>
                </Table>
            </div>

            <div className='menucard'>
                {drinks.map((product) => {
                    return (
                        <MenuCard data={product} key={product.id}/>
                    )
                })}

               <div style={{display: 'flex'}}>
                    <Image src={beans} size='mini'/> <span style={{alignContent: 'center'}}>Contains Caffeine</span>
                </div>
                <div style={{display: 'flex'}}>
                    <Image src={dairy} size='mini' /> <span style={{alignContent: 'center'}}>Contains Dairy</span>
                </div>
                <div style={{display: 'flex'}}>
                    <Image src={star} size='mini' /> <span style={{alignContent: 'center'}}>Milk Substitutes Available</span>
                </div>
           </div>
        </div>

    )

}