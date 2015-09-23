import React from 'react';
import Slider from './slider.jsx';

class MessageBox extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      red: "0",
      green: "0",
      blue: "0"
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
        <Slider ref="red" name="1er componente anidado"  range={(e) => this.updateTxt(e)}/>
        <p>{this.state.red}</p>
        <Slider ref="green" name="2ndo componente anidado" range={(e) => this.updateTxt(e)}/>
        <p>{this.state.green}</p>
        <Slider ref="blue" name="3er componente anidado"  range={(e) => this.updateTxt(e)}/>
        <p>{this.state.blue}</p>
      </div>
    );
  }
}


export default MessageBox;
