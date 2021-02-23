import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

const PrimaryButton = ({ children, className, block, handleClick }) => {
  return (
    <Button
      className={`btn--primary ${className}`}
      block={block}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
