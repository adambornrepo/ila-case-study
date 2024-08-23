import { Col, Container, Row } from "react-bootstrap";
import SocialLinks from "../common/social-links";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <Container>
        <Row className="dashboard-footer-container">
          <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }} className="footer-copyright-section">
            <span className="footer-description">
              ILA - 2024 | &copy; All rights reserved
            </span>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span:6, order: 2 }}
            className="footer-social-section"
          >
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
