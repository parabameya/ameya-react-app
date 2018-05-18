import React, { Component } from 'react';
import Library from './components/Library/Library';
import * as Config from './config.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
        libraryName: "UTD",
        booksCount: 123,
        };
    }
    componentDidMount() {
        console.log('I am mounted')
    }
    render() {
        const allLibraries = [];
        const allBooks = [];
        Config.lib.forEach(function(library) {
            allLibraries.push(<Library 
                name={library.name} 
                zip= {library.zip}
                id = {library.id}
                fullName = {library.fullName} 
                bookCount = {library.book.length}
                books={library.book} />);
        });
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Hello World
                    {allLibraries}
                </p>
            </div>
        );
    }
}

export default App;
