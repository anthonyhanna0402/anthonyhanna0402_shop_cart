import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import Dropdown from '../components/dropDown/Dropdown';
import { useSelector } from 'react-redux';

const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen((prev)=>!prev);
  }

  const currentCart = useSelector((state)=> state.cart.currentCart);
  const totalItems = currentCart.length;
  return(
    <React.Fragment>
      <div>
      <div className="container mx-auto flex justify-between items-center px-20 py-8">
          <button><h1 className='text-cyan-400 text-3xl font-bold'>shop</h1></button>
          <button className="xl:hidden text-white focus:outline-none" id="menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="hidden xl:flex">
          <div class="hidden xl:flex xl:items-center">
            <Link to="/" className='text-2xl mr-6'>Home</Link>
            <Link to="/about" className='text-2xl mr-12'>About</Link>
            <Link className='text-2xl mr-12 relative' onMouseEnter={toggleDropdown}><FontAwesomeIcon icon={faCartShopping} /><sup>{totalItems}</sup></Link>
            {isDropdownOpen && (
              <div
                className='absolute right-3 top-12 w-96 bg-white z-50'
                onMouseLeave={toggleDropdown}
              >
              <Dropdown />
              </div>
            )}
          </div>
            <Button type="type1" value="Login" />
            <Button type="type1" value="SignUp" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;
