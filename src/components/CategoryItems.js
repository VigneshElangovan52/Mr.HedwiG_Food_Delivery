import React from 'react';
import { CDN_URL } from '../utils/constants';

const CategoryItems = ({data}) => {
  console.log(data, "foodlist");

  return (
    <div>
      {data.map((item) => (
        <div className='p-3 m-2 border-b-2 border-gray-500 shadow-lg flex justify-between rounded-lg'>
          <div className='text-left w-9/12' ><h1 className='font-semibold'>{item.card.info.name} - Rs.{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</h1>
          {item.card.info.description ? <p className='pt-2'>{item.card.info.description}</p> : <p>Good Food,Good Life</p>}
          </div>
          <img className = 'w-20 h-20' src = {CDN_URL + item.card.info.imageId} alt="Unavailable" />
          <button className='bg-black text-white h-6 rounded-md pd-1 px-2'>Add+</button>
        </div>
      ))}
    </div>
  );
}

export default CategoryItems;