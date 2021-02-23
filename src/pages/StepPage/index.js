import React from "react";
import { useParams, useHistory } from "react-router-dom";
import structure from "../../data/structure";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
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

const MainSection = ({ step }) => {
  const history = useHistory();

  const handleNextButtonClick = () => {
    const nextIndex = structure.findIndex((s) => s.id === step.id);
    const nextStep = structure[nextIndex + 1];
    history.push(`/step/${nextStep.slug}/`);
  };

  let collapseBoxes = [];
  if (step.parts) {
    step.parts.map((part, index) => {
      let title = index + 1 + ". " + part.title;
      if (part.options) {
        collapseBoxes.push(
          <CollapseBox className="mb-3" title={title} key={index}>
            <div className="mb-4">{part.description}</div>
            {part.type === "choice" && (
              <div className="choices">
                <Row>
                  {part.options.map((option, i) => (
                    <Col xs="6" md="4" key={i}>
                      <Choice
                        label={option.title}
                        image={choiceImage}
                        isChosen="true"
                      ></Choice>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {part.type === "dropdown" && (
              <Form.Control as="select">
                {part.options.map((option, i) => (
                  <option value={option.id} key={i}>
                    {option.title}
                  </option>
                ))}
              </Form.Control>
            )}
          </CollapseBox>
        );
      }
    });
  }

  return (
    <>
      <header className="mb-4 d-flex justify-content-center d-lg-block">
        <h1 className="h3">{step.title}</h1>
      </header>
      <section>{collapseBoxes}</section>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <PrimaryButton
            className="mb-5"
            block
            handleClick={handleNextButtonClick}
          >
            Next step &raquo;
          </PrimaryButton>
        </Col>
      </Row>
    </>
  );
};

const SubSection = () => {
  return (
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
  );
};

const StepPage = () => {
  let { slug } = useParams();
  const step = structure.find((step) => step.slug === slug) || structure[0];

  return (
    <>
      <Header />
      <main className="app-main">
        <Container>
          <Row>
            <Col lg="8">
              <MainSection step={step} />
            </Col>
            <Col lg="4">
              <SubSection />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default StepPage;
