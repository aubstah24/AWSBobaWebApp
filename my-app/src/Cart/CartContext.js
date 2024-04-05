import React, {useState} from 'react';
import {PRODUCTS} from "../data/products";

export const CartContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    {/* cartItems =  [1: #, 2: #, 3: # ...] || cartItems[id] = # of items with that id */}
    // const addToCart = (id) => {
    //     setCartItems((prevState) => ({ ...prevState, [id]: prevState[id] + 1}));
    // }

    const addToCart = (id) => {
        setCartItems((cartItems) => ({...cartItems, [id]: cartItems[id] + 1}))
        console.log("ADD: Cart Items array: \n");
        console.log(cartItems);
        console.log("ADD: Card items[id]" + cartItems[id]);
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
        for (let i = 1; i < PRODUCTS.length+1; i++) {
            if (cartItems[i] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === i);
                total += itemInfo.price * cartItems[i];
            }
        }

        return total;
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartCount, getTotalCost};


    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}