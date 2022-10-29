import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducers"


const AppContext = createContext();


const API = "https://api.pujakaitem.com/api/products"



const initialState = {
    isLoading: false,
    isError: false.valueOf,
    products: [],
    featureProducts: []
}
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (URL) => {

        // Get API Data
        try {

            const res = await axios.get(URL)
            const products = await res.data


            dispatch({ type: "MY_API_DATA", payload: products });
        } catch (err) {
            dispatch({ type: "API_ERROR", payload: err })
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