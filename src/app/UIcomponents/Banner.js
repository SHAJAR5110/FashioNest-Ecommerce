import React from 'react'

import { TbTruckDelivery } from "react-icons/tb";
function Banner() {
  return (
     
     <div className='h-[41px] w-full aboveDesktop:w-full bg-[#2A254B] text-white flex justify-end laptop-max:min-w-full'>
     <div className='w-[60%] flex items-center justify-between tablet-max:w-full '>
     <h1 className='flex'> <TbTruckDelivery className='text-xl'/> &nbsp; Fast delivery on all orders.</h1>
      
     </div>
     </div>
  )
}

export default Banner