import React, { Component } from 'react';

class Books extends Component {
  componentDidMount() {
    console.log('I am mounted')
  }
  render() {
    const { bookName, libraryName, booksCount } = this.props;
    return (
      <div className="Books">
        <p className="Books-intro">
          Hello I am Lib {libraryName} <br />
          Book: {bookName} <br />
          My total Count is {booksCount}<br />
        </p>
      </div>
    );
  }
}

export default Books;
