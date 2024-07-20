import { createSlice } from "@reduxjs/toolkit"



const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },

        reset:(state)=>{
            state.count=0
        },
        decrement:(state)=>{
            state.count-=1
        },

        incrementByAmt:(state,action)=>{
            state.count+=action.payload
        }
    }
})
export const{increment,decrement,reset,incrementByAmt}=counterSlice.actions
export default counterSlice.reducer