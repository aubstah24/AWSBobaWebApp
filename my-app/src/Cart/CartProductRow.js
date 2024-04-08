import React, {useContext} from 'react';
import {Button, Grid, GridColumn, GridRow, Header, Image, Input} from "semantic-ui-react";
import {CartContext} from "./CartContext";



const CartProductRow = (props) => {
    const {id, drink, price, flavor, sweet, topping, milk, img} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartCount} = useContext(CartContext);

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
