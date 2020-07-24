import React from 'react';

import './App.css';
import TwoSum from './components/algorithms/TwoSum';
import ReverseInteger from './components/algorithms/ReverseInteger';

function App() {
  return (
    <div id="wrapper">
      <div>
        <h2>Algorithm Visualization</h2>
        <TwoSum />
        <div className="border-bottom w-75 mx-auto m-3 border-warning"></div>
        <ReverseInteger />
      </div>
    </div>
  );
}

export default App;
