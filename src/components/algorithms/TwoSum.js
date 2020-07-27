import React, { Component } from 'react';
import Modal from '../Modal';
import Buttons from '../Buttons';

class TwoSum extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      number: '',
      array: [],
      target: '',
      result: [],
      renderResult: false
    }

    this.onKeyDown = this.onKeyDown.bind(this);
    this.runAlgo = this.runAlgo.bind(this);
    this.algo = this.algo.bind(this);
    this.clear = this.clear.bind(this);
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }


  onKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const {
        number,
        array
      } = this.state;
      array.push(number);
      this.setState({
        number: '',
        array
      })
    }
  }

  algo(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
      if (hash[target - nums[i]] !== undefined) return [hash[target - nums[i]], i];
      hash[nums[i]] = i;
    }
    return [];
  }

  runAlgo() {
    const result = this.algo(this.state.array, this.state.target);
    this.setState({
      result,
      renderResult: true
    });
  }

  renderResult() {
    if (this.state.renderResult) {
      if (this.state.result.length === 0) {
        return <div className="text-danger">
            There are no pairs that add up to the target value
          </div>
      }
    }
  }

  returnIdx(n, idx) {
    const { result } = this.state;
    if (result.length === 0) {
      return <div>
        <div className="border p-2 m-2 border-danger rounded">{n}</div>
        {idx}
      </div>;
    } else {
      if (idx === result[0] || idx === result[1]) {
        return <div>
          <div className="border p-2 m-2 border-warning rounded">{n}</div>
          <div className="text-warning">{idx}</div>
        </div>
      } else {
        return <div>
          <div className="border p-2 m-2 border-danger rounded">{n}</div>
          {idx}
        </div>
      }
    }
  }

  clear() {
    this.setState({
      number: '',
      array: [],
      target: '',
      result: [],
      renderResult: false
    })
  }

  modalContent() {
    return (
      <div>
        <p className="text-secondary">The obvious answer would be to have a nested for-loop, comparing all the indices with each other. This, however, would lead to a time complexity of O(n<sup>2</sup>). Another method would be to create two hash tables and compare them with each other. Here is an elegant one-pass hash table solution: </p>
        <pre>
          <code>
            {
              `function twoSum(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) return [hash[target - nums[i]], i];
    hash[nums[i]] = i;
  }
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
        <h3>Two Sum</h3>
        <p> Given an array of integers, return indices of the two number
          such that they add up to a specific target.</p>

        <p>You may assume that each input would have exactly one solution,
          and you may not use the same element twice.</p>
        <label htmlFor="target" >
          Enter a target value:
        </label>
        <input 
          id="target"
          type="number"
          name="target"
          className="number-input"
          onChange={this.update("target")}
          value={this.state.target}
        />
        <br />
        <label htmlFor="number">
          Enter some numbers:
        </label>  
        <input
          id="number"
          type="number"
          name="number"
          className="number-input"
          value={this.state.number}
          onChange={this.update("number")}
          onKeyDown={this.onKeyDown}
        />
        <div className="ml-3">
          <div>
            Target: &nbsp;
            {this.state.target}
            <br />
          </div>
          {
            this.state.array.map((n, idx) => (
              <div className="d-inline-flex" >
                <div className="text-center">
                  {this.returnIdx(n, idx)}
                </div>
              </div>
            ))
          }
        </div>
        <Buttons 
          runAlgo={this.runAlgo}
          clear={this.clear}
          code="#twoSumCode"
        />
        {this.renderResult()}
        <div
          className="modal fade"
          data-backdrop="false"
          id="twoSumCode"
          tabIndex="-1"
          style={{ display: 'none' }}
        >
        <Modal content={this.modalContent} />
        </div>
      </div>
    );
  }
}

export default TwoSum;