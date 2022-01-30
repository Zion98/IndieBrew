import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import sm from "../assets/sm.svg";
const Curate = () => {
  return (
    <CurateSection>
      <Container>
        <Row>
          <Col
            lg={{ span: 4, order: 1 }}
            sm={{ span: 12, order: 0 }}
            md={{ span: 6, order: 1 }}
            className="col1"
          >
            <img
              src={sm}
              alt="curateImage"
              className="curateImage img-fluid logo"
            />
          </Col>
          <Col
            lg={{ span: 8, order: 0 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 0 }}
            className="col1"
          >
            <h2 className="curate-title">
              Curate your feed from dozens of resources.
            </h2>

            <p className="curate-content">
              We cover all major platforms where one could want to curate their
              feed from. Reddit, ProductHunt, IndieHackers, and so much more.
            </p>

            <Link to="/" className="curate-link">
              See full list of resources →
            </Link>
          </Col>
        </Row>
      </Container>
    </CurateSection>
  );
};

const CurateSection = styled.div`
  padding: 2rem 0;
  .curate-title {
    max-width: 70%;
    font-weight: bold;
    font-size: 2rem;
    color: #000;
    margin: 1rem 0;
  }

  .curate-content {
    font-size: 1rem;
    color: #6b6b6b;
    max-width: 70%;
  }

  .curate-link {
    display: block;
    margin: 0.5rem 0;
    text-decoration: none;
    color: #664efc;
  }

  .curateImage {
    max-width: 80%;
  }

  @media screen and (max-width: 996px) {
    .curate-title {
      margin-top: 2rem;
    }
    .curate-title,
    .curate-content {
      max-width: 100%;
    }

    .curateImage {
      max-width: 100%;
    }
  }
`;

export default Curate;
