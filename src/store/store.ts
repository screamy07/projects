import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {flightReducer} from "../slice/slice";

const rootReducer = combineReducers({
    flightReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore["dispatch"]
export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}