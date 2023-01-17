import { productService } from "../../services/productService"

export function loadProducts() {
    return async (dispatch, getState) => {
        try {
            const filterBy = getState().cartModule.filterBy
            const products = await productService.query(filterBy)
            console.log('products',products)
            dispatch({ type: 'SET_PRODUCTS', products })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
        } catch (err) {
            console.log('err:', err)
        }
    }
}


// export function removeProduct(productId) {

//     return async (dispatch) => {
//         try {
//             const products = await productService.remove(productId)
//             dispatch({ type: 'REMOVE_ROBOT', productId })
//             return 'hello'
//         } catch (err) {
//             console.log('err:', err)
//         }
//     }
// }
