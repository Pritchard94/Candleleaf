import {React, useContext} from 'react'
import cartContext from "../../Context/Cart/cartContext"
import {Link} from 'react-router-dom'
import Button from '../../Components/Button';

const CartBanner = () => {
    const { showCart,removeItem, cartItems, showHideCart } = useContext(cartContext);
    const total = cartItems.reduce((acc, items) => acc + items.Price, 0)
  return (
    <div>
        <div className=''>
      
               <div className='flex items-center pb-5  border-b-[2px]  justify-between mt-[50px]'>
                    <p className='font-medium'>Product</p>
                    <p className='font-medium'>Price</p>
                   
                </div>

              {cartItems.map((items)=>(
                <div key={items.id} className='pb-[30px] border-b-[1px]'>
                 
                  <div className='flex justify-between items-center mt-[20px]'>
                    <div className='flex space-x-2'>
                      <div className='w-[120px]'>
                        <img className='w-full' src={items.Image} alt={items.Name}/>
                      </div>
                      <div>
                        <h1 className='text-[20px] font-medium'>{items.Name}</h1>
                        <h1  className='text-[20px] font-medium'>Candleaf®</h1>
                      </div>
                    </div>
                    
                    <div>
                      <p>${items.Price}</p>
                    </div>
                    
  
                  </div> 
                </div>
              ))}
              </div>

           
              <div className='grid md:flex items-center md:space-x-7 md:justify-end mt-6'>
                <div>
                        <div className='text-center items-center justify-between mb-3 flex'>
                            <h1 className='text-[20px] font-medium'>Sub-Total:</h1>
                            <h1 className='text-[20px] font-medium text-end'>${total}</h1>
                        </div>
                        <div className='text-center items-center justify-between mb-3 flex'>
                            <h1 className='text-[16px] text-gray-400 '>Shipping:</h1>
                            <h1 className='text-[16px] text-gray-400 text-end'>Calculated at next step</h1>
                        </div>

                        <p className='text-[16px] text-gray-400'>Tax and shipping cost will be calculated later</p>
                </div>
            </div>
                  
    </div>
  )
}

export default CartBanner
