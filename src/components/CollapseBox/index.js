import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const CollapseBox = ({ className, children }) => {
  let arrow = faAngleDown;

  return (
    <div className={`collapse-box ${className}`}>
      <div className="collapse-box__header">
        <div className="collapse-box__title">1. Engines</div>
        <div className="collapse-box__toggler">
          <FontAwesomeIcon icon={arrow} />
        </div>
      </div>
      <div className="collapse-box__body">{children}</div>
    </div>
  );
};

export default CollapseBox;
