import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../store/slices/auth-slice";
import { Form, Row, Col, Dropdown } from "react-bootstrap";
import { isInValid, isValid } from "../../helpers/function/forms";
import SubmitButton from "./submit-button";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "asd",
    lastName: "asd",
    gender: "Male",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "At least 2 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "At least 2 characters"),
    gender: Yup.string().required("Gender is required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    dispatch(register(formik.values));
    navigate("/dashboard");
    setLoading(false);
  };

  const handleGenderSelect = (gender) => {
    formik.setFieldValue("gender", gender);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="register-form-wrapper">
      <Form className="register-form" noValidate onSubmit={formik.handleSubmit}>
        <Row>
          <Col lg={6}>
            <Form.Group controlId="firstName" className="form-input-group">
              <Form.Control
                className="user-input"
                type="text"
                placeholder="First Name"
                {...formik.getFieldProps("firstName")}
                isInvalid={isInValid(formik, "firstName")}
                isValid={isValid(formik, "firstName")}
              />
              <Form.Control.Feedback type="invalid" className="form-feedback">
                {formik.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group controlId="lastName" className="form-input-group">
              <Form.Control
                className="user-input"
                type="text"
                placeholder="Last Name"
                {...formik.getFieldProps("lastName")}
                isInvalid={isInValid(formik, "lastName")}
                isValid={isValid(formik, "lastName")}
              />
              <Form.Control.Feedback type="invalid" className="form-feedback">
                {formik.errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="gender" className="form-input-group">
          <Dropdown onSelect={handleGenderSelect}>
            <Dropdown.Toggle
              variant="outline-secondary"
              id="dropdown-basic"
              className={`w-100 ${
                formik.errors.gender && formik.touched.gender
                  ? "is-invalid"
                  : ""
              } d-flex justify-content-between align-items-center`}
            >
              {formik.values.gender || "Gender"}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              <Dropdown.Item eventKey="" disabled>
                Gender
              </Dropdown.Item>
              <Dropdown.Item eventKey="Not Specified">
                Not Specified
              </Dropdown.Item>
              <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
              <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {formik.errors.gender && formik.touched.gender && (
            <div className="invalid-feedback form-feedback d-block">
              {formik.errors.gender}
            </div>
          )}
        </Form.Group>

        <SubmitButton formik={formik} loading={loading} label="Register" />
      </Form>
    </div>
  );
};

export default RegistrationForm;
