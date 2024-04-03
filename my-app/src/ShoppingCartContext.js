import {createContext, useContext, useState} from "react";


export const ShoppingCartContext = createContext({
    cart: {},
    setCart: () => {},
    addProductToCart: () => {}
});

export const useCart = () => useContext(ShoppingCartContext);

export function addToCart(id) {

}


export function CartProvider ({ children }) {
    const [cart, setCart] = useState({
        count: 0,
        items: [],
    });


    return (
        <ShoppingCartContext.Provider value={{cart, setCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartContext;

