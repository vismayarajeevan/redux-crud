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

        },
        editUser: (state, edit) => {
            const { id, name, email } = edit.payload;
            const index = state.users.findIndex(user => user.id === id);
            if (index !== -1) {
              state.users[index] = { id, name, email };
            }
          }
          


    }

})

export const {addUser,deleteUser,editUser} = crudSlice.actions
export default crudSlice.reducer