import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import PageNotFound from '../pages/PageNotFound'
import Cart from '../pages/Cart'

const Allroutes = () => {
  return (
    <main>
        <Routes>
           <Route path='/' element={<ProductList apiPath="products"/>} />
           <Route path='/products/:id' element={<ProductDetail/>} />
           <Route path='/cart' element={<Cart/>} />
           <Route path='*' element={<PageNotFound/>} />

        </Routes>
    </main>
  )
}

export default Allroutes