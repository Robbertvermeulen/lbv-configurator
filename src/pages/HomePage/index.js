import React from "react";
import CollapseBox from "../../components/CollapseBox";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col lg="8">
          <header className="mb-5">
            <h1 className="h3">Propulsion system</h1>
          </header>
          <section className="">
            <CollapseBox className="mb-3"></CollapseBox>
            <CollapseBox className="mb-3"></CollapseBox>
            <CollapseBox className="mb-3"></CollapseBox>
            <CollapseBox className="mb-3"></CollapseBox>
          </section>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default HomePage;
