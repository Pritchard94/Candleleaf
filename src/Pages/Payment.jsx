import React from 'react'
import PaymentDetails from '../Components/Authentication/PaymentDetails'
import Nav from '../Components/Authentication/Nav'
import Head from '../Components/Authentication/Head'
import CartBanner from '../Components/Cart/CartBanner'

const Payment = () => {
  return (
    <div className='w-full'>
        <div className='grid md:grid-cols-2'>
            <div className='bg-white px-[30px] py-[20px] md:pb-[90px] md:px-[90px]'>
                <Head/>
                <Nav/>
                <PaymentDetails/>
              

            </div>
            <div className='bg-[#F2F2F2] px-[30px] py-[20px] md:pb-[90px] md:px-[20px]'>
              <CartBanner/>

            </div>

        </div>
      
    </div>
  )
}

export default Payment
