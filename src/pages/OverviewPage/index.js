import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "../../components/Table";
import PrimaryButton from "../../components/PrimaryButton";

import productImage from "../../images/demo/lbv-boat.jpg";

const OverviewPage = () => {
  return (
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
                    />
                  </div>
                </Col>
              </Row>
            </header>
            <h3 className="h4 mb-4 text-green">Propulsion system</h3>
            <Table>
              <Table.Row>
                <Table.Col header="true">Engines</Table.Col>
                <Table.Col>Torgueedo Power</Table.Col>
              </Table.Row>
              <Table.Row>
                <Table.Col header="true">Engines</Table.Col>
                <Table.Col>Torgueedo Power</Table.Col>
              </Table.Row>
              <Table.Row>
                <Table.Col header="true">Engines</Table.Col>
                <Table.Col>Torgueedo Power</Table.Col>
              </Table.Row>
            </Table>
            <h3 className="h4 mb-4 text-green">Propulsion system</h3>
            <Table>
              <Table.Row>
                <Table.Col header="true">Engines</Table.Col>
                <Table.Col>Torgueedo Power</Table.Col>
              </Table.Row>
              <Table.Row>
                <Table.Col header="true">Engines</Table.Col>
                <Table.Col>Torgueedo Power</Table.Col>
              </Table.Row>
              <Table.Row>
                <Table.Col header="true">Engines</Table.Col>
                <Table.Col>Torgueedo Power</Table.Col>
              </Table.Row>
            </Table>
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
