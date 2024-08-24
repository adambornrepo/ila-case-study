import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../api/auth-service";
import {
  failAttempt,
  login as loginSuccess,
  resetFailure,
} from "../../store/slices/auth-slice";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { Form } from "react-bootstrap";
import UsernameInput from "./username-input";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";

const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;
const MAX_FAILURE = process.env.REACT_APP_MAX_LOGIN_FAILURE;

const LoginForm = () => {
  const { failure } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: "derek",
    password: "jklg*_56",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username or email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      const resp = await login(values);
      dispatch(loginSuccess(resp.token));
      navigate("/register");
    } catch (error) {
      dispatch(failAttempt());
      toast.error("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleRecaptcha = () => {
    dispatch(resetFailure());
  };

  return (
    <>
      <div className="login-form-wrapper">
        <Form className="auth-form" noValidate onSubmit={formik.handleSubmit}>
          <UsernameInput formik={formik} field="username" />
          <PasswordInput formik={formik} field="password" />

          <div className="form-submit-button">
            {failure < MAX_FAILURE ? (
              <SubmitButton formik={formik} loading={loading} label="Login" />
            ) : (
              <div className="recaptcha-wrapper d-flex justify-content-center">
                <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={handleRecaptcha} />
              </div>
            )}
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
