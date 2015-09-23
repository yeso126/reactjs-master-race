import React from 'react';

class Sub extends React.Component {
  render() {
    return (
      <div>
        <h4>Nested component</h4>
        <input ref="range" defaultValue="0" type="range" onChange={this.props.range}></input>
      </div>
    )
  }
}

export default Sub;
