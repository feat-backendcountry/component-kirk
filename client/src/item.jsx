import React from 'react';

class Item extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.item.images[0]
    }
  }

  render() {
    return(
      <div className='recItem'>
        <img src={this.state.image} className='image-main' />
        <div className='brandName'>{this.props.item.brand}</div>
        <div className='itemName'>{this.props.item.name}</div>

      </div>
    )
  }

}

export default Item;