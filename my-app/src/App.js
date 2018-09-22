import React, { Component } from 'react';
import Ninjas from './Ninjas'
class App extends Component {
  state = {
    ninjas : [
      {name: 'Anas', age: 23, belt: "black", id: 1},
      {name: 'Sarath', age: 25, belt: "green", id: 2},
      {name: 'Samah', age: 24, belt: "orange", id: 3},
      {name: 'Ajmal', age: 22, belt: "red", id: 4}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={ this.state.ninjas }/>
      </div>
    );
  }
}

export default App;
