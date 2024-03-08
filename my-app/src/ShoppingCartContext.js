import {createContext, useContext, useReducer} from "react";
import * as PropTypes from "prop-types";

const Cart = createContext();
const initialState = {count: 0};

const ShoppingCartContext = ({children}) => {



    return <Cart.Provider value={{children}}>{children}</Cart.Provider>
}

export default ShoppingCartContext;


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
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
            <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
        </>
    )
}