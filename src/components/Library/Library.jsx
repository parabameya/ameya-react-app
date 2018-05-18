import React, { Component } from 'react';
import Book from '../../components/Book/Book';

class Library extends Component {
    componentDidMount() {
        console.log('Library is mounted')
    }
    render() {
        const { fullName, bookCount, zip } = this.props;
        return (
            <div className="Library">
                <p className="Library-intro">
                    Hello, I am the {fullName} library, located in {zip}. <br/>
                    I have {bookCount} books. <br/>
                </p>
            </div>
        );
    }
}

export default Library;
