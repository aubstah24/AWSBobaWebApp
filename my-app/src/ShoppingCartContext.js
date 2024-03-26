import {createContext, useCallback, useContext, useState} from "react";
import products from "../src/data/items.json";


const ShoppingCartContext = createContext();

export const useCart = () => useContext(ShoppingCartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({
        count: 0,
        items: [],
    });

    const addToCart = (item, count) => {
        const updatedCart = cart[cart.length - 1];
        updatedCart.push(item);
        setCart(updatedCart);
    };


    return (
        <ShoppingCartContext.Provider value={{cart, setCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartContext;

function getProductQuantity(id) {

    const quantity = cartProducts.find((product) => product.id === id)?.quantity;

    if (quantity === undefined || quantity === null) {
        return 0;
    }

    return quantity;
}


function addToCart(id) {

    const quantity = getProductQuantity(id);

    if (quantity === 0 || quantity === null) {
        setCartProducts(
            [...cartProducts, {
                id: id,
                quantity: 1
            }]
        )
    } else {
        setCartProducts(
            cartProducts.map(product => product.id === id ? {...product, quantity: product.quantity + 1}
                : product
            )
        )
    }

}

function removeFromCart(id) {

    const quantity = getProductQuantity(id);

    if (quantity === 1) {
        deleteFromCart(id);
    } else {
        setCartProducts(
            cartProducts.map(product => product.id === id ? {...product, quantity: product.quantity - 1}
                : product
            )
        )
    }

}

function deleteFromCart(id) {
    setCartProducts(
        cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })
    )
}

function getTotalCost(id) {
    let productData = products.find(products => products.id === id);
    let totalCost = 0;

    cartProducts.map((cartItem) => {
        totalCost += (productData.price * cartItem.quantity);
    });
    return totalCost;
}
