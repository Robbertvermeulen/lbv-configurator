import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Choice = ({ label, image, isChosen, onClick }) => {
  let classNames = ["choice"];
  if (isChosen) {
    classNames.push("is-chosen");
  }
  return (
    <div className={classNames.join(" ")} onClick={onClick}>
      <div className="choice__visual">
        <img src={image} />
        {isChosen && (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="choice__check-icon"
          ></FontAwesomeIcon>
        )}
      </div>
      <div className="choice__title">{label}</div>
    </div>
  );
};

export default Choice;
