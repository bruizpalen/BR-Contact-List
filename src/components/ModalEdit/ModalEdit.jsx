import React from "react";
import classes from "../ModalDelete/ModalDelete.module.css"; // Import the CSS module
import { Link } from "react-router-dom";

const ModalEdit = ({ title, content, onCancel, onConfirm, contactId }) => {
  return (
    <div className="d-flex modelOver border justify-content-center {`${classes.modalOverlay} mb-2`}">
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
              <Link to={`/edit/:${contactId}`}>Confirm</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
