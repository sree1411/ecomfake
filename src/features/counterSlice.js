import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'users',
  initialState: {
    cartList: [],
    total: 0,
    quantity: 0
  },
  reducers: {
    addTocart: (state, action) => {
      // Check if the product is already in the cart
      const existingProduct = state.cartList.find(product => product.id === action.payload.id);

      if (existingProduct) {
        // If the product is already in the cart, increase its quantity
        existingProduct.quantity += 1;
      } else {
        // If the product is not in the cart, add it to the cart with quantity 1
        state.cartList.push({ ...action.payload, quantity: 1 });
      }

      // Update total price
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productToRemove = state.cartList.find(product => product.id === productId);

      if (productToRemove) {
        // Decrease total price by the price of the product to be removed
        state.total -= productToRemove.price * productToRemove.quantity;

        // Remove the product from the cart
        state.cartList = state.cartList.filter(product => product.id !== productId);
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.cartList.find(product => product.id === productId);

      if (product) {
        // Update product quantity
        product.quantity = quantity;

        // Recalculate the total price based on the new quantity
        state.total = state.cartList.reduce((total, product) => total + (product.price * product.quantity), 0);
      }
    }
  }
})

// Action creators
export const { addTocart, removeFromCart, updateQuantity } = counterSlice.actions;

export default counterSlice.reducer;
