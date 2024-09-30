import React from 'react';
import Header from '../layout/Header';
import Card from '../components/common/Card/Card';
import products from '../products/products';
import Category from '../components/category/Category';
const Home =() => {
  return(
    <React.Fragment>
      <Header />
      <div className='flex'>
        <div className='w-1/6'>
          <Category />
        </div>
        <div className='w-5/6'>
          <div className='flex flex-wrap'>
            {products.map(item=>(
              <Card img_url={item.img} title={item.name} price={item.price} quantity={item.quantity} information={item} />
            ))}
          </div>
        </div>      
      </div>
    </React.Fragment>
  )
}

export default Home;