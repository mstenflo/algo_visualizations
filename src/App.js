import React from 'react';

import './App.css';
import TwoSum from './components/algorithms/TwoSum';
import ReverseInteger from './components/algorithms/ReverseInteger';
import PalindromeNumber from './components/algorithms/PalindromeNumber';

function App() {
  return (
    <div id="wrapper">
      <div>
        <h2>Algorithm Visualization</h2>
        <TwoSum />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
        <ReverseInteger />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
        <PalindromeNumber />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
      </div>
    </div>
  );
}

export default App;
