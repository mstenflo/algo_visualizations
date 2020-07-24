import React, { Component } from 'react';

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
        <button type="button" onClick={this.runAlgo} className="btn btn-primary m-3">Run</button>
        <button type="button" onClick={this.clear} className="btn btn-danger m-3">Clear</button>
        <button type="button" className="btn btn-warning m-3" data-toggle="modal" data-target="#reverseIntegerCode">Code</button>
        <div className="modal fade" data-backdrop="false" id="reverseIntegerCode" tabIndex="-1" style={{ display: 'none' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-primary">JavaScript Code</h5>
              </div>
              <div className="modal-body" >
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
            <p className="text-danger ml-5">Time: O(log(n)) Space: O(1)</p>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ReverseInteger;
