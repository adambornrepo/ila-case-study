import { Form, InputGroup } from "react-bootstrap";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { isInValid, isValid } from "../../helpers/function/forms";
import "./username-input.scss";

const UsernameInput = ({ formik, placeholder, field, title, children }) => {
  return (
    <InputGroup className="password-input-group mb-4">
      <InputGroup.Text
        className={`${isInValid(formik, field) ? "invalid" : ""}`}
        title={title || "Username or Password"}
      >
        {children || <BsFillPersonVcardFill />}
      </InputGroup.Text>
      <Form.Control
        className="user-input"
        type="text"
        placeholder={placeholder || "Username or Email"}
        autoComplete="off"
        {...formik.getFieldProps(field)}
        isInvalid={isInValid(formik, field)}
        isValid={isValid(formik, field)}
      />
      <Form.Control.Feedback type="invalid" className="form-feedback">
        {formik.errors.username}
      </Form.Control.Feedback>
    </InputGroup>
  );
};

export default UsernameInput;
