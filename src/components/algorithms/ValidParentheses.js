import React, { Component } from 'react';

class ValidParentheses extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      result: ''
    }
  }

  reverse(x) {
    let rev = parseInt(String(x).split('').reverse().join('')) * Math.sign(x);
    return Math.abs(rev) > Math.pow(2, 31) - 1 ? 0 : rev;
  }
  
  render() {
    return (
      <div className="container-fluid">
        <h3>Valid Parentheses</h3>
        <p>Given a string containing just the characters (, ), {"{, }"}, [ and ], determine
        if the input string is valid.

        An input string is valid if:</p>

        <ul className="ml-5">
          <li>Open brackets must be closed by the same type of brackets.</li>
          <li>Open brackets must be closed in the correct order.</li>
          <li>Note that an empty string is also considered valid.</li>
        </ul>

        <label htmlFor="parentheses">Enter a string of parantheses: </label>
        <input 
          id="parentheses"
          name="parentheses"
          
        />
      </div>
    );
  }
}

export default ValidParentheses;
