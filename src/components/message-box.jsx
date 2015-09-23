import React from 'react';
import Sub from './sub.jsx';

class MessageBox extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      red: 0,
      green: 0,
      blue: 0
  }
}
 updateTxt(e) {
    this.setState({
      red: React.findDOMNode(this.refs.red.refs.range).value,
      green: React.findDOMNode(this.refs.green.refs.range).value,
      blue: React.findDOMNode(this.refs.blue.refs.range).value
    })
  }
  render() {
    return (
      <div className="container">
        <h1>Parent Component</h1>
        <Sub ref="red"    range={(e) => this.updateTxt(e)}/>
        <label>{this.state.red}</label>
        <Sub ref="green"  range={(e) => this.updateTxt(e)}/>
        <label>{this.state.green}</label>
        <Sub ref="blue"   range={(e) => this.updateTxt(e)}/>
        <label>{this.state.blue}</label>
      </div>
    );
  }
}


export default MessageBox;
