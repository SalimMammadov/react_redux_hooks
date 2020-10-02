import React from "react";

const TextInputs = ({name, label, onChange, placeHolder, value, error}) => {
  let wrapper = "form-group";
  if (error && error.length > 0) {
    wrapper = wrapper + " has-error";
  }

  return (
    <div className={wrapper}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          className="form-control"
          name={name}
          value={value}
          placeholder={placeHolder}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default TextInputs;
