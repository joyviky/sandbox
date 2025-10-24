import React from 'react'
import logo from '../../assets/logo.png'
import { FaYoutube } from 'react-icons/fa'
import { TiSocialSkype } from 'react-icons/ti'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";


const links=[{id:1,name:"About us",link:"/#"}
    ,{id:2,name:"Our story",link:"/#"},{id:3,name:"Projects",link:"/#"},{id:4,name:"Terms of Use",link:"/#"},{id:5,name:"Privacy Policy",link:"/#"}
]
const Footer = () => {
  return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3  max-w-[1100px] mx-auto px-5   gap-10 my-25 items-start">
           <div className="flex flex-col gap-5 ">
              <img src={logo} alt="" className='w-[150px]'/>
              <h1 className=' text-gray-500'>© 2025 Sandbox. All rights reserved.</h1>
              <div className="flex gap-3 text-2xl ">
                    <FaLinkedin className="text-[#062b55] cursor-pointer hover:-translate-y-1  duration-300" />
                    <FaTwitter className="text-[#5DAED5] cursor-pointer hover:-translate-y-1  duration-300"/>
                    <TiSocialDribbble className="text-[#a0030b] cursor-pointer hover:-translate-y-1  duration-300" />
                    <TiSocialSkype className="text-[#85c8ff] cursor-pointer hover:-translate-y-1  duration-300"/>
                    <FaYoutube className="text-[#a0030b] cursor-pointer hover:-translate-y-1  duration-300"/>
              </div>
           </div>
           <div className="flex flex-col gap-5 ">
            <h1 className='text-xl text-secondary font-medium '>Get in Touch</h1>
            <h2 className=' text-gray-500'>Moonshine St. 14/05 Light City, London, United Kingdom</h2>
            <p className=' text-gray-500'>info@email.com <br /> 00 (123) 456 78 90</p>
           </div>
           <div className="flex flex-col gap-5 ">
            <h1 className='text-xl text-secondary font-medium '>Learn More</h1>
            <ul>
                {
                    links.map((data,ind)=>(
                        <li key={ind}>
                            <a href={data.link} className=' text-gray-500 hover:text-primary duration-300 inline-block mb-2'>{data.name}</a>
                        </li>
                    ))
                }
            </ul>
           </div>
           <div className="flex flex-col gap-5 md:col-span-3 lg:col-span-1">
            <h1 className='text-xl text-secondary font-medium '>Our Newsletter</h1>
            <h2 className=' text-gray-500'>Subscribe to our newsletter to get our news & deals delivered to you.</h2>
           <div className="relative w-full rounded-md overflow-hidden outline-1 outline-primary group h-[50px]">
            <input id="email" className="peer w-full p-2 outline-0 rounded-md mt-3 " required/> 
            <label htmlFor="email" className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all duration-200 peer-focus:top-3 peer-focus:text-xs peer-focus:text-primary bg-white px-1"
            >
            Email Address
            </label>
            <button className="absolute right-0 bg-primary h-full px-4 text-white tracking-wide cursor-pointer rounded-r-md">
                Join
            </button>
            </div>

           </div>
        </div>
    </div>
  )
}

export default Footer