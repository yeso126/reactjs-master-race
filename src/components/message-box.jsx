import React from 'react';
import Sub from './sub.jsx';

class MessageBox extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      txt: ''
  }
}
  updateTxt(e) {
    this.setState({
      txt: e.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <h1>Parent Component</h1>
        <input type="text" onChange={(e) => this.updateTxt(e)}></input>
        <h2>{this.state.txt}</h2>
        <Sub comment={this.state.txt}/>
      </div>
    );
  }
}


export default MessageBox;
