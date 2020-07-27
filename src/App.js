import React from 'react';

import './App.css';
import TwoSum from './components/algorithms/TwoSum';
import ReverseInteger from './components/algorithms/ReverseInteger';
import PalindromeNumber from './components/algorithms/PalindromeNumber';
import RomanToInteger from './components/algorithms/RomanToInteger';
import LongestCommonPrefix from './components/algorithms/LongestCommonPrefix';
import ValidParentheses from './components/algorithms/ValidParentheses';

function App() {
  return (
    <div id="wrapper">
      <div>
        <h2>Algorithm Visualization</h2>
        <ValidParentheses />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
        <LongestCommonPrefix />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
        <RomanToInteger />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
        <PalindromeNumber />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
        <ReverseInteger />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
        <TwoSum />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
      </div>
    </div>
  );
}

export default App;
