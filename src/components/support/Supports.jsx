import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'
import { TbDatabaseDollar } from 'react-icons/tb'
import { FaChartLine } from 'react-icons/fa6'

const supporters = [
  {
    id: 1,
    icon: BiPhoneCall,
    title: "24/7 Support",
    content: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla."
  },
  {
    id: 2,
    icon: MdSecurity,
    title: "Secure Payments",
    content: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla."
  },
  {
    id: 3,
    icon: TbDatabaseDollar,
    title: "Daily Updates",
    content: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla."
  },
  {
    id: 4,
    icon: FaChartLine,
    title: "Market Research",
    content: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla."
  }
]

const Supports = () => {
  return (
    <div className='w-full py-10 px-5'>
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-5 mb-10">
          <h2 className='text-textColor text-xl uppercase'>What We Do?</h2>
          <h1 className='font-ser text-secondary text-3xl sm:text-4xl md:text-5xl max-w-[850px]'>
            The service we offer is specifically designed to meet your needs.
          </h1>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between ">
          {supporters.map((data, ind) => {
            const Icon = data.icon
            return (
              <div key={ind} className='flex flex-col items-center text-center gap-4 p-5 rounded-2xl '>
                <div className="bg-primary w-[50px] h-[50px] rounded-full grid place-content-center">
                  <Icon className='text-white text-2xl' />
                </div>
                <h1 className="text-xl font-semibold text-secondary">{data.title}</h1>
                <p className="text-gray-500 text-sm">{data.content}</p>

                
                <div className="relative inline-block group">
                  <a
                      href="#"
                      className="flex gap-2 text-primary items-center font-semibold relative z-10"
                  >
                      Learn More
                      <FaArrowRight />
                  </a>

                
                  <span
                      className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-primary origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-0 group-hover:origin-left"
                  ></span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Supports
