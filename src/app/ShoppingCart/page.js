// src/app/ShoppingCart/page.js
"use client";
import { useSelector, useDispatch } from "react-redux";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import { remove } from "../redux/cartslice"; 
import { loadStripe } from "@stripe/stripe-js";
import Banner from "../UIcomponents/Banner";

export default function ShoppingCart() {
  let newQuantities = 1;
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1; 
      return acc;
    }, {})
  );

  const handleCheckout = async () => {
    try {
      // Prepare cart items for checkout
      const cartItemsForCheckout = cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      // Call the API route to create a Checkout Session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: cartItemsForCheckout }),
      });

      const { id } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  
  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] < 5 ? prev[id] + 1 : 5, 
    }));
  };

  
  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1, 
    }));
  };
  
  
  const handleRemove = (id) => {
    dispatch(remove(id));
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id]; 
      return newQuantities;
    });
  };
  
  // Calculate discounted price for a product
  const getDiscountedPrice = (price, discountPercentage) => {
    return price - (price * discountPercentage) / 100;
  };
  
  // Calculate total price in Rs. with discounts
  const totalPrice = cartItems.reduce((acc, item) => {
    const discountedPrice = getDiscountedPrice(item.price, item.discountPercentage || 0);
    return acc + discountedPrice * quantities[item.id];
  }, 0);
  
  const cartItemsForCheckout = cartItems.map((item) => ({
    stripePriceId: parseInt(item.price), // Ensure each product has a stripePriceId
    quantity: newQuantities, // Use the quantity from the cart
  }));
  return (
    <div className="flex flex-col items-start justify-start min-h-[90vh] p-4">
       <Banner />
      <h1 className="text-5xl w-full text-center font-semibold mb-8">
        Shopping Cart
      </h1>

      {/* Cart Items */}
      <div className="w-full">
        {cartItems.map((item) => {
          const discountedPrice = getDiscountedPrice(item.price, item.discountPercentage || 0);
          return (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              {/* Product Image */}
              <div className="flex items-center gap-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                )}

                {/* Product Name, Price, and Discount */}
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-lg">
                    Rs. {discountedPrice.toFixed(2)}{" "}
                    {item.discountPercentage > 0 && (
                      <span className="text-sm text-red-500 line-through">
                        (Rs. {item.price})
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => handleDecrease(item.id)}
                  className="!bg-black/10 text-[#2a254b] rounded-none p-2"
                  disabled={quantities[item.id] === 1} // Disable if quantity is 1
                >
                  -
                </Button>
                <p className="text-xl">{quantities[item.id]}</p>
                <Button
                  onClick={() => handleIncrease(item.id)}
                  className="!bg-black/10 text-[#2a254b] rounded-none p-2"
                  disabled={quantities[item.id] === 5} // Disable if quantity is 5
                >
                  +
                </Button>
              </div>

              {/* Delete Button */}
              <Button
                onClick={() => handleRemove(item.id)}
                className="!bg-red-500 text-white rounded-none p-2"
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>

      {/* Total Price */}
      <div className="w-full p-10">
        <h2 className="text-4xl w-full text-end font-semibold">Total</h2>
        <p className="text-xl w-full text-end font-semibold">
          Rs. {totalPrice.toFixed(2)}
        </p>
      </div>
      
      {/* Checkout Button */}
        {totalPrice.toFixed(2) > 0 && (
      <div className="text-4xl w-full text-start font-semibold">
        <Button
          onClick={handleCheckout}
          className="!bg-green-600 text-white rounded-none p-2"
        >
          Checkout
        </Button>
      </div>
        )
      }
    </div>
  );
}