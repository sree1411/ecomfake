import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PageDetail = () => {

    const [product, setProduct] = useState([])


    const {id} = useParams()
    
    
     useEffect(()=>{
      let fetchData = async ()=>{
         let response = await fetch(`https://fakestoreapi.com/products/${id}`)
         let result = await response.json()
         setProduct(result)

      }
      fetchData()
     },[])


  return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={product.image} alt="" width="100px" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                   Add To cart 
                </button>
            </div>
        </div>

  )
}

export default PageDetail