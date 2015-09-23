import React from 'react';

class Slider extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <input ref="range" defaultValue="0" type="range" onChange={this.props.range}></input>
      </div>
    )
  }
}

export default Slider;
