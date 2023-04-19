import React from 'react'
import { useState, useEffect } from 'react'
import data from '../../Components/Data'
import {Link} from "react-router-dom"

const Popular = () => {
    const [pop, setPop] = useState()
    useEffect(()=>{
        setPop(
            data.filter((data)=>{
                return data.Popular == "Yes";
            })
        );
    },[]);

  return (
    <div className='py-[50px] md:px-[90px] px-[15px] w-full bg-white text-center'>
        <h1 className='text-[40px] text-[#0B254B] font-medium'>Popular</h1>
        <p className='text-[18px] text-[#5E6E89] font-medium'>Our top selling product that you may like</p>
        
        <div className='grid md:grid-cols-4 gap-10 mt-[30px]'>
            {pop ?.map((items)=>(
                <Link to ={`productdetails/ ${items.id}`} key={items.id}>
                       <div className='rounded-sm shadow-sm shadow-gray-200 hover:scale-110 hover:border-b-[3px] hover:border-emerald-800 duration-300 ease-in-out hover:shadow-sm cursor-pointer' >
                            <img className='bg-gray-50 w-full' src={items.Image} alt='spicedmint'/>
                            <div className='py-[10px] px-[26px] grid'>
                                <p className='text-[16px]'>{items.Name}</p>
                                <p className=' text-end text-[#56B280]'>{items.Price}$</p>
                   
                            </div>
                        </div>
                </Link>
             
            ))}

        </div>
        
      
    </div>
  )
}

export default Popular
