import React from 'react';

const Modal = ({ content }) => {
  return (
    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-primary">JavaScript Code</h5>
        </div>
        <div className="modal-body" >
          {content()}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
