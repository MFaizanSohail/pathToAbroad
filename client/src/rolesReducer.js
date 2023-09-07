import {createReducer} from '@reduxjs/toolkit'

export const rolesReducer= createReducer({role:null},{
    user:(state)=>{
        state.role="user"
    }, 
    dmin:(state)=>{
        state.role="admin"
    }
})