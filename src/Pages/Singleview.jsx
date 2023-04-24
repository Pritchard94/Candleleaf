import Data from '../Components/Data'
import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import cartContext from "../Context/Cart/cartContext";



const Singleview = () => {
    const { addToCart } = useContext(cartContext);
    const [item, setItem] = useState({})
    let {id} = useParams()
    useEffect(()=>{
        let Post = Data.filter((data) =>{
            return data.id == id;
         })
         setItem(Post[0])
    },[])

    const [count, setCount] = useState(0)
    const plusHandler = ()=>{
        setCount(count + 1)
    }
    const minusHandler = ()=>{
        setCount(count - 1)
        if (count == 0){
            setCount(0)
        }
    }
  return (
    <div className='w-full md:px-[40px] py-[130px] px-[15px] '>
        <div className='grid md:grid-cols-2' >
            <div>
                <h1 className='text-[26px] md:hidden mb-[20px]'>{item.Name}®</h1>
                <div className='grid md:w-[540px] md:h-[433px] bg-gray-50'>
                    <img className='w-full' src={item.Image} alt={item.Name}/>
                </div>
                <h1 className='text-[20px] md:w-[540px] text-center'>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</h1>
                <p className='text-center md:w-[540px] text-[20px] text-[#56B280] mt-[20px] mb-[20px]'>🚚 FREE SHIPPING</p>
            </div>
            <div className='grid'>
                <div>
                    <h1 className='text-[26px] md:mb-[15px] hidden md:block'>{item.Name}®</h1>

                    <div className='grid md:grid-cols-3 '>
                        <div className=' col-span-1' >
                            <p className='text-[26px] text-[#56B280] md:mb-[23px]'>${item.Price}</p>
                            <div>
                                <p>Quantity</p>
                                <div className='border-[1px] border-[#56B280] flex w-fit space-x-3 px-2 mt-[6px] py-1'>
                                    <button onClick={plusHandler} className='text-[#56B280]'>+</button>
                                    <p>{count}</p>
                                    <button onClick={minusHandler} className='text-[#56B280]'>-</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                             <div className='flex mb-[18px] p-4 '>
                                <input className='accent-[#56B280] border-none outline-none p-3' type="radio"/>
                                <p className='ml-[15px] text-[16px]'>One time Purchase</p>
                            </div>
                            <div className='w-fit border-[1px] border-gray-300 rounded-lg p-4'>
                                <div className='flex items-center space-x-5'>
                                    <input className='accent-[#56B280] border-none outline-none p-3' type='radio'/>
                                    <p className='text-[16px]'>Subscribe and Delivery</p>
                                    <select className='border 2 border-gray-400 p-1 outline-none'>
                                        <option>4 weeks</option>
                                        <option>6 weeks</option>
                                        <option>8 weeks</option>
                                    </select>
                                </div>
                                <p className='text-[14px] text-[#656565] mt-[7px]'>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details</p>
                            </div>
                            
                            <button  onClick={() => addToCart(item)} className='bg-[#56B280] flex items-center justify-center mt-[67px] text-white  w-full text-[20px] rounded px-[44px] py-[8px] hover:bg-[#006c31]'>
                                <AiOutlineShoppingCart/> + Add to cart
                            </button>
                        
                            
                        </div>

                    </div>

                <div className='mt-[40px] border-[1px] border-gray-300  space-y-3 p-4 rounded-md'>
                    <p><b>Wax:</b>{item.Wax}</p>
                    <p><b>Fragrance:</b>{item.Fragrance}</p>
                  <div className='grid md:grid-cols-3 md:space-x-4'>
                    <p className='text-[15px] font-normal'><b>Burning Hours:</b>{item.Burning}</p>
                    <p className='text-[15px] font-normal'><b>Dimension:</b>{item.Dimension}</p>
                    <p className='text-[15px] font-normal'><b>Weight:</b>{item.Weight}</p>

                  </div>
                </div>
                </div>


            </div>
        </div>

        
      
    </div>
  )
}

export default Singleview
