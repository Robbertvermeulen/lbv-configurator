import React, { useState } from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import InfoModal from "../InfoModal";

const Choice = ({ label, image, isChosen, info, clickHandler }) => {
  const [modalShow, setModalShow] = useState(false);

  let classNames = ["choice"];
  if (isChosen) {
    classNames.push("is-chosen");
  }

  const handleMoreInfoClick = () => {
    setModalShow(!modalShow);
  };

  const handleModalHideClick = () => {
    setModalShow(false);
  };

  return (
    <>
      <div className={classNames.join(" ")}>
        <div className="choice__visual" onClick={clickHandler}>
          <img src={image} />
          {isChosen && (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="choice__check-icon"
            ></FontAwesomeIcon>
          )}
        </div>
        <div className="choice__title" onClick={clickHandler}>
          {label}
        </div>
        {info && (
          <div className="choice__more-info" onClick={handleMoreInfoClick}>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="choice__more-info-icon"
            />
            More info
          </div>
        )}
      </div>
      {info && (
        <InfoModal
          show={modalShow}
          onHide={handleModalHideClick}
          title={label}
          content={info}
        />
      )}
    </>
  );
};

export default Choice;
