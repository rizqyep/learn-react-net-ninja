import React, {Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component{
  render() {
    return (
      <div className="App">
        <h1>Rep's journey to react!</h1>
        <p>Welcome!</p>
        <h3>Ninjas Data : </h3>
        <Ninjas/>
      </div>
    );
    }
}

export default App;