import { Container, Image } from "react-bootstrap";
import FadeInAnimation from "../../components/common/fade-in-animation";
import Branding from "../../components/auth/branding";
import FormHeader from "../../components/auth/form-header";
import LoginForm from "../../components/auth/login-form";
import "./auth-pages.scss";

const LoginPage = () => {
  return (
    <Container fluid className="auth-page-container">
      <div className="page-content-wrapper">
        <div className="auth-form-side">
          <FadeInAnimation direction="left" range="50px" time="0.8s">
            <Branding />
          </FadeInAnimation>
        </div>
        <div className="auth-form-main">
          <FadeInAnimation direction="right" range="50px" time="0.8s">
            <>
              <FormHeader title="login" />
              <LoginForm />
            </>
          </FadeInAnimation>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
