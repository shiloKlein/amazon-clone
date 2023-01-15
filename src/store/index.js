import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cart.reducer'
import { userReducer } from './reducers/user.reducer'
// import { userReducer } from './reducers/user.reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    cartModule: cartReducer,
    userModule: userReducer,

})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
