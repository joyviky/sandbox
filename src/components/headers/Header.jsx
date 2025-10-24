import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'

import { IoIosArrowDown } from 'react-icons/io'
import { IoClose, IoMenu } from 'react-icons/io5';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TiSocialDribbble, TiSocialSkype } from 'react-icons/ti';

const headerLinks=[{id:1,name:"Demos",link:"/#"},{id:2,name:"Pages",link:"/#"},{id:3,name:"Projects",link:"/#"},{id:4,name:"Blog",link:"/#"},{id:5,name:"Blocks",link:"/#"},{id:6,name:"Documentation",link:"/#"}]
const dropLinks=[{id:1,name:"EN",link:"/#"},{id:2,name:"DE",link:"/#"},{id:3,name:"ES",link:"/#"}];
const Header = () => {
   const [fix,setFix]=useState(false);
   const [open,setOpen]=useState(false);
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setFix(true)
      } else {
        setFix(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className={`${fix ? 'fixed top-0 left-0 w-full z-50 shadow-md bg-white translate-y-0' : ''} `}>
       <div className="">
         <div className="max-w-[1140px] mx-auto flex justify-between py-5 items-center p-5">
           <img src={logo} alt="" className='max-h-10 '/>
            {/* links */}
            <ul className='hidden md:flex items-center gap-6 text-textColor'>
              {
                headerLinks.map((val,ind)=>(
                  <li key={ind}>
                    <a href={val.link} className=' hover:text-primary duration-200 flex items-center gap-2'>{val.name}<IoIosArrowDown size={15} className='font-bold  group-hover:rotate-180 duration-200 text-xs text-primary'/></a>
                  </li>
                ))
              }
            </ul>
           <div className="">
            {/* btn */}
            <div className="flex items-center gap-5 text-textColor">
              <div className="group relative"> 
                <a href="#" className='group-hover:text-primary duration-200 flex items-center gap-1 font-normal'>EN <IoIosArrowDown size={15} className='font-normal group-hover:rotate-180 duration-400 text-xs text-primary'/></a>
                <div className='bg-white shadow-lg w-[60px] rounded-md overflow-hidden absolute -bottom-23 hidden group-hover:block'>
                   <ul>
                    {
                      dropLinks.map((val,ind)=>(
                        <li id={ind}>
                          <a href={val.link} className='text-center inline-block hover:text-primary  w-full py-1'>{val.name}</a>
                        </li>
                      ))
                    }
                   </ul>
                </div>
              </div>  
              <button className='hidden md:block text-white bg-primary px-7 py-2  capitalize rounded-full cursor-pointer hover:-translate-y-1 duration-300 border-2 border-primary'>
              Contact
              </button>
              <div className='cursor-pointer md:hidden '>
                <button onClick={()=>setOpen(true)} className='cursor-pointer'>
                  <IoMenu size={30}/>
                </button>
              </div>
              
            </div>
            {/* side */}
            <div
            className={`fixed top-0 left-0 h-screen w-[350px] bg-black z-[999] shadow-2xl transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"} text-white p-10 flex flex-col justify-between`}>

             {/* first sec */}
             <div className="">
              <div className="flex justify-between items-center mb-7">
              <h1 className='text-3xl'>Sandbox</h1>
              <button onClick={()=>setOpen(false)} className='bg-white/30 p-2 rounded-full cursor-pointer text-xl'>
                <IoClose/>
              </button>
             </div>
              {/* sec */}
              <ul>
                {
                  headerLinks.map((data,ind)=>(
                    <li key={ind} className='flex justify-between items-center mb-4 cursor-pointer'>
                      <a href={data.link}>{data.name}</a>
                      <IoIosArrowDown className='mr-2'/>
                    </li>
                  ))
                }
              </ul>
             </div>
             {/* second sec */}
             <div className="">
              <h1 className='mb-3'>info@email.com <br /> 00 (123) 456 78 90</
              h1>
              <div className='flex gap-3 text-xl'>
                <FaTwitter/>
                <FaLinkedin/>
                <TiSocialDribbble/>
                <TiSocialSkype/>
                <FaYoutube/>
              </div>
             </div>

            </div>
            {/* overlay */}
            {
              open&&(
                <div className='absolute inset-0 bg-black/50 w-screen h-screen z-[900]' onClick={()=>setOpen(false)}></div>
              )
            }
           </div>
              
          </div>
       
       </div>
       
    </div>
  )
}

export default Header