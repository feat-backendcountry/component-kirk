import React from 'react';
import axios from 'axios';
import Item from './item.jsx';

class RecItems extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <span>

      {this.props.items.map( (item, index) => <Item  item={item} key={index} /> )}
      </span>
    )
  }

}

export default RecItems;