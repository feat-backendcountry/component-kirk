import React from 'react';
import axios from 'axios';
import Item from './item.jsx';

class RecItems extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div className='items-wrapper'>

      {this.props.items.map( (item, index) => <Item  item={item} key={index} /> )}
      </div>
    )
  }

}

export default RecItems;