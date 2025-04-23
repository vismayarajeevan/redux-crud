import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
    name:'crud',
    initialState:{
        users:[]

    },
    reducers:{
        addUser:(state,newUser)=>{
           state.users.push({id:Date.now(),...newUser.payload})
        }

    }

})

export const {addUser} = crudSlice.actions
export default crudSlice.reducer