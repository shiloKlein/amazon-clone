import { userService } from "../../services/userService"
import { productService } from "../../services/productService"

export function spendBalance(amount) {
    return async (dispatch) => {
        dispatch({ type: 'SPEND_BALANCE', amount })
    }
}

export function setUser(user) {
    return async (dispatch, getState) => {
        const fullUser = await userService.getById(user?.email) || null
        try {
            dispatch({ type: "SET_USER", fullUser })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}
export function userSignUp(username, email, password) {
    return async (dispatch, getState) => {
        const fullUser = { username, email, password,prevOrders:null }
        try {
            await userService.post(fullUser)
            dispatch({ type: "SET_USER", fullUser })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function addToOrders() {
    return async (dispatch, getState) => {
        try {

            dispatch({ type: 'SET_CART', cart: [] })
        } catch (err) {
            console.log('err:', err)
        }
    }
}
export function addToCart() {
    return async (dispatch, getState) => {
        try {
            const filterBy = getState().cartModule.cartItems
            const users = await userService.query(filterBy)
            dispatch({ type: 'SET_ROBOTS', users })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}
export function addOrderToUser(order) {
    return async (dispatch, getState) => {
        try {
            productService.removeCartLocaly()
            const user = { ...getState().userModule.loggedInUser }
            if (!user.prevOrders) user.prevOrders = []
            const newOrder = {...order, createdAt: Date.now()}
user.prevOrders.unshift(newOrder)
            userService.update(user.email, user.prevOrders)
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}



// export function removeUser(userId) {

//     return async (dispatch) => {
//         try {
//             const users = await userService.remove(userId)
//             dispatch({ type: 'REMOVE_ROBOT', userId })
//             return 'hello'
//         } catch (err) {
//             console.log('err:', err)
//         }
//     }
// }
