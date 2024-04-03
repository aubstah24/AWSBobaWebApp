import React, {useState} from 'react';

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

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartCount};

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}