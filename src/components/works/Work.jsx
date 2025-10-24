import React from 'react'
import w1 from '../../assets/w1.jpg'

const ideas=[{id:1,title:"Collect Ideas",content:"Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus."},{id:2,title:"Data Analysis",content:"Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna."},{id:3,title:"Finalize Product",content:"Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed."}]
const Work = () => {
  return (
    <div>
      <div className="">
        <div className="grid lg:grid-cols-2 max-w-[1100px] mx-auto px-5  items-center gap-15 my-30 ">
          {/* left */}
          <div className="relative">
            <img src={w1} alt=""  className='h-[500px] rounded-lg ' />
            <div className="hidden md:block absolute bg-box h-[500px] rounded-lg z-[-1] w-[500px] left-15 top-15"></div>
          </div>
         
          {/* right */}
          <div className="flex flex-col justify-start gap-5 text-justify sm:pl-10 ">
           <h1 className='text-secondary text-3xl sm:text-4xl lg:text-5xl font-ser '>How It Works?</h1>
           <h2 className='text-2xl text-textColor'>So here are three working steps why our valued customers choose us.</h2>
           <div className="">
            {
              ideas.map((data,ind)=>(
                <div key={ind} className='flex items-start gap-5 mb-5'>
                 <div className="w-[30px] h-[30px] p-5  rounded-full bg-primary text-white grid place-content-center font-bold">
                  <h1 className='text-xl '>{data.id}</h1>
                 </div>
                  <div className="space-y-1">
                    <h1 className='text-secondary text-xl font-semibold capitalize'>{data.title}</h1>
                    <h2 className='text-textColor text-md'>{data.content}</h2>
                  </div>
                </div>
              ))
            }
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work