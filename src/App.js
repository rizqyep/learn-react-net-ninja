import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
class App extends Component{
  state={
    ninjas: [
      {name: 'Rep', age: 20, belt: 'black', id: 1},
      {name: 'Moli', age: 25, belt: 'brown', id: 2},
      {name: 'More', age: 1, belt: 'white', id: 3},
      
    ]
  }
  addNinja=(ninja) => {
    ninja.id=Math.random();
    //Set updated ninjas array to current array + new ninja object
    let updatedNinjas=[...this.state.ninjas, ninja];
    
    this.setState({
      ninjas: updatedNinjas
    })

  }
  render() {
    return (
      <div className="App">
        <h1>Rep's journey to react!</h1>
        <p>Welcome!</p>
        <h3>Ninjas Data : </h3>
        <AddNinja addNinja={this.addNinja} />
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
    }
}

export default App;