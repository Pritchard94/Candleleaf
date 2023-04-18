import React from 'react'
import footerlogo from '../assets/footer.svg'

const Footer = () => {
  return (
    <div className='w-full md:px-[90px] px-[15px] py-[40px] bg-[#272727]'>
        <div className='grid md:grid-cols-3 gap-[60px] border-t-[1px] border-white items-center'>
            <div className='md:col-span-1'>
                <img src={footerlogo} alt='footer'/>
                <p className='text-[16px] text-white'>Your natural candle made for your home and for your wellness.</p>
            </div>

            <div className='grid md:grid-cols-3 col-span-2 md:mt-[43px] '>
                <div className=''>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Discovery</p>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>New season</p>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Most Searched</p>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Most Selled</p>
                </div>

                <div className=' '> 
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>About</p>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Help</p>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Shipping</p>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Affiliate</p>
                </div>

                <div className=' '>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Info</p>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Contact us</p>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Privacy Policies</p>
                    <p className='text-[#E1E1E1] mb-[15px] hover:text-green-400 cursor-pointer'>Terms & Conditions</p>
                </div>
                
            </div>



        </div>
      
    </div>
  )
}

export default Footer
