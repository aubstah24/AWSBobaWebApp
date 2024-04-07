import React, {useState} from 'react';
import {PRODUCTS} from "../data/products";

export const CartContext = React.createContext(null);


export const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    {/* cartItems =  [{key, id, price...}, {key, id, price...}, ...] || cartItems.length = length of array*/}
    const [toppings, setToppings] = useState();
    const [milk, setMilk] = useState();
    const [cartCount, setCartCount] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item])
        console.log("ADD: Cart Items array: \n");
        console.log(cartItems);
        console.log("ADD: Cart [1] \n")
        console.log(cartItems[1]);

    }

    const removeFromCart = (itemToRemove) => {
        const updatedCart = cartItems.filter((item) => item.key !== itemToRemove.id);
        setCartItems(updatedCart);

    }

    const updateCartCount = (newCount, id) => {
        setCartItems((prevState) => ({...prevState, [id]: newCount }))
    }


    const getTotalCost = () => {
        let total = 0;
        for (const item in cartItems) {
            total += item.price;
        }
        return total;
    }


    const contextValue = {cartItems, addToCart, removeFromCart, updateCartCount, getTotalCost};


    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}