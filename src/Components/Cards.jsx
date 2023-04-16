import React from 'react'

const Cards = (props) => {
  return (
    <div className='w-fit'>
        <div className='grid'>
            <img className='bg-gray-100' src={props.Image} alt='spicedmint'/>
            <div className='py-[10px] px-[26px] grid'>
                <p className='text-[16px]'>{props.Name}</p>
                <p className=' text-end text-[#56B280]'>{props.Price}$</p>

            </div>
        </div>
    </div>
  )
}

export default Cards
