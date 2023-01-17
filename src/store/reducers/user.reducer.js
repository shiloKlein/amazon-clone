
const INITIAL_STATE = {
    loggedInUser: null,
    prevOrders: []

}


export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, loggedInUser: action.fullUser//, prevOrders: action.prevOrders
            }
        case 'LOG_OUT':
            return {
                ...state, loggedInUser: null
            }
        default:
            return state
    }
}