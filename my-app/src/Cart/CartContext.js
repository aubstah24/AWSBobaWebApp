import React, {useState} from 'react';
import {PRODUCTS} from "../data/products";

export const CartContext = React.createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (id) => {
        setCartItems((prevState) => ({ ...prevState, [id]: prevState[id] + 1}));
    }

    const removeFromCart = (id) => {
        setCartItems((prevState) => ({ ...prevState, [id]: prevState[id] - 1}));
    }

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

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartCount, getTotalCost};

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}