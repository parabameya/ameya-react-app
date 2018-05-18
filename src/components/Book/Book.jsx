import React, { Component } from 'react';

class Book extends Component {
    componentDidMount() {
        console.log('Book is mounted')
    }
    render() {
        const { name, libraryId, pageCount } = this.props;
        return (
            <div className="Books">
                <p className="Books-intro">
                    Hello I am {name} <br/>
                    I belong to the {libraryId} library <br/>
                    My page count is {pageCount} pages <br/>
                </p>
            </div>
        );
    }
}

export default Book;
