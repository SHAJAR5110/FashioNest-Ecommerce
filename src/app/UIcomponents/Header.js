'use client'
import React from 'react'
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useSelector } from "react-redux";  

export default function Header() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className='h-[132px] w-[95%] mx-auto text-lg tablet-max:h-[70px]'>
      {/* Header icons section */}
      <div className='w-[100%] flex justify-between items-center p-5'>
        <IoIosSearch className='mobile-max:hidden tablet-max:hidden text-[#2a254b] cursor-pointer' />
        
        <Link href='/'>
          <h1 className='text-xl '>FashioNest</h1>
        </Link>

        <div className='flex gap-4 items-center text-[#2a254b]'>
          <Link href='/ShoppingCart' className="relative">
            <MdOutlineShoppingCart className='mobile-max:hidden tablet-max:hidden cursor-pointer text-2xl' />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          <div className="flex justify-end tablet-max:hidden tablet:flex">
            <SignedOut>
              <Link href="/sign-in">
                <FaRegUserCircle className='mobile-max:hidden tablet-max:hidden cursor-pointer'/>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton showName />
            </SignedIn>
          </div>

          <IoIosSearch className='hidden mobile-max:block tablet-max:block cursor-pointer'/>

          <Sheet className='hidden mobile-max:block tablet-max:block cursor-pointer text-[#2a254b]'>
            <SheetTrigger>
              <LuMenu className='hidden text-[#2a254b] mobile-max:block tablet-max:block cursor-pointer'/>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>FashioNest</SheetTitle>
                <SheetDescription className='flex flex-col text-[#2a254b] justify-center items-start gap-5'>
                  <div className='flex gap-5 text-[#2a254b] text-xl justify-between w-full'>
                    <Link href='/ShoppingCart' className="relative">
                      <MdOutlineShoppingCart className='text-[#2a254b] cursor-pointer' />
                      {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {cartItems.length}
                        </span>
                      )}
                    </Link>
                    <SignedOut>
                      <Link href="/sign-in">
                        <FaRegUserCircle className='mobile-max:hidden tablet-max:hidden cursor-pointer'/>
                      </Link>
                    </SignedOut>
                    <SignedIn>
                      <UserButton showName />
                    </SignedIn>
                  </div>
                  <Link href='/'>Home</Link>
                  <Link href='/Productlist'>All Products</Link>
                  <Link href='/about'>About</Link>
                  <Link href='/contact'>Contact Us</Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <hr className='mobile-max:hidden tablet-max:hidden'></hr>

      {/* Header navigation section */}
      <div className='flex w-[100%] justify-center gap-5 text-[#8c89a2] py-4 mobile-max:hidden tablet-max:hidden '>
        <Link href='/'>Home</Link>
        <Link href='/Productlist'>All Products</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact Us</Link>
      </div>
    </div>
  );
}
