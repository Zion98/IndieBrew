import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import heroSection from "../assets/heroSection.svg";
import users from "../assets/users.svg";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Row>
          <Col lg={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }}>
            <img
              src={heroSection}
              alt="heroImage"
              className="heroImage img-fluid"
            />
          </Col>
          <Col
            lg={{ span: 6, order: 0 }}
            md={{ span: 6, order: 0 }}
            className="col1"
          >
            <h2 className="hero-title">
              Your weekly <br /> personal feed digest.
            </h2>

            <p className="hero-content">
              With IndieBrew, get personal feeds from resources all around the
              web, including Reddit, HackerNews, IndieHackers, and much more.
            </p>

            <Link to="/" className="getStart-btn">
              {" "}
              Get Started — it’s free
            </Link>
            <img src={users} alt="usersImage" className="usersImage" />
            <p className="join">
              Join <span>32,642</span> IndieBrewers in curating their personal
              digest.
            </p>
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.div`
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  padding: 2rem 0;
  .col1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .heroImage {
    margin-top: 4rem;
    /* position:relative; */
    /* left:4rem; */
  }

  .hero-title {
    font-weight: bold;
    font-size: 3.5rem;
    
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .hero-content {
    margin: 0.5rem 0;
    font-weight: 200;
    font-size: 1rem;
    color: #6b6b6b;
  }

  .getStart-btn {
    text-decoration: none;
    text-align: center;
    display: inline-block;
    max-width: 50%;
    padding: 1rem 1.5rem;
    color: #fff !important;
    background-color: #664efc;
    border: none;
    border-radius: 5px;
  }

  .usersImage {
    margin: 1rem 0;
    width: 220px;
  }

  .join {
    color: #6b6b6b;
    font-size: 1rem;

    span {
      color: #664efc;
    }
  }

  @media screen and (max-width:999px){

    .hero-title{
    font-size:2rem;
  }
    .heroImage {
    margin-top: 0;
    }
    .getStart-btn {
    max-width: 80%;
    padding: .8rem;
  }

 
`;
