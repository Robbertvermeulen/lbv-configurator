import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrimaryButton from "../../components/PrimaryButton";

import productImage from "../../images/demo/lbv-boat.jpg";

const OverviewPage = () => {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <div className="p-5 round-borders bordered drop-shadow">
            <header>
              <Row>
                <Col md="9">
                  <h1 className="h3">Your configuration</h1>
                  <span>LBV35</span>
                </Col>
                <Col md="3">
                  <img
                    src={productImage}
                    className="round-borders"
                    width="100%"
                  />
                </Col>
              </Row>
            </header>
            <h3 className="h4 mb-4 text-green">Propulsion system</h3>
            <table width="100%" className="c-table mb-5">
              <tr className="c-table__row">
                <th className="c-table__col c-table__col--head">Engines</th>
                <td className="c-table__col">
                  Oceanvolt 5kW shaft drive system
                </td>
              </tr>
              <tr className="c-table__row">
                <th className="c-table__col c-table__col--head">
                  Battery pack
                </th>
                <td className="c-table__col">
                  2x5 Oceanvolt - 9,5 kWh battery pack
                </td>
              </tr>
              <tr className="c-table__row">
                <th className="c-table__col c-table__col--head">
                  Battery charger
                </th>
                <td className="c-table__col">
                  2x Torqeedo Charger for Power 48-5000
                </td>
              </tr>
            </table>
            <div className="cart-subtotal mb-4">
              <div className="cart-subtotal__label">Total price</div>
              <div className="cart-subtotal__price">&euro; 169,00</div>
            </div>
            <PrimaryButton block>Email quote</PrimaryButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OverviewPage;
