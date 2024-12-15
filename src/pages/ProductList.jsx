import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'

const ProductList = ({apiPath}) => {

   const {data} = useFetch(apiPath)



  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
        {
            data.map((product)=>(
            
                   <Card key={product.id} product={product}/>  
                    
            ))
        }
    </div>
  )
}

export default ProductList