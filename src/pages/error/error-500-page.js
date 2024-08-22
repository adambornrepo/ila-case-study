import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./error.scss";

const Error500Page = () => {

  return (
    <>
      <Container className="error-page-container">
        <Row noGutters className="error-page-sections">
          <Col xs={12} lg={6} className="error-page-section">
            <Image
              src={"/images/error/500.svg"}
              alt="server-error-image"
              fluid
            />
          </Col>
          <Col xs={12} lg={6} className="error-page-section">
            <h3 className="">
              Server Error
            </h3>
            <h5 className="">
              It seems something went wrong.
            </h5>
            <h5 className="">
              Please try again later.
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error500Page;
