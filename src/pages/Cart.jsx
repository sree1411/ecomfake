import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

 const totalPrice = useSelector((state)=>state.users.total)



  return (
    <div>Cart :{totalPrice}</div>
  )
}

export default Cart