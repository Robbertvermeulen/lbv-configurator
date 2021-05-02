import React, { useContext } from "react";
import { ConfigContext } from "../../context/ConfigContext";
import useTotalPrice from "../../hooks/useTotalPrice";
import Wizard from "../../util/wizard";
import NumberFormat from "react-number-format";
import { getOptionTitle } from "../../util/helpers";
import Header from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import productImage from "../../images/demo/lbv-boat.jpg";

const OverviewPage = () => {
  const [config] = useContext(ConfigContext);
  const wizard = Wizard();
  const totalPrice = useTotalPrice();

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
                {wizard.getSteps().map((step, stepIndex) => {
                  return (
                    <React.Fragment key={stepIndex}>
                      <h3 className="h4 mb-4 text-green">{step.getTitle()}</h3>
                      <table width="100%" className="c-table mb-5">
                        <tbody>
                          {step.getParts() &&
                            step.getParts().map((part, partIndex) => {
                              if (config[part.getId()]) {
                                return (
                                  <tr className="c-table__row" key={partIndex}>
                                    <td className="c-table__col c-table__col--head">
                                      {part.getTitle()}
                                    </td>
                                    <td className="c-table__col">
                                      {part.getOptionTitle(
                                        config[part.getId()]
                                      )}
                                    </td>
                                  </tr>
                                );
                              }
                            })}
                        </tbody>
                      </table>
                    </React.Fragment>
                  );
                })}
                <div className="cart-subtotal mb-4">
                  <div className="cart-subtotal__label">Total price</div>
                  <div className="cart-subtotal__price">
                    <NumberFormat
                      displayType={"text"}
                      value={totalPrice}
                      prefix={"€"}
                      de
                      decimalSeparator={","}
                      thousandSeparator={"."}
                      decimalScale={2}
                    />
                  </div>
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
