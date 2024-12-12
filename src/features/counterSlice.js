import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'users',
  initialState: {
    cartList: [],
    total: 0,
    quantity: 0
  },
  reducers: {
    addTocart :(state,action)=>{
       let existinguser = state.cartList.find((product)=>product.id == action.payload.id)
       if(existinguser){
          state.quantity = state.quantity + 1
       }else{
          state.cartList.push({...action.payload,quantity: 1})
       }
       state.total = state.total + action.payload.price
    },
    removeFromCart :(state,action)=>{
        const productId = action.payload;
        let exitProduct = state.cartList.find((product)=>product.id == productId)
        if(exitProduct){
            state.total -= exitProduct.price * exitProduct.quantity
            state.cartList =  state.cartList.filter((product)=>product.id !== productId)
        }
      },
      updateQuantity :(state,action)=>{
       const {productId, quantity} = action.payload
       const product = state.cartList.find(product => product.id === productId);
       if(product){
        product.quantity = quantity
        state.total = state.cartList.reduce((total,product)=> total + (product.price * product.quantity),0)

        }

      }
  }
  
   
})

// Action creators
export const { addTocart, removeFromCart, updateQuantity } = counterSlice.actions;

export default counterSlice.reducer;
