import React, { Component } from 'react';
import './App.css';
import SprayPaint from './ArtSupplies/SprayPaint';

class App extends Component {
  state = {
    paints: [
      { brand: "Hardcore", price: '$5.00' },
      { brand: "Ironlak", price: '$4.00' } 
    ]
  };


  render() {
    return (
      <div className="App">
        <SprayPaint brand={this.state.paints[0].brand} price={this.state.paints[0].price}>Great for bombing the streets!</SprayPaint>
        <SprayPaint brand={this.state.paints[1].brand} price={this.state.paints[1].price}>Great for indoor painting!</SprayPaint>
        <button>Switch Can</button>
      </div>
    );
  }
}

export default App;
