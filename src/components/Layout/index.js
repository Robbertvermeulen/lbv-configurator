import React from "react";
import "./style.css";

const Layout = ({ className, variant, children }) => {
  let classNames = ["layout"];
  if (variant) classNames.push("layout--" + variant);
  if (className) className.split().map((cn) => classNames.push(cn));
  return <div className={classNames.join(" ")}>{children}</div>;
};

const Header = (props) => {
  return <header className="layout__header">{props.children}</header>;
};

const Body = (props) => {
  return (
    <div className={`layout__body ${props.className}`}>{props.children}</div>
  );
};

const Footer = (props) => {
  return <footer className="layout__footer">{props.children}</footer>;
};

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;

export default Layout;
