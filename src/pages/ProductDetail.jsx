import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {

  const [product, setProduct] = useState([])
   const {id} = useParams()
   
   useEffect(()=>{
    let fetchData = async ()=>{
      let response = await fetch(`https://fakestoreapi.com/products/${id}`)
      let result = await response.json();
      setProduct(result)
    }
    fetchData()
  },[id])



  return (
    <div>
       
     <div className="card" style={{width:"250px"}}>
        <img src={product.image} alt="" />
        <h1>Title :{product.title}</h1>
        <h1>Price :{product.price}</h1>
         <hr/>
        <Link to="/cart"> Add To cart </Link>
     </div>


    </div>
  )
}

export default ProductDetail