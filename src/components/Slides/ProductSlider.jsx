import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import m1 from "../../assets/m1.jpg"
import m2 from "../../assets/m2.jpg"
import m3 from "../../assets/m3.jpg"
import m4 from "../../assets/m4.jpg"
import m5 from "../../assets/m5.jpg"
import m6 from "../../assets/m6.jpg"
import m7 from "../../assets/m7.jpg"

const imgs=[{img:m1},{img:m2},{img:m3},{img:m4},{img:m5},{img:m6},{img:m7}]
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/50 text-gray-400 hover:bg-white/80 duration-200 p-4 rounded-full  transition-all"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/50 text-gray-400 hover:bg-white/80 duration-200 p-4 rounded-full  transition-all"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);
const ProductSlider = () => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />,  
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div>
        <div className='px-5'>
          
            <div className="">
                  {/* head */}
                <div className="text-center flex flex-col items-center gap-5 mb-10">
                    <h2 className='text-textColor text-xl uppercase'>What We Do?</h2>
                    <h1 className='font-ser text-secondary text-3xl sm:text-4xl md:text-5xl max-w-[850px]'>
                        The service we offer is specifically designed to meet your needs.
                    </h1>
                </div>
                {/* slider */}
                <div className="">
                    <Slider {...settings}>
                       {
                        imgs.map((data,ind)=>(
                            <div key={ind} className='p-5 '>
                                <img src={data.img} alt="" className='rounded-lg'/>
                            </div>
                        ))
                       }
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSlider