import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import structure from "../../data/structure";
import { Link } from "react-router-dom";
import CollapseBox from "../../components/CollapseBox";
import Choice from "../../components/Choice";
import PrimaryButton from "../../components/PrimaryButton";
import ProductImage from "../../components/ProductImage";
import { Button } from "react-bootstrap";
import Layout from "../../components/Layout";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import choiceImage from "../../images/demo/choice-image.png";
import productImage from "../../images/demo/lbv-boat.jpg";

const StepPage = (props) => {
  const { id } = useParams();
  let stepId = id || 1;
  const step = structure.find((option) => option.id == stepId);

  return (
    <Container>
      <Row>
        <Col lg="8">
          <header className="mb-4 d-flex justify-content-center d-lg-block">
            <h1 className="h3">{step.title}</h1>
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
                  <Col xs="6" md="4">
                    <Choice image={choiceImage} isChosen="true"></Choice>
                  </Col>
                  <Col xs="6" md="4">
                    <Choice image={choiceImage}></Choice>
                  </Col>
                  <Col xs="6" md="4">
                    <Choice image={choiceImage}></Choice>
                  </Col>
                </Row>
              </div>
            </CollapseBox>
            <CollapseBox className="mb-3">
              <div className="mb-4">
                <p>
                  Suspendisse bibendum, augue sed mollis rhoncus, ligula neque
                  venenatis justo, et laoreet felis sapien malesuada justo.
                  Quisque rhoncus quam blandit, ullamcorper arcu quis, ultrices
                  nibh. Fusce lacinia vehicula diam nec consectetur.
                </p>
              </div>
              <Row>
                <Col sm="6">
                  <Form.Control as="select">
                    <option>Torgueedo</option>
                  </Form.Control>
                </Col>
              </Row>
            </CollapseBox>
            <CollapseBox className="mb-3"></CollapseBox>
            <CollapseBox className="mb-3"></CollapseBox>
          </section>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <PrimaryButton className="mb-5" block>
                Next step &raquo;
              </PrimaryButton>
            </Col>
          </Row>
        </Col>
        <Col lg="4">
          <div className="sticky">
            <div className="mb-3">
              <ProductImage src={productImage}></ProductImage>
            </div>
            <div className="mb-3">
              <Layout variant="green">
                <Layout.Header>
                  <div className="text-center text-light">
                    <span className="d-block">LBV35</span>
                    <span className="d-block h4">Your configuration</span>
                  </div>
                </Layout.Header>
                <Layout.Body className="pt-0">
                  <Link to="/overview">
                    <Button variant="outline-light" block>
                      Overview configuration &raquo;
                    </Button>
                  </Link>
                </Layout.Body>
                <Layout.Footer>
                  <div className="d-flex justify-content-between">
                    <span className="h4 mb-0 text-light">Total</span>
                    <span className="h4 mb-0 text-light">&euro; 169,00</span>
                  </div>
                </Layout.Footer>
              </Layout>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StepPage;
