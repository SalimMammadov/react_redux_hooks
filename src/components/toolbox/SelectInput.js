import React from "react";
import AlertDanger from './AlertDanger'

const SelectInput = ({
  name,
  label,
  defaultOption,
  options,
  value,
  error,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        onChange={onChange}
        name={name}
        value={value}
        className="form-control"
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.categoryName}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default SelectInput;
