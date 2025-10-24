import React from 'react'
import { IoSend } from 'react-icons/io5'
import { LuPhoneCall } from 'react-icons/lu'
import { MdOutlineLocationOn } from 'react-icons/md'

const PreHeader = () => {
  return (
    <div>
        <div className='bg-primary select-none px-5'>
            <div className="max-w-[1100px] mx-auto flex flex-col items-start sm:flex-row   justify-between  py-5  space-y-5 md:space-y-0">
               <div className="flex items-center text-md text-white gap-1 ">
                <MdOutlineLocationOn className='text-2xl  w-[30px] h-[30px]'/>
                <h1>Moonshine St.14/05 Light City</h1>
               </div>
               <div className="flex flex-col sm:flex-row items-center gap-4 justify-start ">
                  <div className="flex items-center text-md text-white  gap-2">
                     <LuPhoneCall  className='text-xl  w-[25px] h-[25px]' />
                     <h1 className='w-[150px] '>00(123) 456 78 90</h1>  
                  </div>
                  <div className="relative group  flex items-center text-md text-white  gap-2 cursor-pointer ">
                    <IoSend  className='text-xl  w-[25px] h-[25px]' />
                     <h1>sandbox@email.com</h1>  
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-white origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left "></span>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default PreHeader