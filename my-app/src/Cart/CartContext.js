import React, {useState} from 'react';
import {TOPPINGS} from "../data/toppings";
import * as _ from 'lodash';

export const CartContext = React.createContext(null);


export const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    // eslint-disable-next-line
    {/* cartItems =  [[key, id, price...], [key, id, price...], ...] */}


    const addToCart = (item) => {
        setCartItems([...cartItems, item])
        console.log("ADD: Cart Items array: \n");
        console.log(cartItems);
    }

    const removeFromCart = (id) => {
        let count = getCartCount();
        if (count === 1) {
            setCartItems([])
        } else {
            const updatedCart = cartItems.filter((item) => item[8].uid !== id);
            setCartItems(updatedCart);
        }
        console.log("REMOVED ITEMS: \n", id);

    }

    const updateCartCount = (newCount, id) => {
        setCartItems((prevState) => ({...prevState, [id]: newCount }))
    }


    const getTotalCost = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += cartItems[i][2].price;
            if (cartItems[i][7].length !== 0) {
                let temp = getToppingTotal(i);
                total = total + temp;
            }
            if (!(_.isEmpty(cartItems[i][4]))) {
                let temp = cartItems[i][4].milk;
                total = total + temp;
            }
        }

        return total;
    }


    const getToppingTotal = (index) => {
        let total = 0.00;
        let temp = cartItems[index][7]
        for (let i = 0; i < temp.topping.length; i++) {
            let token = TOPPINGS.filter((item) => (item.id === Number(temp.topping[i])))
            let priceVar = parseFloat(token[0].price);
            total = total + priceVar;
        }
        return total;
    }



    const getCartCount = () => {
        if (cartItems.length === 0) {
            return 0;
        } else {
            return cartItems.length;
        }
    }


    const contextValue = {cartItems, addToCart, removeFromCart, updateCartCount, getTotalCost, getCartCount, getToppingTotal};


    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}