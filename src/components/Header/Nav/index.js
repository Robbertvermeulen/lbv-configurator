import React from "react";
import "./style.css";
import structure from "../../../data/structure";
import { useParams, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <nav className="app-header__nav">
      {structure.map((step, i) => (
        <Item
          id={step.id}
          number={i + 1}
          title={step.title}
          key={i}
          current={i === 0}
        ></Item>
      ))}
    </nav>
  );
};

const Item = (props) => {
  const isCurrent = props.current;

  return (
    <Link
      to={`/step/${props.number}`}
      className={`app-header__nav-item ${isCurrent ? "is-current" : ""}`}
    >
      <span className="app-header__nav-item-title">{`${props.number}. ${props.title}`}</span>
      <FontAwesomeIcon
        icon={faAngleDown}
        className="app-header__nav-item-icon"
      ></FontAwesomeIcon>
    </Link>
  );
};

export default Nav;
