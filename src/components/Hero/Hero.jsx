import React from 'react'
import h1 from '../../assets/h1.jpg'

const Hero = () => {
  return (
    <div>
        <div>
            <div className="grid lg:grid-cols-2 max-w-[1100px] mx-auto px-5  items-center gap-15 my-25 ">
                {/* left */}
                <div className="flex flex-col justify-start gap-7 text-justify order-2 md:order-1">
                    <h1 className='lg:text-6xl text-4xl text-center font-ser text-secondary lg:text-start'>We bring solutions to make life easier for our customers.</h1>
                    <h2 className='text-textColor lg:text-3xl text-2xl text-center lg:text-start'>We have considered our solutions to support every stage of your growth.</h2>
                    <div className="flex gap-5 justify-center md:justify-start">
                         <button className=' text-white bg-primary px-7 py-2  capitalize rounded-full cursor-pointer hover:-translate-y-1 duration-300 border-2 border-primary font-semibold'>
                        Explore Now
                        </button>
                         <button className=' text-primary bg-white px-7 py-2  capitalize rounded-full cursor-pointer hover:-translate-y-1 duration-300 border-2 border-primary font-semibold hover:bg-primary hover:text-white '>
                        Free Trial
                        </button>
                    </div>
                </div>
                {/* right */}
                <div className="relative order-1 z-[10]">
                    <img src={h1} alt=""  className='h-[500px] rounded-lg ' />
                    <div className="hidden md:block absolute bg-box h-[500px] rounded-lg z-[-1] w-[500px] left-15 top-15"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero