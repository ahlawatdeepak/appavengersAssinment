import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { AuthReducer } from "./Auth.reducer"


const rootReducer=combineReducers({
    list:AuthReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))