import React from 'react';

const Button =(props) => {
  switch(props.type) {
    case 'type1':
      return(
        <button className='text-cyan-400 font-semibold bg-gray-400/15 text-lg py-1 rounded-lg mr-2 w-24'>
          {props.value}
        </button>
      );
      break;
    case 'type2':
      return(
        <button className='text-white px-6 py-5 rounded-2xl border-solid border-2 mr-4 border-cyan-400 text-sm hover:bg-cyan-400 font-bold md:text-xl xl:text-2xl'>
          {props.value}
        </button>
      );
      break;
    case 'type3':
      return(
        <button className='text-white px-7 py-2 md:px-24 md:py-3 xl:px-6 xl:py-4 rounded-lg md:rounded-2xl border-solid border-2 border-cyan-400 text-sm hover:bg-cyan-400 font-bold md:text-xl xl:text-2xl'>
          {props.value}
        </button>
      );
      break;
    case 'type4':
      return(
        <button className='text-gray-400 text-2xl hover:bg-gray-700 px-3 py-2 rounded hover:text-white hover:font-bold'>
          {props.value}
        </button>
      );
      break;
    case 'type5':
      return(
        <button className='text-white px-7 py-2 md:px-24 md:py-3 xl:px-6 xl:py-4 rounded-lg md:rounded-2xl border-solid border-2 border-cyan-400 text-sm hover:bg-cyan-400 font-bold md:text-xl xl:text-2xl'>
          {props.value}
        </button>
      );
      break;
    
  }
}

export default Button