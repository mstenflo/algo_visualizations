import React, { Component } from 'react';

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
      if (this.state.result.length > 0) {
        return <div>{
          this.state.result.map(result => (
            <div>Index: {result}</div>
          ))
        }</div>
      } else {
        return <div className="text-danger">There are no pairs that add up to the target value</div>
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

  render() {
    return (
      <div className="container-fluid">
        <h3>Two Sum</h3>
        <p> Given an array of integers, return indices of the two number
          such that they add up to a specific target.</p>

        <p>You may assume that each input would have exactly one solution,
          and you may not use the same element twice.</p>
        <div className="border-bottom w-50 mx-auto mb-3 border-info"></div>
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
              <div className="flex">
                <div className="column">
                  {this.returnIdx(n, idx)}
                </div>
              </div>
            ))
          }
        </div>
        <button type="button" onClick={this.runAlgo} className="btn btn-primary m-3">Run</button>
        <button type="button" onClick={this.clear} className="btn btn-danger m-3">Clear</button>
        <button type="button" className="btn btn-warning m-3" data-toggle="modal" data-target="#showCode">Code</button>
        {this.renderResult()}
        <div className="modal fade" data-backdrop="false" id="showCode" tabIndex="-1" style={{ display: 'none' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-primary">JavaScript Code</h5>
              </div>
              <div className="modal-body" >
                <p>
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
                </p>
              </div>
            <p className="text-primary ml-5">One-pass Hash Table:</p>
            <p className="text-danger ml-5">Time: O(n) Space: O(n)</p>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default TwoSum;