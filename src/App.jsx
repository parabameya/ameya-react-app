import React, { Component } from 'react';
import Library from './components/Library/Library';
import Book from './components/Book/Book';
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
        Config.lib.forEach(function(element) {
            allLibraries.push(<Library name={element.name} 
                                       zip= {element.zip}
                                       id = {element.id}
                                       fullName = {element.fullName} 
                                       bookCount = {element.bookCount} />)            
        });
        Config.book.forEach(function(element) {
            allBooks.push(<Book name      = {element.name}
                                id        = {element.id}
                                author    = {element.author}
                                libraryId = {element.libraryId}
                                pageCount = {element.pageCount} />)
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
                    {allBooks}
                </p>
            </div>
        );
    }
}

export default App;
