import React, { Component } from 'react';

class Book extends Component {
    componentDidMount() {
        console.log('Book is mounted')
    }
    render() {
        const { name, pageCount, author } = this.props;
        return (
            <div className="Books">
                <p className="Books-intro">
                    Name: {name} <br/>
                    Author: {author} <br/>
                    Page Count: {pageCount} pages <br/>
                </p>
            </div>
        );
    }
}

export default Book;
