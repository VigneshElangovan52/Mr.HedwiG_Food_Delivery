import React from 'react';
import { CDN_URL } from '../utils/constants';

const CategoryItems = ({data}) => {
  console.log(data, "foodlist");

  return (
    <div>
      {data.map((item) => (
        <div className='p-5 m-2 border border-solid border-x-transparent border-t-transparent border-gray-500 shadow-lg flex justify-between rounded-lg'>
          <div className='text-left' ><h1 className='font-semibold'>{item.card.info.name} - Rs.{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</h1>
          {item.card.info.description ? <p>{item.card.info.description}</p> : <p>Good Food,Good Life</p>}
          </div>
          <img className ="w-2/12 h-20" src = {CDN_URL + item.card.info.imageId} alt="food" />
        </div>
      ))}
    </div>
  );
}

export default CategoryItems;