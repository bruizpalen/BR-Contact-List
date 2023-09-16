import React from "react";
import classes from "./ModalDelete.module.css"; // Import the CSS module

const ModalDelete = ({ title, content, onCancel, onConfirm }) => {
  return (
    <div className="d-flex modelOver justify-content-center {`${classes.modalOverlay} mb-2`}">
      <div className="">
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h4 className={classes.modalTitle}>{title}</h4>
          </div>

          <div className={classes.modalBody}>{content}</div>
          <div className="modal-footer d-flex justify-content-center mt-2">
            <button className="btn btn-danger me-3" onClick={onCancel}>
              Cancel
            </button>
            <button className={"btn btn-success"} onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
