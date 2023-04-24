import {React, useContext} from 'react'
import Header from '../Components/Header'
import CartContext from "../Context/Cart/cartContext";
import {Link} from 'react-router-dom'
import Button from '../Components/Button';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

const Cart = () => {
  const {removeItem, cartItems } = useContext(CartContext);
  const total = cartItems.reduce((acc, items) => acc + items.Price, 0)
  return (
    <div className='w-full'>
      <Header/>
      <div className='pt-[100px] px-[15px] pb-[90px] md:px-[90px]'>
        { cartItems.length == 0 ? 
        (<div className='text-center'>
           <h1 className='text-[26px] font-medium mb-3'>Your Cart is Empty</h1>
           <Link to='/'>
            <p className='text-[18px] text-[#56B280] underline'>Back to Shopping</p>
           </Link>
          </div>):( 
            <div>
              <div className='text-center'>
                  <h1 className='text-[26px] font-medium mb-3'>Your Cart items</h1>
                  <Link to='/'>
                      <p className='text-[18px] text-[#56B280] underline'>Back to Shopping</p>
                   </Link>
               </div>

               <div className='flex items-center pb-5  border-b-[2px]  justify-between mt-[50px]'>
                    <p className='font-medium'>Product</p>
                    <p className='font-medium'>Price</p>
                   
                </div>

              {cartItems.map((items)=>(
                <div key={uuidv4()} className='pb-[30px] border-b-[1px]'>
                 
                  <div className='flex justify-between items-center mt-[20px]'>
                    <div className='flex space-x-2'>
                      <div className='w-[120px]'>
                        <img className='w-full' src={items.Image} alt={items.Name}/>
                      </div>
                      <div>
                        <h1 className='text-[20px] font-medium'>{items.Name}</h1>
                        <h1  className='text-[20px] font-medium'>Candleaf®</h1>
                        <button className='underline mt-[40px] text-[#56B280]'onClick={()=>removeItem(id)}>Remove</button>
                      </div>
                    </div>
                    
                    <div>
                      <p>${items.Price}</p>
                    </div>
                    
  
                  </div> 
                </div>
              ))}
              </div>
          ) }

            {cartItems.length > 0 ? (
              <div className='grid md:flex items-center md:space-x-7 md:justify-end mt-6'>
              <div>
                <div className='text-center items-center justify-between mb-3 flex'>
                  <h1 className='text-[20px] font-medium'>Sub-Total:</h1>
                  <h1 className='text-[20px] font-medium text-end'>${total}</h1>
              </div>
              <p className='text-[16px] text-gray-400'>Tax and shipping cost will be calculated later</p>
              </div>
  
              <div className='mt-[30px] md:mt-[0px]'>
                <Link to='/details'>
                  <Button name="Check-out"/>
                </Link>
              </div>
            </div>
            ) : ''}

          
          
      </div>
      
    </div>
  )
}

export default Cart
