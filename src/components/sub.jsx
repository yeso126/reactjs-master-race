import React from 'react';

class Sub extends React.Component {
  render() {
    return (
      <div>
        <h2>Nested Component</h2>
        <h3>{this.props.titleMessage}</h3>
      </div>
    )
  }
}

export default Sub;
