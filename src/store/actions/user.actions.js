import { userService } from "../../services/userService"

export function spendBalance(amount) {
    return async (dispatch) => {
        dispatch({ type: 'SPEND_BALANCE', amount })
    }
}

export function setUser(user) {
    return async (dispatch, getState) => {

            const fullUser = await userService.getByEmail(user?.email)||null

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
        const user = { username, email, password }
        try {
            await userService.post(user)
            dispatch({ type: "SET_USER", user })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function addToOrders() {
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
