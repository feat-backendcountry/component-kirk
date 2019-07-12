import React from 'react';

function Item(props) {

  return (
    <div className='rec-item-showmore'>
      <div className='rec-item-wrapper'>
        <a href='#' title={`${props.item.brand} ${props.item.name}`} className='rec-item' >
          <img src={props.item.images[0]} className='image-main' />
          <div className='item-description'>
            <div className='brand-name'>{props.item.brand}</div>
            <div className='item-name'>{props.item.name}</div>
          </div>
          <div className='item-offers'>${props.item.price}</div>
        </a>
      </div>
    </div>
  )
}

export default Item;