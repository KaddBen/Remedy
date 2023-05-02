import userInfoSlice, { addUserInfos } from "../reducers/userInfoSlice";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import  {combineReducers}  from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const { configureStore } = require("@reduxjs/toolkit")


 const persistConfig = {
    timeout: 10, //Set the timeout function to 2 seconds
    key: "root",
    version: 1,
    storage
}
const reducer = combineReducers(userInfoSlice)
 const persistedReducer = persistReducer(persistConfig, reducer);

 export const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
})