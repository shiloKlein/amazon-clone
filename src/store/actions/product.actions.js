import { productService } from "../../services/productService"

export function loadProducts() {
    return async (dispatch, getState) => {
        try {
            const filterBy = getState().cartModule.filterBy
            const products = await productService.query(filterBy)
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
export function setCart() {
    return async (dispatch, getState) => {
        try {
            const cart = productService.getCartLocaly()
            await dispatch({ type: "SET-CART", cart })
        } catch (err) {
            console.log('err:', err)
        }
    }
}
export function addToCart(product) {
    return async (dispatch, getState) => {
        try {
            product.id=productService.makeId()
            await dispatch({ type: "ADD_TO_CART", product })
            const cart = getState().cartModule.cartItems
            productService.saveCartLocaly(cart)
        } catch (err) {
            console.log('err:', err)
        }
    }
}
export function removeFromCart(productId){
    return async (dispatch, getState) => {
        try {
            await dispatch({type: "REMOVE_FROM_CART",productId})
            productService.removeFromCartLocaly(productId)
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
