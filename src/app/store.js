import { configureStore } from '@reduxjs/toolkit'
import  usersReducer from '../features/counterSlice'
export default configureStore({
  reducer: {
    users : usersReducer
  }
})