import React from "react";
import classes from "./Input.module.css";

const Input = ({ id, type, placeholder, label, onChangeInput, value }) => {
  return (
    <div className="mb-3 mx-5">
      <label htmlFor={id} className="form-label font-weight-bold" required>
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={onChangeInput}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
