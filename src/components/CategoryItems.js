import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/CartSlice';

const CategoryItems = ({data}) => {
  console.log(data, "foodlist");

  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addItem(item));
    
  }

  const removeItemHandler = (item) => {
    dispatch(removeItem(item));
    
  }

  return (
    <div>
      {data.map((item) => (
        <div className='p-3 m-2 border-2 border-gray-500 shadow-lg flex justify-between rounded-lg'>
          <div className='text-left w-9/12' ><h1 className='font-semibold'>{item.card.info.name} - Rs.{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</h1>
          {item.card.info.description ? <p className='pt-2'>{item.card.info.description}</p> : <p>Good Food,Good Life</p>}
          </div>
          <img className = 'w-32 h-28' src = {CDN_URL + item.card.info.imageId} alt="Unavailable" />
          <div className='pt-3 px-1 space-y-3 w-24'>
          <button className='bg-black text-white h-6 border-black rounded-md pd-3 px-2' onClick={()=> {addItemHandler(item)}}>Add+</button>
          <button className='bg-black text-white h-6  border-black rounded-md pd-1 px-2' onClick={()=> {removeItemHandler(item)}}>Remove-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryItems;