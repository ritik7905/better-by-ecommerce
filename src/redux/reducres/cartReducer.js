import { ADD_CART } from "../actions/action.type"

const initialState = {
    products: [
        {
            name: "Apple",
            color: "Black"
        }
    ],
    setError: ""
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            return { ...state, }
        default: return state
    }
}