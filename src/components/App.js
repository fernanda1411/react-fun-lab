import React from 'react';
import './App.css';
import ComponentTest from './ComponentTest';

class App extends React.Component {
 
  constructor(props) {
    // console.log('App - constructor')
    super(props);
    this.state = {
      showComponent: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    // console.log('App - handleToggle')
    this.setState((state) => ({showComponent: !state.showComponent}))
  }

  
  render() {
    // console.log('App - render - state.showComponent', this.state.showComponent)    
    return (
      <div className="App">
        <button onClick={this.handleToggle}>Toggle Component Test</button>
        { this.state.showComponent && <ComponentTest />}
  
      </div>
    );
  }  
}

export default App;
