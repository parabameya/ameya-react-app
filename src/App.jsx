import React, { Component } from 'react';
import logo from './logo.svg';
import Books from './components/Books/Books';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('I am mounted')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello World
          <Books name={'Harry Potter'}/>
        </p>
      </div>
    );
  }
}

export default App;
