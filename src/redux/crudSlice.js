import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
    name:'crud',
    initialState:{
        users:[]

    },
    reducers:{
        addUser:(state,newUser)=>{
           state.users.push({id:Date.now(),...newUser.payload})
        },
        deleteUser:(state,userdetails)=>{
            state.users = state.users.filter(user=>user.id !== userdetails.payload)

        }


    }

})

export const {addUser,deleteUser} = crudSlice.actions
export default crudSlice.reducer