import React from 'react'
import circle from '../../assets/CheckCircle.svg'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='w-full grid place-items-center py-[90px]'>   
        <div>
            <img  src ={circle} alt=''/>
        </div>
        <div className='text-center'>
              <h1 className='text-[26px] font-medium mt-[20px]'>Payment Confirmed</h1>
              <p className='text-14px text-[#56B280]'>ORDER #2039</p>
        </div>
        <div className='text-center text-[14px] text-[#818181] md:w-[540px] mt-[30px]'>
            <p>
            Thank you Joe for buying Candleaf. 
            The nature is grateful to you. 
            Now that your order is confirmed it will be ready to ship in 2 days. 
            Please check your inbox in the future for your order updates.
            </p>
        </div>
       <Link to='/' className='mt-[50px]'>
             <Button name='Back to shopping'/>
       </Link>
       <p className='text-[#56B280] underline mt-[30px]'>Print receipt</p>
       
      
    </div>
  )
}

export default Message
