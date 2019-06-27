import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './components/todo/index.js'

class App extends Component {
  render () {
    const styleConfig = {
      fontSize: '40px',
      color: 'blue'
    }
    return (
      <div className="App">
        <Todo/>
        <p className="container" style={styleConfig}>sample text</p>
      </div>
    );
  }
}

export default App;
