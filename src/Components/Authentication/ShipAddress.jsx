import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../Button'


const ShipAddress = () => {
  return (
    <div className='w-full mt-[46px] pb-[90px]'>
        <div className='grid md:w-fit border-[2px] border-gray-100 rounded-xl px-[20px]'>
            <div className='flex py-[20px] items-center border-b-[1px] border-[#53b27f70] justify-between'>
                <div className='flex space-x-3'>
                    <h1 className='text-[14px] text-[#818181]'>Contact:</h1>
                    <p className='text-[14px]'>joe.spagnuolo@uxbly.com</p>
                </div>
                <Link to='/details'>
                    <h1 className='text-[#53B280]'>Edit</h1>
                </Link>
            </div>

            <div className='flex py-[20px] items-center justify-between'>
                <div className='flex'>
                    <h1 className='text-[14px] text-[#818181]'>Ship to:</h1>
                    <p className=' font-normal- text-[14px]'>Via Firenze 23, 92023, Campobello di  Licata AG, Italia</p>
                </div>
                <Link to='/details'>
                    <h1 className='text-[#56B280]'>Edit</h1>
                </Link>
            </div>
        </div>

        <div className='mt-[40px]'>
            <h1 className='text-[20px] mb-[23px] font-medium'>Shipping Method</h1>
            <div className='flex justify-between border-[2px]  border-gray-100 rounded-xl p-[15px] items-center'>
                <div className=' flex space-x-4 items-center'>
                    <input type='radio' className=' accent-[#56B280] outline-none' />
                    <p >Standard Shipping</p>
                </div>
                <h1 className='font-medium'>Free</h1> 
            </div>
        </div>
        <div className='grid text-center md:flex gap-4 items-center md:justify-between mt-[50px]'>
            <Link to='/details'>
                <p className='text-[18px] text-[#56B280] underline'>Back to details</p>
            </Link>
            <Link to='/payment'>
                    <Button  name='Go to Payment' />
            </Link>
        </div>
      
           
    </div>
  )
}

export default ShipAddress
