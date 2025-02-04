import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { PiPlantLight } from "react-icons/pi";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
export default function Home() {
  return (
   <div>
    
    {/* Landing Page Content */}
    <div className="flex justify-center items-center m-6 tablet-max:m-0 tablet-max:w-full laptop-max:flex-col w-[95%]">
    <Image
    src={"/homePageBanner.png"}
    height={1000}
    width={1500}
    alt="Home page Banner"
     ></Image>
    </div>

    {/* Second section */}
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

    {/* Third section */}
    <div className="min-h-[750px] w-[95%] mx-auto pag-6 flex flex-col justify-start items-start text-[#2a254b] tablet-max:mb-10">
    {/* heading div */}
    <div className="w-full">
      <h1 className="text-[32px]">New Design</h1>
    </div>
    {/* product div */}
    <div className="flex w-full h-[90%] justify-between tablet-max:flex-col ">
      {/* card 1 */}
      <div className="flex justify-between items-center w-[48%] tablet-max:w-full">
      <div className="flex flex-col ">
      <Image className="my-3" src="/image 1.png" width={300} height={400} alt="3-Piece Suit" />
      </div>

       {/* card 2 */}
       <div className="flex flex-col ml-5">
      <Image className="my-3" src="/image 2.png" width={300} height={400} alt="2-Piece Suit" />
      </div>
      </div>
      {/* <div className="min-w-1"></div> */}
      <div className="flex justify-between items-center w-[48%] tablet-max:w-full">
      {/* card 3 */}
      <div className="flex flex-col  ">
      <Image className="my-3" src="/image 3.png" width={300} height={400} alt="Festive Wear" />
      </div>

      {/* card 4 */}
      <div className="flex flex-col ml-5">
      <Image className="my-3" src="/image 4.png" width={300} height={400} alt="2-Piece" />
      </div>
      </div>
    </div>
    {/* Button div */}
    <Link className='!bg-black/10 text-[#2a254b] text-center rounded-none mx-auto p-6 mt-8 w-[20%] tablet-max:w-full' href='/Productlist'>
    View Collection
    </Link>
<br></br>
    </div>

    {/* Fourth section */}
   

    {/* Fifth section */}
<div className="min-h-[480px] flex flex-col  w-[full] bg-[#F9F9F9]">
<div className="min-h-[365px] w-[95%] bg-white text-[#2a254b] mx-auto my-auto justify-between items-center pt-[68px]">
    {/* Text of that section */}
    <div className="flex flex-col ">
    <h1 className="text-[36px] text-center">Join the club and get the benefits</h1>
    <p className="text-[16px] text-center w-[30%] tablet-max:w-full mx-auto mt-5">Sign up for our newsletter and receive exclusive offers on new 
    ranges, sales, pop up stores and more</p>
    </div>
    {/* signup button */}
    <div className="flex justify-center items-center mt-6">
    <Input className="rounded-none text-[#2a254b] !placeholder-[#8c89a2] h-[90%] w-[450px] p-5 !bg-black/5" 
        placeholder="your@email.com" />
        <Link href='/sign-up'>
        <Button className="rounded-none hover:bg-[#2a254b] bg-[#2a254b] text-white  h-[90%] p-5">Sign up</Button>
        </Link>
    </div>
</div>
</div>

    {/* Sixth section */}
    <div className="flex justify-start items-start h-auto w-full text-[#2a254b] laptop-max:flex-col laptop-max:justify-center laptop-max:items-center">
    <div className="w-[65%] flex flex-col justify-between items-center tablet-max:w-full">
      <div className="p-5  flex flex-col justify-between items-start leading-8 w-[80%]">
      <h1 className="text-[32px] my-3">Fast Delivery and Exceptional Services</h1>
<p className="text-[16px] my-3 text-[#8c89a2]">Experience seamless delivery with our reliable and efficient service. We ensure your orders reach you quickly and in perfect condition.</p>
<p className="text-[16px] my-3 text-[#8c89a2]">Our commitment to excellence extends beyond delivery. From order placement to doorstep service, we prioritize your satisfaction every step of the way.</p>

    </div>
    <Link href='/Productlist'>
    <Button className='!bg-black/5  text-[#2a254b] mt-16 rounded-none ml-0 laptop-max:w-[80%] laptop-max:mb-2'>Get in touch</Button>
    </Link>
    </div>
    <Image className="laptop-max:w-[500px] laptop-max:h-[500px] laptop-max:mb-0" src="/image 6.jpg" width={740} height={740} alt="Fast Delivery and Services" />
    </div>
<br></br>
   </div>
  );
}
