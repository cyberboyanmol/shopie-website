import React from "react";

import "./InputField.scss";

const InputField = (props) => {
  const {
    value,
    setValue,
    type = "text",
    placeholder,
    icon,
    hide,
    showpassword,
    Event,
    bulrHandlder,
    error,
  } = props;

  return (
    <div className="InputContainer">
      <div className="InputContainer_div">
        <input
          autoComplete="off"
          required
          value={value}
          className={`InputContainer_div_field ${error.error ? "error" : ""}`}
          type={type}
          onChange={setValue}
          onBlur={bulrHandlder}
        />
        <i className={`${icon} ${error.error ? "error" : ""} icon`}></i>
        <label
          className={`input_label ${error.error ? "error" : ""}`}
          name={value}
        >
          {placeholder}
        </label>
        {hide && (
          <i
            className={
              !showpassword ? "fal fa-eye hide" : "fal fa-eye-slash hide"
            }
            onClick={() => Event()}
          >
            <span> {!showpassword ? "Show" : "Hide"}</span>
          </i>
        )}
      </div>
      {error.error && <span className="error">{error.message}</span>}
    </div>
  );
};

export default InputField;
