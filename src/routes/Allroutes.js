import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageList from '../pages/PageList'
import PageDetail from '../pages/PageDetail'
import PageNotFound from '../pages/PageNotFound'

const Allroutes = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<PageList apiPath="products"/>} />
            <Route path='/products/:id' element={<PageDetail/>} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </main>
  )
}

export default Allroutes