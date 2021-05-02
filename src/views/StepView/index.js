import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useTotalPrice from "../../hooks/useTotalPrice";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import StepBox from "../../components/StepBox";
import ProductImage from "../../components/ProductImage";
import NumberFormat from "react-number-format";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Wizard from "../../util/wizard";

import productImage from "../../images/demo/lbv-boat.jpg";

const StepView = () => {
  const history = useHistory();
  const totalPrice = useTotalPrice();
  const { slug } = useParams();
  const wizard = Wizard();
  const [step, setStep] = useState(wizard.setStep(slug));
  const [stepTitle, setStepTitle] = useState("");
  const [stepParts, setStepParts] = useState([]);

  const handleNextButtonClick = () => {
    wizard.navigateToNextStep(history);
  };

  useEffect(() => {
    setStep(wizard.setStep(slug));
  }, [slug]);

  useEffect(() => {
    setStepTitle(step.getTitle());
    setStepParts(step.getParts());
  }, [step]);

  return (
    <>
      <Header />
      <main className="app-main">
        <Container>
          <Row>
            <Col lg="8">
              <header className="mb-4 d-flex justify-content-center d-lg-block">
                <h1 className="h3">{stepTitle}</h1>
              </header>
              <section>
                {stepParts &&
                  stepParts.map((part, index) => (
                    <StepBox
                      key={part.getId()}
                      title={part.getTitle()}
                      index={index}
                      collapsed={index > 0}
                      part={part}
                    />
                  ))}
              </section>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <button
                    className="button button--primary button--block mb-5"
                    onClick={handleNextButtonClick}
                  >
                    Next step &raquo;
                  </button>
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
                      <Link
                        to="/overview"
                        className="button button--outline button--outline-primary button--block"
                      >
                        Overview configuration &raquo;
                      </Link>
                    </Layout.Body>
                    <Layout.Footer>
                      <div className="d-flex justify-content-between">
                        <span className="h4 mb-0 text-light">Total</span>
                        <span className="h4 mb-0 text-light">
                          <NumberFormat
                            displayType={"text"}
                            value={totalPrice}
                            prefix={"€"}
                            de
                            decimalSeparator={","}
                            thousandSeparator={"."}
                          />
                        </span>
                      </div>
                    </Layout.Footer>
                  </Layout>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default StepView;
