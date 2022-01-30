import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import indieLogo from "../assets/indieLogo.svg";
const Header = () => {
  return (
    <HeaderContainer>
      <Navbar bg="light" expand="lg" id="total">
        <Container className="container-box">
          <Navbar.Brand href="#home" className="title-image-box">
            <img src={indieLogo} alt="indieLogo" />
            <h2 className="header-title">IndieBrew</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto group-links">
              <Link to="/getstarted">Pricing</Link>
              <Link to="/getstarted">Support</Link>
              <Link to="/getstarted" className="getStart-btn">
                Get Started — it’s free
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  .bg-light {
    background-color: transparent !important;
  }

  .title-image-box {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .header-title {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
    color: #000;
  }
  .group-links {
    display: flex;
    align-items: center;
  }

  .group-links a {
    color: #000;
    font-weight: 200;
    margin-left: 1rem;
    display: block;
    text-decoration: none;
  }

  .getStart-btn {
    padding: 1rem 2rem;
    color: #fff !important;
    background-color: #664efc;
    border: none;
    border-radius: 5px;
  }
`;
