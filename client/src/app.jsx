import React from 'react';
import axios from 'axios';
import RecItems from './recitems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    const randomIds = [];
    for(let i = 0; i < 5; i++) {
      let itemId = Math.ceil(Math.random() * 100);
      while(randomIds.includes(itemId)) {
        itemId = Math.ceil(Math.random() * 100);
      }
      randomIds.push(itemId);
    }
    function getOneItem(id) {
      return axios.get(`/recommended/${id}`)
    }
    axios.all([getOneItem(randomIds[0]), getOneItem(randomIds[1]), getOneItem(randomIds[2]), getOneItem(randomIds[3]), getOneItem(randomIds[4])
    ])
      .then(axios.spread( ( dataOne, dataTwo, dataThree, dataFour, dataFive) => {
        var arr = [dataOne.data[0], dataTwo.data[0], dataThree.data[0], dataFour.data[0], dataFive.data[0]];
        this.setState({items: arr})
      } ))
  }

  render() {
    return (
      <div className='rec-wrapper'>
        <h2 id='rec-title'>Community Members Who Viewed Vidda Pro Long Pants - Men's also viewed</h2>
        <RecItems items={this.state.items} />
      </div>
    )
  }
}

export default App;