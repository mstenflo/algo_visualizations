import React from 'react';

const Buttons = ({ runAlgo, clear, code }) => {
  return (
    <div>
      <button
        type="button"
        onClick={runAlgo}
        className="btn btn-primary m-3"
      >
        Run
      </button>
      <button
        type="button"
        onClick={clear}
        className="btn btn-danger m-3"
      >
        Clear
      </button>
      <button
        type="button"
        className="btn btn-warning m-3"
        data-toggle="modal"
        data-target={code}
      >
        Code
      </button>
    </div>
  );
}

export default Buttons;
