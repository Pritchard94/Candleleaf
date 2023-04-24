import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../Button'
import Creditcard from '../../assets/CreditCardFill.svg'
import {AiFillLock} from 'react-icons/ai'
import {BsInfoSquareFill} from 'react-icons/bs'

const PaymentDetails = () => {
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
            <div className='flex py-[20px] items-center border-t-[1px] border-[#53b27f70] justify-between'>
                <div className='flex space-x-3'>
                    <h1 className='text-[14px] text-[#818181]'>Method:</h1>
                    <p className='text-[14px]'>Standard Shipping - FREE</p>
                </div>
                <Link to='/details'>
                    <h1 className='text-[#53B280]'>Edit</h1>
                </Link>
            </div>
        </div>

        <div className='mt-[40px]'>
            <h1 className='text-[20px] mb-[23px] font-medium'>Payment Method</h1>
            <div className=' border-[2px]  border-gray-100 rounded-xl  items-center'>
                <div className=' flex space-x-4 items-center p-[10px] bg-[#5eca8f46]'>
                    <img src={Creditcard} alr='card'/>
                    <p className='text-[#53B280] font-medium' >Credit Card</p>
                </div>
                <div className='p-[15px]'>
                    <div className='relative'>
                        <div className='absolute top-[20%] right-[5%]'><AiFillLock/></div>
                         <input type='text'placeholder='Card Number' className='border-[1px] w-full p-2 mb-4'/>
                    </div>
                    <input type='text'placeholder="Holder's Name" className='border-[1px] w-full p-2 mb-4'/>
                    <div className='flex justify-between space-x-5'>
                        <input type='text'placeholder="Expiration(MM/YY)" className='border-[1px] w-full p-2 mb-4'/>
                        <div className='relative'>
                            <div className='absolute top-[20%] right-[15%]'>
                                <BsInfoSquareFill/>
                            </div>
                            <input type='text'placeholder="CVV" className='border-[1px] w-full p-2 mb-4'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[40px]'>
                <h1 className='text-[20px] mb-[23px] font-medium'>Tax Informations</h1>
                <input type='text'placeholder='VAT Number (optional)' className='border-[1px] w-full p-2 mb-4'/>
                <input type='text'placeholder='PEC (optional)' className='border-[1px] w-full p-2 mb-4'/>   
            </div>


            <div className='mt-[40px] w-full'>
                     <h1 className='text-[20px] mb-[23px] font-medium'>Billing Address</h1>

                    <div className='grid  border-[2px] border-gray-100 rounded-xl px-[20px] '>
                            <div className='flex py-[20px] items-center border-b-[1px] border-[#53b27f70] justify-between'>
                                <div className='flex space-x-3'>
                                    <input type='radio' className=' accent-[#56B280]'/>
                                    <p className='text-[14px]'>Same as the Shipping address</p>
                                </div>
                            </div>

                            <div className='flex py-[20px] items-center justify-between'>
                                <div className='flex space-x-3'>
                                    <input type='radio' className=' accent-[#56B280]'/>
                                    <p className='text-[14px]'>Use a different address for billing</p>
                                </div>
                            </div>
                      </div>
            </div>
         
        </div>
        <div className='grid text-center md:flex gap-4 items-center md:justify-between mt-[50px]'>
            <Link to='/shipping'>
                <p className='text-[18px] text-[#56B280] underline'>Back to shipping</p>
            </Link>
            <Link to='/thankyou'>
                    <Button  name='Pay Now' />
            </Link>
        </div>
      
           
    </div>
  )
}

export default PaymentDetails
