import React, {Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component{
  state={
    ninjas: [
      {name: 'Rep', age: 20, belt: 'black', id: 1},
      {name: 'Moli', age: 25, belt: 'brown', id: 2},
      {name: 'More', age: 1, belt: 'white', id: 3},
      
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Rep's journey to react!</h1>
        <p>Welcome!</p>
        <h3>Ninjas Data : </h3>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
    }
}

export default App;