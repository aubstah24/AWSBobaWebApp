import {createContext, useContext, useReducer} from "react";
import items from "../src/data/items.json";
import * as PropTypes from "prop-types";

const Cart = createContext();
const initialState = {count: 0};

const ShoppingCartContext = ({children}) => {
    const products = [...Array(children)].map(() => ({
       id: initialState.items.id,
        name: initialState.items.drink,
        price: initialState.items.price,
        image: initialState.items.img,
        description: initialState.items.description,
        category: initialState.items.category,
        caffeine: initialState.items.caffeine,
        includesDairy: initialState.items.includesDairy,
    }));

    const [state, dispatch] = useReducer(reducer, {
        products: products,
        cart: [],
    });

    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
}

export default ShoppingCartContext;

export const CartState = () => {
    return useContext(Cart);
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
        default:
            return state;
    }
}

function counter(state, action) {
    return (
        <>
            Count: {state.count}
            <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
            <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
        </>
    )
}


