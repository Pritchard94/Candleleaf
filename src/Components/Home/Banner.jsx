import React from 'react'
import background from '../../assets/bg-image.svg'
import Button from '../Button'



const Banner = () => {
  return (
    <div className='bg-cover py-[150px] px-[15px]' style={{
        backgroundImage:`url(${background})`
    }}>
       <div className='bg-[#f7f8fa87] mx-auto md:px-[95px] w-fit backdrop-blur-sm py-[43px] text-center rounded-md mt-[10px]'>
            <span className='text-[40px]'>🌱</span>
            <h1 className='text-[40px] font-medium'>The nature candle</h1>
            <p className='text-[18px] mb-[43px] mx-auto md:w-[537px]'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
            <Button name='Discover our Collection' />
           

       </div>
      
    </div>
  )
}

export default Banner
