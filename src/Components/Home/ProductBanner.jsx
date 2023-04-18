import React from 'react'
import tick from '../../assets/tick.svg'
import Button from '../Button'
import mockup from '../../assets/mockup.svg'

const ProductBanner = () => {
  return (
    <div className='w-full py-[50px] md:py-[90px] md:px-[90px] px-[15px] bg-[#F7F8FA]'>
                <h2 className='text-[40px] font-medium text-[#1D252C] md:w-[350px] text-center md:text-left'>Clean and fragrant soy wax</h2>
                <p className='text-[16px] text-[#56B280] mb-[20px] text-center md:text-left'>Made for your home and for your wellness</p>
            <div className='grid md:grid-cols-2 items-center'>
                <div>
                    <div className='flex items-center mb-[10px] tracking-wide'>
                        <img src={tick} alt='tick'/>
                        <p className='ml-[10px] text-[16px]'><b>Eco-sustainable:</b>All recyclable materials, 0% CO2 emissions</p>
                    </div>
                    <div className='flex items-center mb-[10px] tracking-wide'>
                        <img src={tick} alt='tick'/>
                        <p className='ml-[10px] text-[16px] '><b>Hyphoallergenic:</b> 100% natural, human friendly ingredients </p>
                    </div>
                    <div className='flex items-center mb-[10px] tracking-wide'>
                        <img src={tick} alt='tick'/>
                        <p className='ml-[10px] text-[16px] '><b>Handmade:</b> All candles are craftly made with love.</p>
                    </div>
                    <div className='flex items-center mb-[70px] tracking-wide'>
                        <img src={tick} alt='tick'/>
                        <p className='ml-[10px] text-[16px] '><b>Long burning:</b> No more waste. Created for last long.</p>
                    </div>
                    <div className='text-center md:text-left'>
                        <Button name='Learn More'/>
                    </div>
                </div>
                <div className='order-first md:order-last'>
                    <img src={mockup} alt='mockup'/>

                </div>

        </div>
      
    </div>
  )
}

export default ProductBanner
