import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  let items = [
    {
      title: "Propulsion system",
      isCurrent: 1,
    },
    {
      title: "Sails",
    },
    {
      title: "Navigation & Accesibility",
    },
    {
      title: "Deck & Exterior",
    },
  ];

  return (
    <nav className="app-header__nav">
      {items.map((item, i) => (
        <Item
          number={i + 1}
          title={item.title}
          key={i}
          current={item.isCurrent}
        ></Item>
      ))}
    </nav>
  );
};

const Item = (props) => {
  return (
    <Link
      className={`app-header__nav-item ${props.current ? "is-current" : ""}`}
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
