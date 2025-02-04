// src/app/Productlist/ProductListClient.js
"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Card from "../UIcomponents/Card";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartslice";

export default function ProductListClient({ products }) {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    console.log("Products loaded:", products);
  }, [products]);

  return (
    <div>
      <div className="flex justify-center items-center m-6 tablet-max:m-0 tablet-max:w-full laptop-max:flex-col w-[95%]">
        <Image
          src={"/image 7.jpg"}
          height={1000}
          width={1500}
          alt="Home page Banner"
        />
      </div>
      <br />
      <br />
      <div className="flex flex-wrap gap-10 justify-start items-center m-6 tablet-max:m-0 tablet-max:w-full laptop-max:flex-col w-[95%]">
        {products.map((product) => (
          <Card key={product.id} product={product} onAdd={handleAdd}>
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}