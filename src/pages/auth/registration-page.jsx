import { Container } from "react-bootstrap";
import FadeInAnimation from "../../components/common/fade-in-animation";
import Branding from "../../components/auth/branding";
import FormHeader from "../../components/auth/form-header";
import RegistrationForm from "../../components/auth/registration-form";
import "./auth-pages.scss";

const RegistrationPage = () => {
  return (
    <Container fluid className="auth-page-container">
      <div className="page-content-wrapper">
        <div className="auth-form-side">
          <Branding />
        </div>
        <div className="auth-form-main">
          <FadeInAnimation direction="right" range="50px" time="0.8s">
            <>
              <FormHeader title="register" />
              <RegistrationForm />
            </>
          </FadeInAnimation>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationPage;
