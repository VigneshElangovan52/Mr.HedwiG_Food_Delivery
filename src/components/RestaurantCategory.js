import React, { useState } from 'react';
import CategoryItems from './CategoryItems';

const RestaurantCategory = ({data}) => {
    
    const [showItems, setShowItems] = useState(false);

    const dropDownHandler = () => {
        setShowItems(!showItems);
    }

    console.log(data,'qwertyuiop');

  return (
    <div className='text-center'>
        <div className = 'py-4 m-auto mb-2 w-1/2 border border-solid border-gray-400 rounded-lg shadow-2xl'>
        <div className=' flex justify-between cursor-pointer' onClick={dropDownHandler}>
        <span className='ml-3 font-semibold'>
            {data.title} ({data.itemCards.length})
          </span>
          <span className='mr-5'>⏬</span>
        </div>
        {showItems && <CategoryItems data = {data.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory