import productsFromOutside from '../../services/product.json'


const INITIAL_STATE = {
    products: [],
    cartItems: []
}


export function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state, products: productsFromOutside
            }
        case 'ADD_TO_CART':
            return {
                ...state, cartItems: [...state.cartItems, action.product]
            }
        case 'REMOVE_FROM_CART':
            const idx = state.cartItems.findIndex(item => item.id === action.productId)
            console.log('idx',idx)
            let newCart = [...state.cartItems]
            if (idx >= 0) newCart.splice(idx, 1)
            else console.warn(`cant remove item ${action.id} as it is not in the cart`)
            return {
                ...state, cartItems: newCart
            }
        default:
            return state
    }

    // switch (action.type) {
    //     case 'SET_PRODUCTS':
    //         return {
    //             ...state,
    //             products: action.products
    //         }
    //     case 'ADD_PRODUCT':
    //         return {
    //             ...state,
    //             products: [...state.products, action.product]
    //         }
    //     case 'REMOVE_PRODUCT':
    //         return {
    //             ...state,
    //             products: state.products.filter(product => product.id !== action.productId)
    //         }
    //     case 'UPDATE_PRODUCT':
    //         return {
    //             ...state,
    //             products: state.products.map(product => product.id === action.product.id ? action.product : product)
    //         }
    //     case 'SET_FILTER_BY':
    //         return {
    //             ...state,
    //             filterBy: {...action.filterBy}
    //         }

    //     default:
    //         return state
    // }

}