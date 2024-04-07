import React, {useContext} from 'react';
import {Button, Grid, GridColumn, GridRow, Header, Image, Input} from "semantic-ui-react";
import {CartContext} from "./CartContext";



const CartProductRow = ({id, drink, price, flavor, sweet, topping, milk, img}) => {
    const {cartItems, addToCart, removeFromCart, updateCartCount} = useContext(CartContext);

    // const getPrice = () => {
    //     let total = 0;
    //     if (topping === null && milk === null) {
    //         return price;
    //     } else if (topping !== null) {
    //         // for each item in topping, compare to each item in TOPPINGS
    //         TOPPINGS.map((top) => {
    //             for (const item in topping) {
    //                 if (item.id === top.id) {
    //                     total += top.price;
    //                 }
    //             }
    //         })
    //     } else if (milk !== null) {
    //         MILKOPTIONS.map((opt) => {
    //             if (milk === opt.milk) {
    //                 total += opt.price
    //             }
    //         })
    //     }
    //
    //     return total;
    // }
    return (
        <div className="row product">
            <Grid>
                <GridRow columns={4}>
                    <GridColumn>
                        <Image src={img} fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Header as='h2'>{drink}</Header>
                        {{flavor} === null ? (<p>{topping} $1 ea.</p>) : (<p>{flavor}</p>)}
                        {{sweet} === null ? null : (<p>{sweet} sweet</p>)}
                        {{milk} === null ? null : (<p>Milk Substitute: {milk}</p>)}
                    </GridColumn>
                    <GridColumn>
                    <Header as="h3">${price}</Header>
                    </GridColumn>
                    <GridColumn>
                        <Input className="cartinput" value="1x"/>
                        <Button onClick={() => removeFromCart({
                            id: {id},
                            drink: {drink},
                            price: {price},
                            img: {img},
                            flavor: {flavor},
                            topping: {topping},
                            milk: {milk},
                            sweet: {sweet}
                        })}> Remove From Cart </Button>
                        {/*<Input  className="cartinput" value={cartItems[props]} onChange={(e) => updateCartCount(Number(e.target.value))}/>*/}
                        {/*<Button primary onClick={() => addToCart({*/}
                        {/*    key: {key},*/}
                        {/*    id: {id},*/}
                        {/*    drink: {name},*/}
                        {/*    price: {price},*/}
                        {/*    img: {img},*/}
                        {/*    flavor: {flavor},*/}
                        {/*    topping: {topping},*/}
                        {/*    milk: {milk},*/}
                        {/*    sweet: {sweet}*/}
                        {/*})}> + </Button>*/}
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
}

export default CartProductRow;
