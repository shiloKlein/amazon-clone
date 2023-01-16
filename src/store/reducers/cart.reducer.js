import productsFromOutside from '../../services/product.json'


const INITIAL_STATE = {
    products: [],
    cartItems: [],
    filterBy: {
        text: '',
        category: '',
        minPrice: 0,
        maxPrice: Infinity,
        minRate: 0,
        bestSeller: false
    }
}


export function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            let regex = new RegExp(state.filterBy.text, "i");
            // let result = regex.test(product.decription)||regex.test(product.category);

            let filteredProducts = productsFromOutside.filter(product => {
                console.log(state.filterBy.text, regex.test(product.category))
                // console.log('filteredProducts',filteredProducts)
                return regex.test(product.description) || regex.test(product.category)
            })
            filteredProducts = filteredProducts.filter(product => {
                if (state.filterBy.category === '') return true
                return product.category === state.filterBy.category
            })
            filteredProducts = filteredProducts.filter(product => {
                if (!state.filterBy.bestSeller) return true
                return product.isBestSeller
            })
            filteredProducts = filteredProducts.filter(product => {
                return product.rate>=+state.filterBy.minRate
            })
            return {
                ...state, products: filteredProducts
            }
        case 'ADD_TO_CART':
            return {
                ...state, cartItems: [...state.cartItems, action.product]
            }
        case 'REMOVE_FROM_CART':
            const idx = state.cartItems.findIndex(item => item.id === action.productId)
            console.log('idx', idx)
            let newCart = [...state.cartItems]
            if (idx >= 0) newCart.splice(idx, 1)
            else console.warn(`cant remove item ${action.id} as it is not in the cart`)
            return {
                ...state, cartItems: newCart
            }
        case 'SET_FILTER_BY':
            console.log(state.filterBy)
            return {
                ...state, filterBy: { ...action.filterBy }
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