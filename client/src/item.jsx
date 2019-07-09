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
      <div className='item'>
        <img src={this.state.image} className='image-main' />
        <div>{this.props.item.brand}</div>

      </div>
    )
  }

}

export default Item;