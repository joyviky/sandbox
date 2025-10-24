import React from 'react'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'
import p6 from '../../assets/p6.png'

const Partner = () => {
  return (
    <div className='my-5'>
       <div className="max-w-[1100px] mx-auto grid grid-cols-3 p-5 md:grid-cols-6 justify-between gap-10">
        <img src={p1} alt="" className="w-[150px]  h-[30px] "/>
        <img src={p2} alt="" className="w-[150px]  h-[30px] "/>
        <img src={p3} alt="" className="w-[150px]  h-[30px] "/>
        <img src={p4} alt="" className="w-[150px]  h-[30px] "/>
        <img src={p5} alt="" className="w-[150px]  h-[30px] "/>
        <img src={p6} alt="" className="w-[150px]  h-[30px] "/>
       </div>
    </div>
  )
}

export default Partner