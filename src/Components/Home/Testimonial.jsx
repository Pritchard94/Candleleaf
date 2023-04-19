import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from '../../Components/Data'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import Cards from "../Cards";

const Testimonial = () => {
    const [test, setTest] = useState()
    useEffect(()=>{
      setTest(
        data.filter((data)=>{
          return data.Category == 'Testimonial';
        })
      );

    },[]);

  return (
    <div className='bg-[#56b27f40] py-[50px] md:px-[90px] px-[15px]'>
        <h1 className='text-[40px] text-[#0B254B] text-center'>Testimonials</h1>
        <p className='text-[18px] text-[#5E6E89] text-center'>Some quotes from our happy customers</p>
        <div className="mt-[30px] grid md:grid-cols-3 gap-10 justify-center text-center">
          {test?.map((items)=>(
               <div className='w-[350px] bg-white p-2 rounded-lg'>
               <div className='grid place-items-center space-y-3'>
                 <img src={items.Profile} alt='profile'/>
                <img src={items.Image} alt='star'/>
                <p className='text-[22px]'>{items.Comment}</p>
                <p className='text-[18px] text-[#7C8087]'>{items.Name}</p>
               </div>
                
         
             </div>
          ))}
          
        </div>
        

      
    </div>
  )
}

export default Testimonial
