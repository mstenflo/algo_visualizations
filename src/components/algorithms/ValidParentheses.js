import React, { Component } from 'react';
import Buttons from '../Buttons';
import Modal from '../Modal';

class ValidParentheses extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      result: '',
      parentheses: ''
    }

    this.clear = this.clear.bind(this);
    this.runAlgo = this.runAlgo.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  isValid(s) {
    if (s === null || s.length === 0) return true;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "{") {
        stack.push("}");
      } else if (s[i] === "[") {
        stack.push("]");
      } else if (s[i] === '(') {
        stack.push(')');
      } else {
        if (s[i] !== stack.pop()) return false;
      }
    }
    if (stack.length > 0) return false;
    return true;
  }

  runAlgo() {
    let result = this.isValid(this.state.parentheses);
    this.setState({
      result
    })
  }

  clear() {
    this.setState({
      result: '',
      parentheses: ''
    })
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.runAlgo();
    }
  }

  modalContent() {
    return (
      <div>
        <p className="text-secondary">Every opening parentheses must be followed by a closing parentheses of the same type or by another open parentheses of any type. So essentially you can simply add the corresponding closing parentheses to a stack whenever an open parentheses is encountered. When a closing parentheses is encountered, it must match the last item on the stack.</p>
        <pre>
          <code>
            {
              `function isValid(s) {
  if (s === null || s.length === 0) return true;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] === '(') {
      stack.push(')');
    } else {
      if (s[i] !== stack.pop()) return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
}`
            }
          </code>
        </pre>
      </div>
    )
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  renderResult() {
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
          type="string"
          className="ml-3"
          value={this.state.parentheses}
          onKeyDown={this.onKeyDown}
          onChange={this.update('parentheses')}
        />
        <span className="ml-3"> Is it valid? </span>
        {this.renderResult()}
        <br />
        <Buttons 
          runAlgo={this.runAlgo}
          clear={this.clear}
          code="#validParentheses"
        />
        <div
          className="modal fade"
          data-backdrop="false"
          id="validParentheses"
          tabIndex="-1"
          style={{ display: 'none' }}
        >
          <Modal content={this.modalContent} />
        </div>
      </div>
    );
  }
}

export default ValidParentheses;
