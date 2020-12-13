import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

const PrimaryButton = (props) => {
  return (
    <Button className="btn--primary" block={props.block}>
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
