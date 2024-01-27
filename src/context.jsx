import { createContext, useContext, useEffect, useReducer } from "react";
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

    const removeOrder = (id) => {
        despatch({ type:"REMOVE" , payload:id })
    }

    const changeQuantity = (changeObj) => {
        despatch({ type:"CHANGE_QUNTITY" , payload:changeObj })
    }

    useEffect(() => {
        despatch({ type:"GET_TOTAL" })
    },[state.cart])

    return (
        <CartContext.Provider value={{ ...state , clearCart , removeOrder , changeQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider , useCartContext};