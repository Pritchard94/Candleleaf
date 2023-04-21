import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const Navigation = [
        {names:'Cart', href:'/cart'},
        {names:'>', href:'/'},
        {names:'Details', href:'/details'},
        {names:'>', href:'/'},
        {names:'Shipping', href:'/shipping'},
        {names:'>', href:'/'},
        {names:'Payment', href:'/payment'}
    ]

  return (
    <div className='mt-[20px]'>
        <div className='flex md:flex space-x-[15px]'>
                { Navigation.map((items)=>(
                    <NavLink
                        key={items.names}
                        to={items.href}
                        className={({isActive})=>{
                            return(
                                'md:text-[16px] text-[#272727] ' +
                                (isActive ? 'text-black font-bold' : 'hover:text-[#56B280]')
                            );
                        }}
                    >
                        {items.names}
                    </NavLink>
                ))}
            </div>
      
    </div>
  )
}

export default Nav
