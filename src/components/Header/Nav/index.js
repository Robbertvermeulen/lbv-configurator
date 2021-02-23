import React, { useEffect } from "react";
import "./style.css";
import structure from "../../../data/structure";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { slug } = useParams();

  return (
    <nav className="app-header__nav">
      {structure.map((step, i) => (
        <Item
          slug={step.slug}
          number={i + 1}
          title={step.title}
          key={i}
          isCurrent={step.slug === slug}
        ></Item>
      ))}
    </nav>
  );
};

const Item = ({ title, slug, isCurrent, number }) => {
  return (
    <Link
      to={`/step/${slug}/`}
      className={`app-header__nav-item ${isCurrent && "is-current"}`}
    >
      <span className="app-header__nav-item-title">{`${number}. ${title}`}</span>
      <FontAwesomeIcon
        icon={faAngleDown}
        className="app-header__nav-item-icon"
      ></FontAwesomeIcon>
      {isCurrent}
    </Link>
  );
};

export default Nav;
