import React, { Component } from 'react';

class PalindromeNumber extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      int: '',
      result: ''
    }

    this.runAlgo = this.runAlgo.bind(this);
    this.clear = this.clear.bind(this);
    this.isPalindrome = this.isPalindrome.bind(this);
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
    const result = this.isPalindrome(this.state.int);
    this.setState({
      result
    });
  }

  isPalindrome(x) {
    let nums = [];
    let palindrome = x;
    if (palindrome < 0) return false;
    while (palindrome > 9) {
      nums.push(palindrome % 10);
      palindrome = Math.floor(palindrome / 10);
    }
    nums.push(palindrome);
    nums.reverse();
    let num = nums[0];
    for (let i = 1; i < nums.length; i++) {
      num += nums[i] * Math.pow(10, i);
    }
    return num === parseInt(x);
  }

  showResult() {
    if (this.state.result) {
      return (
        <span className="border p-2 rounded bg-success text-dark m-3 border-dark">Yes</span>
      )
    } else {
      if (this.state.result === '') {
        return null;
      }
      return (
        <span className="border p-2 rounded bg-danger text-light m-3 border-dark">No</span>
        )
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
        <h3>Palindrome Number</h3>
        <p>Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.</p>
        <label htmlFor="int">Enter a number</label>
        <input 
          id="int"
          type="number"
          name="int"
          className="ml-3"
          onChange={this.update("int")}
          value={this.state.int}
          onKeyDown={this.onKeyDown}
        />
        <span className="ml-3"> Is it a palindrome? </span>
        {this.showResult()}
        <br />
        <button type="button" onClick={this.runAlgo} className="btn btn-primary m-3">Run</button>
        <button type="button" onClick={this.clear} className="btn btn-danger m-3">Clear</button>
        <button type="button" className="btn btn-warning m-3" data-toggle="modal" data-target="#palindromNumberCode">Code</button>
        <div className="modal fade" data-backdrop="false" id="palindromNumberCode" tabIndex="-1" style={{ display: 'none' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-primary">JavaScript Code</h5>
              </div>
              <div className="modal-body" >
                <p className="text-secondary">The intuitive method would be to convert the number to a string, split, reverse, and join it for the comparison. Here is a solution that avoids having to convert the number to a string.</p>
                <pre>
                  <code>
                    {
                      `function isPalindrome(x) {
  let nums = [];
  let palindrome = x;
  if (palindrome < 0) return false;
  while (palindrome > 9) {
    nums.push(palindrome % 10);
    palindrome = Math.floor(palindrome/10);
  }
  nums.push(palindrome);
  nums.reverse();
  let num = nums[0];
  for (let i = 1; i < nums.length; i++) {
    num += nums[i] * Math.pow(10, i);
  }
  return num === x;
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

export default PalindromeNumber;
