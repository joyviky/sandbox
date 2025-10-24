import React from 'react'
import { IoMdStar } from "react-icons/io";
import img from '../../assets/rat.png'
const RatingSection = () => {
  return (
    <div className='px-5 mt-50 my-30'>
        <div className='max-w-[1100px] h-[420px] mx-auto px-5 bg-[#EDF2FC] rounded-lg relative p-20'>
            {/* img */}
            <div className="hidden lg:block absolute bottom-0 left-10 ">
               <img src={img} alt="" className='h-[500px]'/>
            </div>
            {/* cnt */}
            <div className="flex flex-col justify-center items-center lg:pl-50 ">
                <div className="flex text-yellow-400 text-2xl">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                </div>
                <h1 className='max-w-[600px] text-center text-[20px] leading-9 text-gray-400'>“Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed”</h1>
               <h1 className="mt-3 font-bold text-secondary text-2xl capitalize">Coriss Ambady</h1>
                  <h2 className="text-[13px] text-gray-500 uppercase font-bold">Financial Analyst</h2>
            </div>
        </div>
    </div>
  )
}

export default RatingSection