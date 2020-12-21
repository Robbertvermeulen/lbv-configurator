import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";

const OverviewPage = () => {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <div className="p-5 round-borders bordered drop-shadow">
            <h3 className="h4 mb-4 text-green">Propulsion system</h3>
            <table width="100%" className="c-table">
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OverviewPage;
