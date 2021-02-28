import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import ProductImage from "../../components/ProductImage";
import productImage from "../../images/demo/lbv-boat.jpg";

const SideBar = () => {
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
              <span className="h4 mb-0 text-light">&euro; 169,00</span>
            </div>
          </Layout.Footer>
        </Layout>
      </div>
    </div>
  );
};

export default SideBar;
