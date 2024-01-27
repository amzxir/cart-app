import { createContext, useContext, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const CartContext = createContext();

const initialState = {
    loading: false,
    cart: data,
    total: 0,
    amount: 0
}

const CartProvider = ({ children }) => {
    const [state, despatch] = useReducer(reducer, initialState)

    const clearCart = () => {
        despatch({ type:'CLEAR_CART' });
    }

    return (
        <CartContext.Provider value={{ ...state , clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider , useCartContext};