import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='bg-[#56B280] text-white font-medium text-[20px] rounded px-[44px] py-[8px] hover:bg-[#006c31]'>
            {props.name}
        </button>
    </div>
  )
}

export default Button

