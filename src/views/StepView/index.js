import React from "react";
import Header from "../../components/Header";
import MainBar from "../../components/MainBar";
import SideBar from "../../components/SideBar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StepView = () => {
  return (
    <>
      <Header />
      <main className="app-main">
        <Container>
          <Row>
            <Col lg="8">
              <MainBar />
            </Col>
            <Col lg="4">
              <SideBar />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default StepView;
