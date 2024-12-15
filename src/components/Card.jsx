import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  return (
    <div>
          <div className="card" style={{width:"210px", border:"1px solid black"}}>
            <Link to={`products/${product.id}`}>
              <img src={product.image} alt="" width="100px" height="100px" />
              <div>
                Title : {product.title}
                Price: {product.price}
              </div>
              </Link>
          </div>
    </div>
  )
}

export default Card