import { createContext, useContext, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const Context = createContext();

const inisialState = {
    loading: false,
    card: data,
    total: 0,
    amount: 0
}

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, inisialState)

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    return (
        <Context.Provider value={{ ...state, clearCart }}>
            {children}
        </Context.Provider>
    )
}

const useProductContext = () => {
    return useContext(Context)
}

export { ProductProvider, useProductContext }