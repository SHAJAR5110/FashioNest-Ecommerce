// UIcomponents/Card.js
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Card = ({ product, children,onAdd }) => {
  return (
    <div className='flex flex-col items-center border p-4 rounded-lg shadow-lg'>
    <div className=" mix-h-[750px] w-[300px] ">
      {children}
      <h2 className="text-xl font-bold mt-2">{product.name} </h2>
      <div className='flex w-[200px] ' >
      <p className="text-gray-700">{product.description}</p>
      </div>
      <p className="text-lg font-semibold">Rs.{product.price}</p>
      {product.discountPercentage && (
        <p className="text-sm text-red-600">{product.discountPercentage}% off</p>
      )}
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{"★".repeat(Math.round(product.rating))}</span>
        <span className="text-gray-500 ml-2">({product.rateCount})</span>
      </div>
      <div className="mt-2">
        {product.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
       
      </div>
    </div>
    <div className='flex justify-between gap-10 mt-4'>
    <Link href={`/Productlist/${product.id}`} >
      <Button type="primary">View</Button>
    </Link>
      <Button onClick={() => onAdd(product)} >Add to cart</Button>
      </div>
    </div>
  );
};

export default Card;