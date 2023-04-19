import React from 'react'


const Cards = (props) => {
  return (
    <div className='w-[350px] bg-white p-2 rounded-lg'>
      <div className='grid place-items-center space-y-3'>
        <img src={props.Profile} alt='profile'/>
       <img src={props.Image} alt='star'/>
       <p className='text-[22px]'>{props.Comment}</p>
       <p className='text-[18px] text-[#7C8087]'>{props.Name}</p>
      </div>
       

    </div>
  )
}

export default Cards
