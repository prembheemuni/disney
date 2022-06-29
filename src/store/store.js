import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit"
import SignInReducer from "../reducers/SignInReducer";

const store = configureStore({
    reducer : {user:SignInReducer},
    middleware:getDefaultMiddleware({serializableCheck:false})
})

export default store;