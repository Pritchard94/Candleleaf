import React from 'react'
import Head from '../Components/Authentication/Head'
import Nav from '../Components/Authentication/Nav'
import Message from '../Components/Authentication/Message'

const Thankyou = () => {
  return (
    <div className='bg-white px-[30px] py-[20px] md:pb-[90px] md:px-[90px]'>
        <Head/>
        <Nav/>
        <Message/>
      
    </div>
  )
}

export default Thankyou
