import React, { Component } from 'react';

class LongestCommonPrefix extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      result: undefined,
      word: '',
      words: []
    }

    this.onKeyDown = this.onKeyDown.bind(this);
    this.clear = this.clear.bind(this);
    this.runAlgo = this.runAlgo.bind(this);
  }
  
  longestCommonPrefix(strs) {
    if (strs === null || strs.length === 0) return "";
    let minLen = strs[0].length;
    strs.forEach(str => {
      if (str.length < minLen) minLen = str.length;
    });
    let low = 1;
    let high = minLen;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (this.isCommonPrefix(strs, mid)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return strs[0].slice(0, Math.floor((low + high) / 2));
  }

  isCommonPrefix(strs, len) {
    let str1 = strs[0].slice(0, len);
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(str1)) return false;
    }
    return true;
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
        word,
        words
      } = this.state;
      words.push(word);
      this.setState({
        word: '',
        words,
        result: undefined
      })
    }
  }

  renderResult() {
    if (this.state.result === "") {
      return <div className="text-danger">
        No common prefix found
      </div>
    }
    if (this.state.result === undefined) return null;
    return <div className="text-light">
      The common prefix is: 
      <span className="text-warning ml-2" >
        {this.state.result}
      </span>
    </div>
  }

  clear() {
    this.setState({
      result: undefined,
      word: '',
      words: []
    })
  }

  runAlgo() {
    const result = this.longestCommonPrefix(this.state.words);
    this.setState({
      result
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Longest Common Prefix</h3>
        <p> Write a function to find the longest common prefix string amongst an array of strings.
        If there is no common prefix, return an empty string.</p>
        <label htmlFor="word">Enter a word: </label>
        <input 
          id="word"
          name="word"
          type="string"
          className="ml-3"
          value={this.state.word}
          onChange={this.update("word")}
          onKeyDown={this.onKeyDown}
        />
        <div className="p-3 text-warning">
          {
            this.state.words.map(word => (
              <div>
                {word}
              </div>
            ))
          }
        {this.renderResult()}
        </div>
        <button type="button" onClick={this.runAlgo} className="btn btn-primary m-3">Run</button>
        <button type="button" onClick={this.clear} className="btn btn-danger m-3">Clear</button>
        <button type="button" className="btn btn-warning m-3" data-toggle="modal" data-target="#longestCommonPrefixCode">Code</button>
        <div className="modal fade" data-backdrop="false" id="longestCommonPrefixCode" tabIndex="-1" style={{ display: 'none' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-primary">JavaScript Code</h5>
              </div>
              <div className="modal-body" >
                <p className="text-secondary">The obvious solution would be to iterate through each word and get the prefix. To improve run-time, I wrote the solution, using a binary search method. I grab the length of the shortest word, cut the word in half, if it is a common prefix, add half of the end, else subtract half of the beginning, until it reaches the end. So instead of iterating through the entire word, it keeps cutting the length in half. I also created a helper function to make the code more manageable.</p>
                <pre>
                  <code>
                    {
                      `function longestCommonPrefix(strs) {
  if (strs === null || strs.length === 0) return "";
  let minLen = strs[0].length;
  strs.forEach(str => {
    if (str.length < minLen) minLen = str.length;
  });
  let low = 1;
  let high = minLen;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isCommonPrefix(strs, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return strs[0].slice(0, Math.floor((low + high) / 2));
}

function isCommonPrefix(strs, len) {
  let str1 = strs[0].slice(0, len);
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(str1)) return false;
  }
  return true;
}`
                    }
                  </code>
                </pre>
              </div>
            <p className="text-primary ml-5">Binary Search:</p>
            <p className="text-danger ml-5">Time: O(nlog(n)) Space: O(1)</p>
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

export default LongestCommonPrefix;
