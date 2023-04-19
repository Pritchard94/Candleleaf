import React from 'react'
import data from '../Data.jsx'
import Button from '../Button.jsx'
import { Link} from 'react-router-dom'
import { useEffect, useState } from 'react'


const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      setProduct(
        data.filter((data) => {
          return data.Category == "Product";
        })
      );
    }, []);
    
      return (
    <div className='w-full py-[50px] md:py-[90px] md:px-[90px] px-[15px]'>
        <h1 className='text-[50px] text-center font-medium'>Products</h1>
        <p className='text-[18px] text-center mb-[30px] text-[#5E6E89]'>Order it for you or for your beloved ones </p>
        <div className='grid md:grid-cols-4 place-items-center gap-5'>
            {product?.map((items)=>(
                <Link to ={`productdetails/ ${items.id}`} key={items.id}>
                <div className='rounded-sm shadow-sm shadow-gray-200 hover:shadow-emerald-800 hover:shadow-sm cursor-pointer' >
                    <img className='bg-gray-50' src={items.Image} alt='spicedmint'/>
                    <div className='py-[10px] px-[26px] grid'>
                        <p className='text-[16px]'>{items.Name}</p>
                        <p className=' text-end text-[#56B280]'>{items.Price}$</p>
                       
                    </div>
                </div>
            </Link>
            ))}
        </div>
        <div className=' md:hidden mt-[54px] text-center'>
            <Button name='See More'/>

        </div>

            
    </div>
  )
}

export default Products
