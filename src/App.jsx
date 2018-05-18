import React, { Component } from 'react';
import logo from './logo.svg';
import Books from './components/Books/Books';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      libraryName: "UTD",
      booksCount: 123,
    };
    this.buttonClick = this.buttonClick.bind(this);
  }
  componentDidMount() {
    console.log('I am mounted');
  }
  buttonClick() {
    console.log('i am clicked');
    this.setState({ libraryName: "SMU" });
  }
  render() {
    const { libraryName, booksCount } = this.state;
    console.log('libraryName', libraryName);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.buttonClick}> SMU </button>
        <p className="App-intro">
          Hello World
          <Books
            bookName={'Harry Potter 5'}
            libraryName={libraryName}
            booksCount={booksCount}
          />
        </p>
      </div>
    );
  }
}

export default App;
