import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../images/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <header className="app-header">
      <Container>
        <Row>
          <Col lg="3">
            <div className="app-header__logo">
              <img src={logo} width="100%" />
            </div>
          </Col>
          <Col lg="9">
            <nav className="app-header__nav">
              <Link className="app-header__nav-item is-current">
                1. Propulsion system
              </Link>
              <Link className="app-header__nav-item">2. Sails</Link>
              <Link className="app-header__nav-item">
                3. Navigation & Accesibility
              </Link>
              <Link className="app-header__nav-item">4. Deck & Exterior</Link>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
