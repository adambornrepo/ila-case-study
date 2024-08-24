import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HiArrowUturnLeft, HiHome } from "react-icons/hi2";
import "./error.scss";

const Error404Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="error-page-container">
        <Row className="error-page-sections">
          <Col xs={12} lg={6} className="error-page-section">
            <Image
              src={"/images/error/404.svg"}
              alt="Not Found"
              fluid
            />
          </Col>
          <Col xs={12} lg={6} className="error-page-section">
            <h3 className="">
              Not  Found
            </h3>
            <h5 className="">
              Sorry, we can't find this page.
            </h5>

            <div className="error-page-button-wrapper">
              <Button
                onClick={() => navigate(-1)}
                className="error-button back-button"
                variant="secondary"
              >
                <HiArrowUturnLeft />
              </Button>

              <Button
                onClick={() => navigate("/")}
                className="error-button home-button"
                variant="primary"
              >
                <HiHome />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error404Page;
