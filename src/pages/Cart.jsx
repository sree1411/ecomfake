import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/counterSlice';
import Card from '../components/Card';

const Cart = () => {
  const products = useSelector(state => state.users.cartList);
  const totalPrice = useSelector(state => state.users.total);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ productId: id, quantity }));
  };

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Total Price: {totalPrice}</h1>
      <hr />
      {products.map((product, i) => (
        <div key={i}>
          <Card product={product} />
          <div>
            <button className='class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
             onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
              min="1"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
