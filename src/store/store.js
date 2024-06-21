import { createStore, combineReducers,applyMiddleware } from "redux";
import {thunk }from 'redux-thunk'
import rootReducer from './reducers'
 
const reducer = combineReducers({
    reucer:rootReducer
})
const initialState ={}

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store