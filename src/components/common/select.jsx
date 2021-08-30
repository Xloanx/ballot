import React from "react";

const Select = (props) => {
  const { name, label, options, error, ...rest } = props;
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}> {label} </label> <br />
      <select id={name} name={name} {...rest} className="form-control ">
        <option value=""> Select {label} </option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

// const Select = ({ name, label, options, error, ...rest }) => {
//   return (
//     <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <select name={name} id={name} {...rest} className="form-control">
//         <option value="" />

export default Select;
