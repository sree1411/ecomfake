import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${product.id}`}>
        <img className="rounded-t-lg" src={product.image} alt="" width="100px" />
      </Link>
      <div className="p-5">
        <Link to={`/products/${product.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title.substring(0, 15)}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description.substring(0, 25)}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price :{product.price}/-</p>
        
      </div>
    </div>
  );
};

export default Card;
