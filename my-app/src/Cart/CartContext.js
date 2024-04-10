import React, {useState} from 'react';

export const CartContext = React.createContext(null);


export const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    {/* cartItems =  [[key, id, price...], [key, id, price...], ...] */}


    const addToCart = (item) => {
        setCartItems([...cartItems, item])
        console.log("ADD: Cart Items array: \n");
        console.log(cartItems);
        console.log("ADD: Cart [1] \n")
        console.log(cartItems[1]);

    }

    const removeFromCart = (idx1) => {
        const updatedCart = cartItems.splice(cartItems[idx1], 1);
        setCartItems(updatedCart);

    }

    const updateCartCount = (newCount, id) => {
        setCartItems((prevState) => ({...prevState, [id]: newCount }))
    }


    const getTotalCost = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += cartItems[i][2].price;
        }
        return total;
    }


    const contextValue = {cartItems, addToCart, removeFromCart, updateCartCount, getTotalCost};


    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}