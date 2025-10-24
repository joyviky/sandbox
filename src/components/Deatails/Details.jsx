import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
import w1 from "../../assets/vv1.jpg"
import video from '../../assets/v1.mp4'
import { FaPlay } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';

const words=[
"Aenean eu leo quam ornare curabitur blandit tempus.",
"Praesent commodo cursus magna vel scelerisque.",
"Cras mattis consectetur purus sit amet fermentum.",
"Integer posuere erat a ante venenatis dapibus posuere."]
const Details = () => {
     const [playVideo,setPlayVideo]=useState(false);
  return (
   
    <div>
        <div className="grid lg:grid-cols-2 max-w-[1100px] mx-auto px-5  items-center gap-15 my-30 ">
            {/* left */}
            <div className="relative">
                {
                    playVideo?(
                        <div className='relative overflow-hidden'>
                            <video src={video} controls autoPlay className="h-[500px] w-full rounded-lg object-cover"/>
                            <button className="absolute top-0 group cursor-pointer right-0  " onClick={()=>setPlayVideo(false)}>
                                <IoClose size={30} className='text-gray-400 group-hover:text-white duration-300'/>
                            </button>
                        </div>
                    ): (<div>
                        <img src={w1} alt="Thumbnail" className="h-[500px] w-[500px] rounded-lg object-cover cursor-pointer "onClick={() => setPlayVideo(true)} />
                        <div className="absolute bg-primary text-white p-5 rounded-full top-1/2 left-1/2 -translate-1/2 cursor-pointer" onClick={()=>setPlayVideo(true)}>
                            <FaPlay className=' '/>
                        </div>
                    </div> 
                 )
                }
                <div className="hidden md:block absolute bg-gray-200 h-[500px] rounded-lg -z-10 w-[500px] left-10 top-10">
            </div>

            </div>
             {/* right */}
            <div className="flex flex-col justify-start gap-8 text-justify sm:pl-10 ">
                <h2 className='text-xl text-textColor'>Who Are We?</h2>
                <h1 className='text-secondary text-3xl sm:text-4xl lg:text-5xl font-ser text-start'>Company that believes in the power of creative strategy.</h1>
                
                <h2 className='text-textColor text-md'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
                 {
                    words.map((data,ind)=>(
                        <div key={ind} className="flex items-center gap-4 md:items-start ">
                          <div className="bg-primary/40 w-[30px] h-[30px] md:p-1  rounded-full grid place-content-center ">
                            <TiTick className="text-primary text-xl mt-1  " />
                          </div>
                          <h3 className="text-textColor">{data}</h3>
                        </div>
                    ))
                 }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details