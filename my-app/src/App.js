import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
class App extends Component {
  state = {
    ninjas : [
      {name: 'Anas', age: 23, belt: "black", id: 1},
      {name: 'Sarath', age: 25, belt: "green", id: 2},
      {name: 'Samah', age: 24, belt: "orange", id: 3},
      {name: 'Ajmal', age: 22, belt: "red", id: 4}
    ]
  }
  AddNinja = ninja => {
    ninja.id = this.state.ninjas.length + 1
    let ninjas = [...this.state.ninjas, ninja]
    this.setState(prevState => ({
      // ninjas: [...prevState.ninjas, ninja]
      ninjas: ninjas
    }))
  }

  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My First react app</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={ this.state.ninjas }/>
        <AddNinja addNinja={this.AddNinja}/>
      </div>
    );
  }
}

export default App;
