import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQuantity, addToCart } from '../../slice/cartSlice';

const Card =(props) => {
  const currentCart = useSelector(state=>state.cart.currentCart);
  console.log('currentCart', currentCart);
  const dispatch = useDispatch();

  return(
    <div className='p-2 w-48 h-72 flex flex-col justify-center items-center bg-gray-400/15 mr-5 mb-5'>
      <div className="">
        <img 
          src={props.img_url}
          className="border-solid w-32 h-32"
          alt='product_url'
        />
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-red-400 py-1'>title:{props.title}</p>
        <p className='py-1'>price:{props.price}</p>
        <p className='py-1'>quantity:{props.quantity}</p>
        <div className='flex justify-center'>
        <button className='px-4 py-1 text-2xl rounded-md bg-cyan-400' onClick={()=>{dispatch(addToCart(props.information))}}>Add to cart</button>
        </div>        
      </div>
    </div>
  )
}

export default Card;