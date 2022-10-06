export const addCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_CART",
            payload: product
        })
    }
}