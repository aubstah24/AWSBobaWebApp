import React, {useState} from 'react';
import {PRODUCTS} from "../data/products";

export const CartContext = React.createContext(null);


export const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    {/* cartItems =  [1: #, 2: #, 3: # ...] || cartItems[id] = # of items with that id */}
    // const addToCart = (id) => {
    //     setCartItems((prevState) => ({ ...prevState, [id]: prevState[id] + 1}));
    // }
    const [toppings, setToppings] = useState();
    const [milk, setMilk] = useState();
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (item) => {
        setCartItems([...cartItems, item])
        console.log("ADD: Cart Items array: \n");
        console.log(cartItems);
        console.log("ADD: Cart [1] \n")
        console.log(cartItems[1]);
        if (cartCount === 0) {
            setCartCount(1)
        } else {
            setCartCount(cartCount + 1)
        }
    }

    const removeFromCart = (itemToRemove) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
        setCartItems(updatedCart);
        if (cartCount === 1) {
            setCartCount(0)
        } else {
            setCartCount(cartCount - 1)
        }
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


    const contextValue = {cartItems, addToCart, removeFromCart, updateCartCount, getTotalCost, toppings, milk, cartCount};


    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}