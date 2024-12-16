import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { employeeApi } from '../services/employeeApi'


export const store = configureStore({
  reducer: {
 
    [employeeApi.reducerPath]: employeeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
})

setupListeners(store.dispatch)