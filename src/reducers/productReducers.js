
const productReducers = (state, action) => {


    switch (action.type) {
        // When the data is loading
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }

        // Get API Data
        case "MY_API_DATA":
            const featureProducts = action.payload.filter((curElm) => {
                return curElm.featured === true
            })
            console.log(featureProducts);
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload,
                featureProducts: featureProducts
            }

        // When the data is not found!
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default: return state

    }

}

export default productReducers