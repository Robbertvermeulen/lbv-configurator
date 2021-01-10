import React from "react";
import "./style.css";

const Table = (props) => {
  return (
    <table width="100%" className="c-table mb-5">
      {props.children}
    </table>
  );
};

const Row = (props) => {
  return <tr className="c-table__row">{props.children}</tr>;
};

const Col = (props) => {
  if (props.header) {
    return (
      <th className="c-table__col c-table__col--head">{props.children}</th>
    );
  }
  return <tr className="c-table__col">{props.children}</tr>;
};

Table.Row = Row;
Table.Col = Col;

export default Table;
