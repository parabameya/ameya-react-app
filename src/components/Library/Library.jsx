import React, { Component } from 'react';
import Book from '../Book/Book';

class Library extends Component {
    componentDidMount() {
        console.log('Library is mounted')
    }
    render() {
        const { fullName, bookCount, zip, books } = this.props;
        const allBooks = [];
        books.forEach(function(book) {
            allBooks.push(
                <Book 
                    name      = {book.name}
                    id        = {book.id}
                    author    = {book.author}
                    libraryId = {book.libraryId}
                    pageCount = {book.pageCount}
                />)
        });
        return (
            <div className="Library">
                <p className="Library-intro">
                    <b>Hello, I am the {fullName} library, located in {zip}.</b> <br/>
                    Total Books: {bookCount} . <br />
                    {allBooks}
                </p>
            </div>
        );
    }
}

export default Library;
