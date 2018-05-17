import React, { Component } from 'react';

class Books extends Component {
  componentDidMount() {
    console.log('I am mounted')
  }
  render() {
    return (
      <div className="Books">
        <p className="Books-intro">
          Hello I am Book {this.props.name}
        </p>
      </div>
    );
  }
}

export default Books;
