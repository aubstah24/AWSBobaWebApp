import React, {useState} from 'react';
import {PRODUCTS} from "../data/products";

export const CartContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    {/* cartItems =  */}
    // const addToCart = (id) => {
    //     setCartItems((prevState) => ({ ...prevState, [id]: prevState[id] + 1}));
    // }

    const addToCart = (id) => {
        setCartItems((cartItems) => ({...cartItems, [id]: cartItems[id] + 1}))
        console.log(cartItems);
        console.log(cartItems[id]);
    }

    const removeFromCart = (id) => {
        setCartItems((cartItems) => ({...cartItems, [id]: cartItems[id] - 1}))
    }

    // const removeFromCart = (id) => {
    //     setCartItems((prevState) => ({ ...prevState, [id]: prevState[id] - 1}));
    // }

    const updateCartCount = (newCount, id) => {
        setCartItems((prevState) => ({...prevState, [id]: newCount }))
    }

    const getTotalCost = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number.item);
                total += cartItems[item] * itemInfo.price
            }
        }

        return total;
    }

    const getItemCount = (id) => {
        let count = 0;
        for (const item of cartItems) {
            if (cartItems[item] === id) {
                count +=1;
            }
        }
        return count;
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartCount, getTotalCost, getItemCount};


    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}