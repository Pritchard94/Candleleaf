import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import data from '../../Components/Data'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        <div className="mt-[30px] md:block hidden">
              <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {test?.map((items)=>(
          <SwiperSlide>
            <div className='w-[350px] text-center  h-[295px] bg-white p-2 rounded-lg'>
               <div className='grid place-items-center space-y-3'>
                <img src={items.Profile} alt='profile'/>
                <img src={items.Image} alt='star'/>
                <p className='text-[22px]'>{items.Comment}</p>
                <p className='text-[18px] text-[#7C8087]'>{items.Name}</p>
               </div>
             </div>

      </SwiperSlide>
      ))}
    </Swiper>
          
          {/* {test?.map((items)=>(
            
            <div className='w-[350px] h-[295px] bg-white p-2 rounded-lg'>
               <div className='grid place-items-center space-y-3'>
                <img src={items.Profile} alt='profile'/>
                <img src={items.Image} alt='star'/>
                <p className='text-[22px]'>{items.Comment}</p>
                <p className='text-[18px] text-[#7C8087]'>{items.Name}</p>
               </div>
             </div>
          ))} */}
        </div>
        <div className="mt-[30px] md:hidden">
                  <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
          pagination={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay,Pagination]}
        >
          {test?.map((items)=>(
              <SwiperSlide className=" flex justify-center">
                <div className='w-[350px] text-center  h-[295px] bg-white p-2 rounded-lg'>
                  <div className='grid place-items-center space-y-3'>
                    <img src={items.Profile} alt='profile'/>
                    <img src={items.Image} alt='star'/>
                    <p className='text-[22px]'>{items.Comment}</p>
                    <p className='text-[18px] text-[#7C8087]'>{items.Name}</p>
                  </div>
                </div>

          </SwiperSlide>
          ))}
        </Swiper>
        </div>
     
    </div>
  )
}

export default Testimonial
