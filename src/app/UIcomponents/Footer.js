import React from "react";

import { Button } from "@/components/ui/button";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { TfiSkype } from "react-icons/tfi";
import { FiTwitter } from "react-icons/fi";
import { SlSocialPintarest } from "react-icons/sl";
import { Input } from "@/components/ui/input";
function Footer() {
  return (
    // main Container of Footer
    <div className="flex flex-col w-full min-h-[300px]   bg-[#2a254b] text-white">
      {/* main content of Footer */}
      <div className="flex w-[95%] mx-auto  justify-between tablet-max:flex-col tablet-max:justify-center tablet-max:items-center tablet-max:w-full">
        <span className="flex justify-between w-[25%] tablet-max:w-[75%]">
          {/* first area */}
          <div className="flex text-sm pt-[58px] opacity-80">
            <div className="flex flex-col items-start gap-3  ">
              <Link href="/">Home</Link>
              <Link href="/Productlist">All Products</Link>
              <Link href="/About">About</Link>
              <Link href="/Contact">Contact Us</Link>
            </div>
          </div>
        
          {/* second area */}
          <div className="flex text-sm pt-[58px] pl-[0px] opacity-80">
            <div className="flex flex-col items-start gap-3  ">
              <h1 className="text-[16px]">Categories</h1>
              <h2>3-Piece</h2>
              <h2>2-Piece</h2>
              <h2>Abaya</h2>
              <h2>Festive Wears</h2>
              <Link href="/Productlist">All Products</Link>
            </div>
          </div>
        </span>
        {/* third area */}
        <div className="flex text-sm pt-[58px]  opacity-80 tablet-max:w-[75%]">
          <div className="flex flex-col items-start gap-3  ">
            <h1 className="text-[16px]">Our company</h1>
            <Link href="/About">About</Link>
            <h2>Vacancies</h2>
            <h2>Privacy</h2>
            <h2>Returns policy</h2>
          </div>
        </div>
        {/* fourth area of sign-up input*/}
        <div className="flex text-sm pt-[58px]  w-[48%] tablet-max:w-[75%] tablet-max:mb-4">
          <div className="flex flex-col items-start gap-3 w-full ">
            <h1 className="text-[16px] opacity-80">Join our mailing list</h1>
            <div className="flex w-full">
              <Input
                className="rounded-none opacity-80 text-white !placeholder-white h-[90%] w-[180%] p-5 !bg-white/20"
                placeholder="your@email.com"
              />
              <Link href="/sign-up">
              <Button className="rounded-none hover:text-[#2a254b] hover:bg-white text-[#2a254b] !bg-white h-[90%] p-5">
                Sign up
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* bottom area of footer */}
      <hr className="mx-auto border-[#4e4d93] w-[95%] mt-5 mb-4 tablet-max:hidden"></hr>
      <div className="w-[95%] flex mx-auto">
        <div className="flex justify-between items-center w-full">
          {/* copy write content */}
          <div className="flex opacity-80 tablet-max:w-full tablet-max:justify-center tablet-max:items-center tablet-max:mb-2">
            Copyright 2025 FashioNest LTD
          </div>
          {/* icons of footer */}
          <div className="flex gap-6 text-xl tablet-max:hidden">
            <AiOutlineLinkedin className="cursor-pointer" />
            <AiOutlineFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <TfiSkype className="cursor-pointer" />
            <FiTwitter className="cursor-pointer" />
            <SlSocialPintarest className="cursor-pointer" />
          </div>
        </div>
      </div>
      <br></br><br></br>
    </div>
  );
}

export default Footer;
