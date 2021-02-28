import React from "react";
import structure from "../../data/structure";
import Header from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import productImage from "../../images/demo/lbv-boat.jpg";

const OverviewPage = () => {
  return (
    <>
      <Header />
      <main className="app-main">
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              <div className="p-4 p-lg-5 round-borders bordered drop-shadow">
                <header>
                  <Row>
                    <Col md="9">
                      <div className="mb-4">
                        <h1 className="h3">Your configuration</h1>
                        <span>LBV35</span>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="mb-4">
                        <img
                          src={productImage}
                          className="round-borders"
                          width="100%"
                          alt="LBV35"
                        />
                      </div>
                    </Col>
                  </Row>
                </header>
                {structure.map((step, stepIndex) => (
                  <React.Fragment key={stepIndex}>
                    <h3 className="h4 mb-4 text-green">{step.title}</h3>
                    <table width="100%" className="c-table mb-5">
                      <tbody>
                        {step.parts &&
                          step.parts.map((part, partIndex) => (
                            <tr className="c-table__row" key={partIndex}>
                              <td className="c-table__col c-table__col--head">
                                {part.title}
                              </td>
                              <td className="c-table__col">Torgueedo Power</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </React.Fragment>
                ))}
                <div className="cart-subtotal mb-4">
                  <div className="cart-subtotal__label">Total price</div>
                  <div className="cart-subtotal__price">&euro; 169,00</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default OverviewPage;
