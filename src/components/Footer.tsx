import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <div className="first-box">
              <h1 className="title-footer">IndieBrew</h1>
              <p>
                With IndieBrew, get personal feeds from resources all around the
                web, including Reddit, HackerNews, and much more.
              </p>

              <p>Made with ❤️ in the UK.</p>
            </div>
          </Col>
          <Col lg={2} sm={12}>
            <div className="second-box">
              <h2>Sitemap</h2>
              <p>Homepage</p>
              <p>Pricing</p>
            </div>
          </Col>
          <Col lg={2} sm={12}>
            {" "}
            <div className="third-box">
              <h2>Resources</h2>
              <p>Support</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </Col>
          <Col lg={2} sm={12}>
            {" "}
            <div className="fourth-box">
              <h2>Company</h2>
              <p>About</p>
              <p>Customers</p>
              <p>Blog</p>
            </div>
          </Col>

          <Col lg={2} sm={12}>
            <div className="fifth-box">
              <h2>Resources</h2>
              <p>HackerNews</p>
              <p>Reddit</p>
              <p>Twitter</p>
            </div>
          </Col>
        </Row>
      </Container>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  padding: 3rem 0rem;
  color: #4f4f4f;
  background: #fbf8f3;

  .title-footer {
    margin-top: 0 !important;
  }
  h1,
  h2 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #000;
  }

  p {
    font-weight: 300;
  }

  @media only screen and (max-width: 999px) {
    padding: 2rem 0rem;

    h1,
    h2 {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;
export default Footer;
