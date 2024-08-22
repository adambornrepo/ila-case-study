import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { BsKeyFill } from "react-icons/bs";
import { isInValid, isValid } from "../../helpers/function/forms";
import "./password-input.scss";

const PasswordInput = ({
  formik,
  placeholder,
  field,
  setFocus,
  title,
  children,
}) => {
  const [type, setType] = useState("password");

  const handleType = () => {
    const newType = type === "password" ? "text" : "password";
    setType(newType);
  };

  const handleFocus = () => {
    if (setFocus) setFocus(true);
  };

  const handleBlur = () => {
    if (setFocus) setFocus(false);
    formik.setFieldTouched(field, true);
  };

  return (
    <InputGroup className="password-input-group mb-4">
      <InputGroup.Text
        className={`password-input-group-text ${
          isInValid(formik, field) ? "invalid" : ""
        }`}
        title={title || "Password"}
      >
        {children || <BsKeyFill />}
      </InputGroup.Text>
      <Form.Control
        className="user-password-input"
        type={type}
        placeholder={placeholder || "Password"}
        {...formik.getFieldProps(field)}
        name={field}
        onChange={formik.handleChange}
        value={formik.values[field]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isInvalid={isInValid(formik, field)}
        isValid={isValid(formik, field)}
      />
      <InputGroup.Text
        className={`password-eye  ${isInValid(formik, field) ? "invalid" : ""}`}
        onClick={handleType}
      >
        {type === "password" ? <HiEye /> : <HiEyeSlash />}
      </InputGroup.Text>
      <Form.Control.Feedback type="invalid" className="form-feedback">
        {formik.errors[field]}
      </Form.Control.Feedback>
    </InputGroup>
  );
};

export default PasswordInput;
