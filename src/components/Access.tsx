import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import phone from "../assets/phone.svg";
const Access = () => {
  return (
    <AccessSection>
      <Container>
        <Row>
          <Col lg={6} sm={12} md={6} className="col1">
            <img src={phone} alt="phoneImage" className="phoneImage logo" />
          </Col>

          <Col lg={6} sm={12} md={6} className="col1 second-box">
            <h2 className="access-title">
              Access your feed from the comfort of your phone.
            </h2>

            <p>
              With native apps for both iOS and Android, accessing your curated
              content has never been easier.
            </p>
            <Link to="/" className="access-link">
              Sign up for the waitlsit →
            </Link>
          </Col>
        </Row>
      </Container>
    </AccessSection>
  );
};

const AccessSection = styled.div`
  padding: 2rem 0;

  .col1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .access-title {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
    margin-top: 2rem;
  }
  .access-link {
    display: block;
    margin: 0.5rem 0;
    text-decoration: none;
    color: #664efc;
  }

  .phoneImage {
    max-width: 70%;
  }

  @media screen and (max-width: 768px) {
    .col1 {
      align-items: center;
    }

    .second-box {
      align-items: flex-start;
    }
  }
`;

export default Access;
