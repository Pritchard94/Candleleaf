import React from 'react'
import Head from '../Components/Authentication/Head'
import Nav from '../Components/Authentication/Nav'
import ShipAddress from '../Components/Authentication/ShipAddress'

const Shipping = () => {
  return (
    <div className='w-full'>
        <div className='grid md:grid-cols-2'>
            <div className='bg-white px-[30px] py-[20px] md:pb-[90px] md:px-[90px]'>
                <Head/>
                <Nav/>
                <ShipAddress/>
              

            </div>
            <div className='bg-[#F2F2F2] px-[30px] py-[20px] md:pb-[90px] md:px-[90px]'>

            </div>

        </div>
      
    </div>
  )
}

export default Shipping
