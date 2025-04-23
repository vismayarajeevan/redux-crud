import { configureStore } from "@reduxjs/toolkit";

import crudReducer from './crudSlice'

const crudStore = configureStore({
    reducer:{
       crud:crudReducer
    }
})

export default crudStore