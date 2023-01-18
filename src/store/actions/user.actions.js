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
// export function userlogin(email, password) {
//     return async (dispatch, getState) => {
//         await userService.login(email, password)
//         const fullUser = await userService.getById(email)
//         try {
//             await userService.post(fullUser)
//             dispatch({ type: "SET_USER", fullUser })
//         } catch (err) {
//             console.log('err:', err)
//         }
//     }
// }
export function userSignUp(username, email, password) {
    return async (dispatch, getState) => {
        const fullUser = { username, email, password, prevOrders: null }
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
            const fullUser = { ...getState().userModule.loggedInUser }
            if (!fullUser.prevOrders) fullUser.prevOrders = []
            const newOrder = { ...order, createdAt: Date.now() }
            fullUser.prevOrders.unshift(newOrder)
            userService.update(fullUser.email, fullUser.prevOrders)
            console.log('user', fullUser)
            console.log('user.prevOreders', fullUser.prevOrders)
            dispatch({ type: 'SET_USER', fullUser })
            // debugger
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
