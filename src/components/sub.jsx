import React from 'react';

class Sub extends React.Component {
  render() {
    return (
      <div>
        <h3>Nested Component</h3>
        <h4>{this.props.comment}</h4>
      </div>
    )
  }
}

export default Sub;
