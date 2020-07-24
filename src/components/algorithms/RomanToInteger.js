import React, { Component } from 'react';

class RomanToInteger extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      roman: '',
      result: ''
    }

    this.onKeyDown = this.onKeyDown.bind(this);
    this.clear = this.clear.bind(this);
    this.runAlgo = this.runAlgo.bind(this);
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
    let result = this.romanToInt(this.state.roman);
    if (result === 0) {
      result = undefined;
    }
    this.setState({
      result
    });
  }

  romanToInt(roman) {
    let s = roman.toUpperCase();
    let num = 0;
    for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case 'I':
          if (s[i + 1] === 'V' || s[i + 1] === 'X') {
            num -= 1;
          } else {
            num += 1;
          }
          break;
        case 'V':
          num += 5;
          break;
        case 'X':
          if (s[i + 1] === 'L' || s[i + 1] === 'C') {
            num -= 10;
          } else {
            num += 10;
          }
          break;
        case 'L':
          num += 50;
          break;
        case 'C':
          if (s[i + 1] === 'D' || s[i + 1] === 'M') {
            num -= 100;
          } else {
            num += 100;
          }
          break;
        case 'D':
          num += 500;
          break;
        case 'M':
          num += 1000;
          break;
        default:
          return undefined;
      }
    }
    return num;
  };

  renderResult() {
    if (this.state.result === undefined) {
      return <div className="text-danger">This is not a valid Roman numeral...</div>
    }
    return <div>{this.state.result}</div>
  }

  clear() {
    this.setState({
      roman: '',
      result: ''
    })
  }
  
  render() {
    return (
      <div className="container-fluid">
        <h3>Roman to Integer</h3>
        <p>Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.</p>
        <p>Given a roman numeral, convert it to an integer. Input should be within the range from 1 to 3999.</p>
        <label htmlFor="roman">Enter a valid Roman Numeral</label>
        <input 
          type="string"
          id="roman"
          name="roman"
          className="ml-3"
          value={this.state.roman}
          onChange={this.update('roman')}
          onKeyDown={this.onKeyDown}
        />
        {this.renderResult()}
        <br />
        <button type="button" onClick={this.runAlgo} className="btn btn-primary m-3">Run</button>
        <button type="button" onClick={this.clear} className="btn btn-danger m-3">Clear</button>
        <button type="button" className="btn btn-warning m-3" data-toggle="modal" data-target="#romanToIntegerCode">Code</button>
        <div className="modal fade" data-backdrop="false" id="romanToIntegerCode" tabIndex="-1" style={{ display: 'none' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-primary">JavaScript Code</h5>
              </div>
              <div className="modal-body" >
                <p className="text-secondary">This code does not test all the edge cases, it assumes that the number entered is a valid roman numeral. I used a switch statement to calculate the number.</p>
                <pre>
                  <code>
                    {
                      `romanToInt(roman) {
  let s = roman.toUpperCase();
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        if (s[i + 1] === 'V' || s[i + 1] === 'X') {
          num -= 1;
        } else {
          num += 1;
        }
        break;
      case 'V':
        num += 5;
        break;
      case 'X':
        if (s[i + 1] === 'L' || s[i + 1] === 'C') {
          num -= 10;
        } else {
          num += 10;
        }
        break;
      case 'L':
        num += 50;
        break;
      case 'C':
        if (s[i + 1] === 'D' || s[i + 1] === 'M') {
          num -= 100;
        } else {
          num += 100;
        }
        break;
      case 'D':
        num += 500;
        break;
      case 'M':
        num += 1000;
        break;
      default:
        return undefined;
    }
  }
  return num;
};`
                    }
                  </code>
                  </pre>
              </div>
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

export default RomanToInteger;
