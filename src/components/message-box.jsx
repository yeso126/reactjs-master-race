import React from 'react';
import Sub from './sub.jsx';

class MessageBox extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Parent Component</h1>
        <Sub/>
      </div>
    );
  }
}

export default MessageBox;
