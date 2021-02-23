import React, { useState } from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const CollapseBox = ({ className, children, collapsed, title }) => {
  let [open, setOpen] = useState(!collapsed);
  let headerIcon = open ? faAngleUp : faAngleDown;

  const handleHeaderClick = () => {
    setOpen(!open);
  };

  if (!open) {
    className += " is-collapsed";
  }

  return (
    <div className={`collapse-box ${className}`}>
      <div className="collapse-box__header" onClick={handleHeaderClick}>
        {title && <div className="collapse-box__title">{title}</div>}
        <div className="collapse-box__toggler">
          <FontAwesomeIcon icon={headerIcon} />
        </div>
      </div>
      <div className="collapse-box__body">{children}</div>
    </div>
  );
};

export default CollapseBox;
