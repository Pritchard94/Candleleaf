import React from 'react'
import logo from '../assets/mainlogo.svg'
import { NavLink } from 'react-router-dom'
import {FiUser} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import {GrClose} from 'react-icons/gr'

const Header = () => {
    const Navigation = [
        {names:'Discovery', href:'/Discovery'},
        {names:'About', href:'/About'},
        {names:'Contact us', href:'/Contact'}
    ]
    const [open, setOpen] = useState(true)
    const burger = ()=>{
        setOpen(!open)
    }
 
  return (
    <div className='w-full fixed h-fit z-30 bg-[#FFFFFF]  md:px-[90px]'>
        <div className='flex items-center justify-between px-[30px] py-[20px] '>
            <div className='md:hidden' onClick={burger}>
                {open? <AiOutlineMenu size={25}/> : <GrClose size={25}/>}
            </div>
            <a href='/'><img src={logo} alt='mainlogo'/></a>
            
            <div className='hidden md:flex space-x-[40px]'>
                { Navigation.map((items)=>(
                    <NavLink
                        key={items.names}
                        to={items.href}
                        className={({isActive})=>{
                            return(
                                'md:text-[16px] text-[#272727] ' +
                                (isActive ? 'text-[#56B280]' : 'hover:text-[#56B280]')
                            );
                        }}
                    >
                        {items.names}
                    </NavLink>
                ))}
            </div>
            <div className='flex space-x-[25px]'>
                <FiUser size={25} />
                <AiOutlineShoppingCart size={25} />
            </div>
        </div>
                    {/* dropdown */}
                    <div className={!open ? 'fixed grid top-[55px] px-[40px] -z-10 w-full bg-white py-7 space-y-[40px] duration-200 ease-in-out': 'fixed -top-[100%]'}>
                        { Navigation.map((items)=>(
                            <NavLink
                                key={items.names}
                                to={items.href}
                                className={({isActive})=>{
                                    return(
                                        'md:text-[16px] text-[#272727] ' +
                                        (isActive ? 'text-[#56B280]' : 'hover:text-[#56B280]')
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

export default Header
