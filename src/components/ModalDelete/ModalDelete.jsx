import React from "react";

const ModalDelete = ({ title, content, onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
        </div>

        <div className="modal-body">{content}</div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
