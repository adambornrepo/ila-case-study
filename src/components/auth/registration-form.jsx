import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../store/slices/auth-slice";
import { Form, Row, Col, Dropdown, Button } from "react-bootstrap";
import { isInValid, isValid } from "../../helpers/function/forms";
import SubmitButton from "./submit-button";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "asd",
    lastName: "asd",
    gender: "Male",
    cv: null,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "At least 2 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "At least 2 characters"),
    gender: Yup.string().required("Gender is required"),
    cv: Yup.mixed()
      .required("CV is required")
      .test(
        "fileSize",
        "Maximum size is 10MB",
        (value) => value && value.size <= 10 * 1024 * 1024
      ),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    const { cv, ...rest } = values;

    // This part is for sending the form to the backend
    // But it is not necessary in this case-study
    const formData = new FormData();
    formData.append("cv", values.cv);
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("gender", values.gender);

    dispatch(register(rest));
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

        <Form.Group controlId="cv" className="form-input-group">
          <Form.Control
            className="user-input d-none"
            type="file"
            ref={fileInputRef}
            onChange={(event) => {
              formik.setFieldValue("cv", event.currentTarget.files[0]);
            }}
            isInvalid={isInValid(formik, "cv")}
            isValid={isValid(formik, "cv")}
          />
          <Button
            variant="outline-dark"
            className="file-upload-button"
            onClick={() => fileInputRef.current.click()}
          >
            {formik.values.cv ? formik.values.cv?.name : "Upload CV"}
          </Button>
          <Form.Control.Feedback type="invalid" className="form-feedback">
            {formik.errors.cv}
          </Form.Control.Feedback>
        </Form.Group>

        <SubmitButton formik={formik} loading={loading} label="Register" />
      </Form>
    </div>
  );
};

export default RegistrationForm;
