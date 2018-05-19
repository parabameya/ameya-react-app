import React, { Component } from 'react';
import axios from 'axios';
import Library from './components/Library/Library';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
        libraryName: "UTD",
        booksCount: 123,
        libraries: {},
        };
        this.getBookDetails = this.getBookDetails.bind(this);

    }
    componentDidMount() {
        console.log('I am mounted');
        this.getBookDetails();
    }
    getBookDetails() {
        /* https://github.com/parabameya/ameya-node-app */
        axios.get(`http://localhost:3001/library`)
        .then(res => {
            this.setState({ libraries: res.data });
        });
    }
    render() {
        const { libraries } = this.state;
        const allLibraries = [];
        const allBooks = [];
        if (libraries.lib) {
            libraries.lib.forEach(function(library) {
                allLibraries.push(<Library 
                    name={library.name} 
                    zip= {library.zip}
                    id = {library.id}
                    fullName = {library.fullName} 
                    bookCount = {library.book.length}
                    books={library.book} />);
            });
        }
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
