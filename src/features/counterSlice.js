import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state,action)=>{
       state.value+=1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
        console.log(state.value, "state.value")
        console.log(action.payload)
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer