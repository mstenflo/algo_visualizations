import React, { Component } from 'react';
import Modal from '../Modal';
import Buttons from '../Buttons';

class ReverseInteger extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      int: '',
      result: ''
    }

    this.reverse = this.reverse.bind(this);
    this.clear = this.clear.bind(this);
    this.runAlgo = this.runAlgo.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.runAlgo();
    }
  }
  
  runAlgo() {
    const result = this.reverse(this.state.int);
    this.setState({ result });
  }

  reverse(x) {
    let rev = parseInt(String(x).split('').reverse().join('')) * Math.sign(x);
    return Math.abs(rev) > Math.pow(2, 31) - 1 ? 0 : rev;
  }

  renderResult() {
    if (this.state.result !== '') {
      return <div>{this.state.result}</div>
    }
  }

  clear() {
    this.setState({
      int: '',
      result: ''
    })
  }

  modalContent() {
    return (
      <div>
        <pre>
          <code>
            {
              `function reverse(x) {
  let rev = parseInt(String(x).split('').reverse().join('')) * Math.sign(x);
  return Math.abs(rev) > Math.pow(2, 31) - 1 ? 0 : rev;
}`
            }
          </code>
        </pre>
      </div>
    )
  }
  
  render() {
    return (
      <div className="container-fluid">
        <h3>Reverse Integer</h3>
        <p>Given a 32-bit signed integer, reverse digits of an integer.</p>
        <p>Assume we are dealing with an environment which could only store integers within the 32-bit signed 
integer range: [−2<sup>31</sup>, 2<sup>31</sup> − 1]. For the purpose of this problem, assume that your
function returns 0 when the reversed integer overflows.</p>
        <label htmlFor="int" >
          Enter a 32-bit integer:
        </label>
        <input 
          id="int"
          type="number"
          name="int"
          className="ml-3"
          onChange={this.update("int")}
          value={this.state.int}
          onKeyDown={this.onKeyDown}
        />
        {this.renderResult()}
        <br />
        <Buttons 
          runAlgo={this.runAlgo}
          clear={this.clear}
          code="#reverseIntegerCode"
        />
        <div
          className="modal fade"
          data-backdrop="false"
          id="reverseIntegerCode"
          tabIndex="-1"
          style={{ display: 'none' }}
        >
        <Modal content={this.modalContent} />
        </div>
      </div>
    );
  }
}

export default ReverseInteger;
