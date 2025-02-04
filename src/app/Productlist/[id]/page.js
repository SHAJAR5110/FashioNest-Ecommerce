// src/app/Productlist/[id]/page.js
"use client"; // Ensure this is a Client Component

import { urlFor } from '@/sanity/lib/image';
import { client } from '../../../../sanityClient';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { PiPlantLight } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { add } from '../../redux/cartslice';
import React, { useState, useEffect } from 'react';

async function getProductById(id) {
  const query = `*[_type == "product" && id == $id][0]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    tags,
    image{
      asset->{
        url
      }
    },
    rating,
    rateCount
  }`;

  const product = await client.fetch(query, { id });
  return product;
}

export default function ProductDetailPage({ params }) {
  // Unwrap the `params` Promise using `React.use()`
  const { id } = React.use(params);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(add(product));
  };

  return (
    <div>
      <div className="flex w-full text-[#2a254b] h-[90vh]">
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={720}
            height={760}
            className="rounded-lg"
          />
        )}
        <div className="w-[602px] p-[50px] flex flex-col">
          <h1 className="text-[32px]">{product.name}</h1>
          <p className="text-[24px]">
            ${product.price} {product.discountPercentage && <span className="text-red-500">({product.discountPercentage}% off)</span>}
          </p>
          <p className="my-5">Description</p>
          <p className="text-[#8c89a2] my-2">{product.description}</p>
          <ul className="text-[#8c89a2] my-5 laptop-max:my-2">
            <li>Premium Design</li>
            <li>Fabric Quality</li>
            <li>Timeless Classic Style</li>
            <li>Perfect Fit for All Body Types</li>
            <li>Comfortable for All-Day Wear</li>
            <li>Elegant Embroidery or Embellishments</li>
            <li>Breathable and Skin-Friendly Material</li>
            <li>Easy to Maintain and Wash</li>
            <li>Versatile for Casual and Formal Occasions</li>
            <li>Affordable Luxury</li>
          </ul>
          <p className="my-5 laptop-max:my-2">Size</p>
          <div className="grid grid-cols-3 grid-rows-2">
            <p>Height</p>
            <p>Width</p>
            <p>Meter</p>
            <p className="text-[#8c89a2]">500 cm</p>
            <p className="text-[#8c89a2]">120 cm</p>
            <p className="text-[#8c89a2]">5m</p>
          </div>
          {/* Add to Cart Button */}
          <div className="flex justify-between items-center py-5">
            <Button className="rounded-none bg-[#2a254b] text-white p-5" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center w-[95%] mx-auto mt-10">
        <Link
          className="!bg-black/10 text-[#2a254b] text-center p-6 mt-8 w-[20%]"
          href="/Productlist"
        >
          View Collection
        </Link>
      </div>
      <br></br><br></br><br></br>
      <div className="w-full flex flex-col justify-between items-center mx-auto p-5 max-w-[1200px] text-[#2a254b]">
        <h2 className="my-2 text-2xl">What makes our brand different</h2>
        <div className="flex justify-center items-center h-auto gap-4 my-12 flex-wrap laptop-max:h-100">
          <div className="flex flex-col items-start justify-start w-[270px] leading-6 ">
            <TbTruckDelivery className="text-xl my-2" />
            <h2 className="text-xl">Order standard</h2>
            <p className="text-[16px]">Order before 3 PM and receive your order in the coming days.</p>
          </div>
          <div className="flex flex-col  w-[270px] h-[124px] leading-6">
            <FaRegCheckCircle className="text-xl my-2" />
            <h2 className="text-xl">Made by true designers</h2>
            <p className="text-lg">Quality made with real passion of modern design.</p>
          </div>
          <div className="flex flex-col w-[270px] h-[124px] leading-6">
            <BsCreditCard className="text-xl my-2" />
            <h2>Unbeatable prices</h2>
            <p className="text-[16px]">For our materials and quality you won’t find better prices anywhere</p>
          </div>
          <div className="flex flex-col w-[270px] h-[124px] leading-6">
            <PiPlantLight className="text-xl my-2" />
            <h2> Packaging</h2>
            <p className="text-[16px]">We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      </div>
    </div>
  );
}