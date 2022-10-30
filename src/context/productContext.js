import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducers"


const AppContext = createContext();


const API = "https://api.pujakaitem.com/api/products"



const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: []
}
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (URL) => {

        dispatch({ type: "SET_LOADING" })

        // Get API Data
        try {

            const res = await axios.get(URL)
            const products = await res.data

            dispatch({ type: "MY_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })
        }
    }

    useEffect(() => {
        getProducts(API)

    }, [])

    return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>

}

// Custom Hooks
const useProductContext = () => {
    return useContext(AppContext)

}

export { AppProvider, AppContext, useProductContext }