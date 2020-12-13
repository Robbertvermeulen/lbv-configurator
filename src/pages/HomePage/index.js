import React from "react";
import CollapseBox from "../../components/CollapseBox";
import Choice from "../../components/Choice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import choiceImage from "../../images/demo/choice-image.png";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col lg="8">
          <header className="mb-5">
            <h1 className="h3">Propulsion system</h1>
          </header>
          <section>
            <CollapseBox className="mb-3">
              <div className="mb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vulputate porta libero, vitae pretium nunc facilisis
                  vel. Suspendisse bibendum, augue sed mollis rhoncus, ligula
                  neque venenatis justo, et laoreet felis sapien malesuada
                  justo. Quisque rhoncus quam blandit, ullamcorper arcu quis,
                  ultrices nibh. Fusce lacinia vehicula diam nec consectetur.
                </p>
              </div>
              <div className="choices">
                <Row>
                  <Col sm="6" md="4">
                    <Choice image={choiceImage} isChosen="true"></Choice>
                  </Col>
                  <Col sm="6" md="4">
                    <Choice image={choiceImage}></Choice>
                  </Col>
                  <Col sm="6" md="4">
                    <Choice image={choiceImage}></Choice>
                  </Col>
                </Row>
              </div>
            </CollapseBox>
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
