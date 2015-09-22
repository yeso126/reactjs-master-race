import React from 'react';
import Sub from './sub.jsx';

class MessageBox extends React.Component {

  getInitialState: function() {
    return {
      txt:'Write a comment',
      id: 0
    }
  },

  render() {
    return (
      <div className="container">
        <h1>Parent Component</h1>
        <h2>{this.this.state.txt}</h2>
      </div>
    );
  }
}

export default MessageBox;
