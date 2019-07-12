import React from 'react';
import axios from 'axios';
import Item from './item.jsx';

function RecItems(props) {
  return (
    <div className='items-wrapper'>
      {props.items.map((item, index) => <Item item={item} key={index} />)}
    </div>
  )
}

export default RecItems;