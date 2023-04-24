import React from 'react'
import Head from '../Components/Authentication/Head'
import Nav from '../Components/Authentication/Nav'
import DetailForm from '../Components/Authentication/DetailForm'
import Shipping from '../Components/Authentication/Shipping'
import CartBanner from '../Components/Cart/CartBanner'
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

const Details = () => {
  return (
    <div className='w-full'>
        <div className='grid md:grid-cols-2'>
            <div className='bg-white px-[30px] py-[20px] md:pb-[90px] md:px-[90px]'>
                <Head/>
                <Nav/>
                <DetailForm/>
                <Shipping/>

            </div>
            <div className='bg-[#F2F2F2] px-[30px] py-[20px] md:pb-[90px] md:px-[20px]'>
              <CartBanner/>

            </div>

        </div>
       
    </div>
  )
}

export default Details
