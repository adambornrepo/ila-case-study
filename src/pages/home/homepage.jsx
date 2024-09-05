import FadeInAnimation from "../../components/common/fade-in-animation";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./homepage.scss";

const HomePage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { user } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return (
      <>{user ? <Navigate to="/dashboard" /> : <Navigate to="/register" />}</>
    );
  }

  return (
    <Container fluid className="home-page-container">
      <FadeInAnimation direction="bottom" range="50px" time="0.8s">
        <div className="homepage-branding-wrapper ">
          <div className="image-wrapper">
            <Image src="/logos/logo-white.png" fluid />
          </div>
          <div className="logo-text">International Labour Association</div>
          <div className="login-button-wrapper">
            <Button
              className="auth-login-button"
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          </div>
        </div>
      </FadeInAnimation>
    </Container>
  );
};

export default HomePage;
