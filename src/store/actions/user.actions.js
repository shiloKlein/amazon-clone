
export function spendBalance(amount) {
    return async (dispatch) => {
        dispatch({ type: 'SPEND_BALANCE', amount })
    }
}
import { userService } from "../../services/userService"

export function loadUser() {
    return async (dispatch, getState) => {
        try {
            const filterBy = getState().userModule.filterBy
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
