import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Nav from "./Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <header className="app-header">
      <Container>
        <Row>
          <Col lg="3" className="d-flex justify-content-center d-lg-block">
            <Link to="/" className="app-header__logo">
              <img src={logo} width="100%" />
            </Link>
          </Col>
          <Col lg="9">
            <Nav></Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
