import React from 'react'
import per1 from '../../assets/per1.jpg'
import per2 from '../../assets/per2.jpg'
import per3 from '../../assets/per3.jpg'
import per4 from '../../assets/per4.jpg'
import per5 from '../../assets/per5.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";

const details = [
  {
    id: 1,
    img: per1,
    name: "Cory Zamora",
    work: "Marketing Specialist",
    content: "Etiam porta sem magna malesuada mollis.",
    social: [
      <FaLinkedin className="text-[#062b55]" />,
      <FaTwitter className="text-[#5DAED5]"/>,
      <TiSocialDribbble className="text-[#a0030b]" />
    ],
  },
  {
    id: 2,
    img: per2,
    name: "Coriss ambady",
    work: "Financial analyst",
    content: "Aenean eu lea quam Pellentesque ornare.",
    social: [
      <FaLinkedin className="text-[#062b55]" />,
      <FaTwitter className="text-[#5DAED5]"/>,
      <TiSocialDribbble className="text-[#a0030b]" />
    ],
  },
  {
    id: 3,
    img: per3,
    name: "nikolas brooten",
    work: "sales manager",
    content: "Donec oranare elit quam porta gramvi at eget.",
    social: [
      <FaLinkedin className="text-[#062b55]" />,
      <FaTwitter className="text-[#5DAED5]"/>,
      <TiSocialDribbble className="text-[#a0030b]" />
    ],
  },
  {
    id: 4,
    img: per4,
    name: "jackie sanders",
    work: "investment planner",
    content: "Nullam risus eget uran mollis ornare vel eu leo.",
    social: [
      <FaLinkedin className="text-[#062b55]" />,
      <FaTwitter className="text-[#5DAED5]"/>,
      <TiSocialDribbble className="text-[#a0030b]" />
    ],
  },
  {
    id: 5,
    img: per5,
    name: "Tina Geller",
    work: "assistant buyer",
    content: "Vivamus sagittis lacus vle aurges lorsdes.",
    social: [
      <FaLinkedin className="text-[#062b55]" />,
      <FaTwitter className="text-[#5DAED5]"/>,
      <TiSocialDribbble className="text-[#a0030b]" />
    ],
  },
  

];

const Specialist = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row max-w-[1100px] mx-auto px-5 items-center gap-10 my-30 ">
        {/* Left side */}
        <div className="flex flex-col justify-start gap-5 text-justify sm:pl-10 lg:max-w-[400px]">
          <h2 className="text-xl text-textColor">Meet the Team</h2>
          <h1 className="text-secondary text-3xl sm:text-4xl font-ser text-start">
            Save your time and money by choosing our professional team.
          </h1>
          <h2 className="text-textColor text-md">
            Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros tempus porttitor.
          </h2>
          <button className="text-white bg-primary px-7 py-2 capitalize rounded-full cursor-pointer hover:-translate-y-1 duration-300 border-2 border-primary w-[200px]">
            See All Members
          </button>
        </div>

        {/* Right */}
        <div className='w-[400px] sm:w-[500px] lg:w-[650px] md:w-[600px] '>
          <Slider {...settings}>
            {details.map((data, ind) => (
              <div key={data.id} className="text-center p-5 w-[150px] ">
                <img src={data.img} alt={data.name} className="mx-auto w-[200px] rounded-full" />
                <div className=""> 
                  <h1 className="mt-3 font-bold text-secondary text-2xl capitalize">{data.name}</h1>
                  <h2 className="text-[13px] text-gray-500 uppercase font-bold">{data.work}</h2>
                  <p className="mt-2 text-gray-600">{data.content}</p>
                  <div className="flex justify-center gap-3 mt-3">
                    {data.social.map((icon, index) => (
                      <span key={index} className="cursor-pointer hover:-translate-y-1 duration-300 text-2xl">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
