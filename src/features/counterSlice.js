import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'users',
  initialState: {
    cartList:[],
    total: 0,
    quantity:1
  },
  reducers: {
     addTocart:(state,action)=>{
        
        let exitUser = state.cartList.find()
       
     },
     removeFromCart:(state,action)=>{
       console.log(state)
     },
     updateQuantity:(state,action)=>{
        console.log(state)
     }
  }
})

// Action creators are generated for each case reducer function
export const { addTocart,removeFromCart,updateQuantity } = counterSlice.actions

export default counterSlice.reducer